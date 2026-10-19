/* Shared SVG/HTML renderer for visual mathematics questions and CMS previews. */
window.QuestionMediaRenderer = (() => {
    function parseParams(question) {
        if (!question || !question.visual) return null;
        if (typeof question.visual === 'object') return question.visual;
        try {
            const parsed = JSON.parse(question.visual);
            return parsed && typeof parsed === 'object' ? parsed : null;
        } catch (error) {
            return null;
        }
    }

    function numbersFrom(question) {
        return (String(question && question.question ? question.question : '').match(/\d+/g) || [])
            .map(value => parseInt(value, 10))
            .filter(Number.isFinite);
    }

    function bounded(value, min, max, fallback) {
        const number = Number(value);
        return Number.isFinite(number) ? Math.min(max, Math.max(min, number)) : fallback;
    }

    function isIntegerInRange(value, min, max) {
        const number = Number(value);
        return Number.isInteger(number) && number >= min && number <= max;
    }

    function formatStudentNumber(value) {
        const number = Number(value);
        if (!Number.isFinite(number)) return String(value ?? '');
        const sign = number < 0 ? '-' : '';
        const absolute = Math.abs(number);
        const raw = Number.isInteger(absolute) ? String(absolute) : String(absolute);
        const [whole, decimal] = raw.split('.');
        const groupedWhole = whole.length < 5 ? whole : whole.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
        return sign + groupedWhole + (decimal ? `,${decimal}` : '');
    }

    function escapeSvgText(value) {
        return String(value ?? '').replace(/[&<>"']/g, character => ({
            '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
        }[character]));
    }

    function isPlainObject(value) {
        return value !== null && typeof value === 'object' && !Array.isArray(value);
    }

    function grade4ForbiddenAnswerFields(value, path = '') {
        if (!value || typeof value !== 'object') return [];
        const forbidden = new Set([
            'correct_answer', 'answer', 'explanation', 'expected', 'winner',
            'expected_choice', 'correct_index', 'answer_index', 'correct_option'
        ]);
        const errors = [];
        Object.entries(value).forEach(([key, child]) => {
            const childPath = path ? `${path}.${key}` : key;
            if (forbidden.has(String(key).toLowerCase())) errors.push(`forbidden answer field: ${childPath}`);
            errors.push(...grade4ForbiddenAnswerFields(child, childPath));
        });
        return errors;
    }

    function grade4Integer(value, min, max) {
        return Number.isInteger(value) && value >= min && value <= max;
    }

    function grade4Boolean(value) {
        return typeof value === 'boolean';
    }

    function grade4ShadedModels(parts, wholeCount, errors) {
        if (!Array.isArray(parts) || parts.length === 0) {
            errors.push('shaded_parts is required.');
            return [];
        }
        const models = Array.isArray(parts[0]) ? parts : [parts];
        if (models.length !== wholeCount || models.some(model => !Array.isArray(model))) {
            errors.push('shaded_parts count must match whole_count.');
            return [];
        }
        return models;
    }

    function grade4QuestionIsAngleMeasurement(questionText, templateId) {
        if (templateId === 'g4wk_tpl_h1_w04_read_angle_degree') return true;
        const text = String(questionText || '').trim();
        return text !== '' && /(?:đọc\s+(?:số\s+đo\s+(?:của\s+)?)?góc|đo\s+góc|số\s+đo\s+của\s+góc)/iu.test(text);
    }

    function grade4QuestionIsFractionCalculation(questionText) {
        const text = String(questionText || '').trim();
        return text !== '' && /(?:\bTính\b|\bRút\s+gọn\b|\bQuy\s+đồng\b|\d+\s*\/\s*\d+\s*[+−×:]\s*\d+\s*\/\s*\d+)/iu.test(text);
    }

    function grade4FractionMatchesAnswer(params, correctAnswer) {
        if (!correctAnswer || params.type !== 'fraction_model') return false;
        const answer = String(correctAnswer).trim().match(/^(\d+)\s*\/\s*(\d+)$/u);
        if (!answer || Number(answer[2]) === 0 || !Number.isInteger(params.numerator) || !Number.isInteger(params.denominator) || params.denominator === 0) return false;
        return params.numerator * Number(answer[2]) === Number(answer[1]) * params.denominator;
    }

    // The same contract is implemented in tools/lib/grade4-svg-media-validation.php.
    // Keeping a client validator here avoids rendering a misleading SVG when a bad
    // payload reaches a preview or a student screen.
    function validateGrade4MediaParams(params, questionText = '', templateId = '', correctAnswer = null) {
        const errors = grade4ForbiddenAnswerFields(params);
        const type = params && params.type;
        const allowed = new Set([
            'angle_protractor', 'parallel_perpendicular_lines', 'fraction_model',
            'bar_chart', 'rhombus_diagonals'
        ]);
        if (!isPlainObject(params) || !allowed.has(type)) {
            errors.push('Unsupported Grade 4 SVG type.');
            return { valid: false, errors: [...new Set(errors)] };
        }

        if (type === 'angle_protractor') {
            const degrees = params.angle_degrees;
            const kindChecks = {
                acute: value => value >= 1 && value <= 89,
                right: value => value === 90,
                obtuse: value => value >= 91 && value <= 179,
                straight: value => value === 180
            };
            if (params.baseline !== 'horizontal') errors.push('Angle baseline must be horizontal.');
            if (!grade4Integer(degrees, 1, 180)) errors.push('angle_degrees must be an integer from 1 to 180.');
            if (typeof params.angle_kind !== 'string' || !kindChecks[params.angle_kind] || !kindChecks[params.angle_kind](degrees)) {
                errors.push('angle_kind does not match angle_degrees.');
            }
            ['show_protractor', 'show_degree_label', 'show_right_angle_marker'].forEach(field => {
                if (!grade4Boolean(params[field])) errors.push(`${field} must be boolean.`);
            });
            if (params.show_degree_label === true && grade4QuestionIsAngleMeasurement(questionText, templateId)) {
                errors.push('Angle measurement questions must hide the degree label.');
            }
            if (params.angle_kind === 'right' && params.show_right_angle_marker !== true) errors.push('Right angles require the SVG square marker.');
            if (params.angle_kind !== 'right' && params.show_right_angle_marker === true) errors.push('Only right angles may have the SVG square marker.');
        }

        if (type === 'parallel_perpendicular_lines') {
            if (!['parallel', 'perpendicular'].includes(params.relation)) errors.push('relation must be parallel or perpendicular.');
            if (!['horizontal', 'vertical'].includes(params.orientation)) errors.push('orientation must be horizontal or vertical.');
            if (!grade4Boolean(params.show_parallel_marks)) errors.push('show_parallel_marks must be boolean.');
            if (!grade4Boolean(params.show_right_angle_marker)) errors.push('show_right_angle_marker must be boolean.');
            if (params.relation === 'parallel' && params.show_parallel_marks !== true) errors.push('Parallel lines require SVG arrow marks.');
            if (params.relation === 'perpendicular' && params.show_right_angle_marker !== true) errors.push('Perpendicular lines require the SVG square marker.');
            if (Object.prototype.hasOwnProperty.call(params, 'relation_text')) errors.push('relation_text is not allowed in a relation-checking diagram.');
        }

        if (type === 'fraction_model') {
            const denominator = params.denominator;
            const numerator = params.numerator;
            const wholeCount = params.whole_count;
            if (!['bar', 'circle'].includes(params.shape)) errors.push('Fraction shape must be bar or circle.');
            if (!grade4Integer(denominator, 2, 12)) errors.push('denominator must be an integer from 2 to 12.');
            if (!grade4Integer(numerator, 1, 48)) errors.push('numerator must be a positive integer.');
            if (!grade4Integer(wholeCount, 1, 4)) errors.push('whole_count must be an integer from 1 to 4.');
            if (grade4Integer(denominator, 2, 12) && grade4Integer(numerator, 1, 48) && grade4Integer(wholeCount, 1, 4)
                && wholeCount !== Math.ceil(numerator / denominator)) errors.push('whole_count must exactly fit numerator and denominator.');
            const models = grade4ShadedModels(params.shaded_parts, grade4Integer(wholeCount, 1, 4) ? wholeCount : 1, errors);
            if (grade4Integer(denominator, 2, 12) && models.length > 0) {
                let total = 0;
                models.forEach(model => {
                    if (new Set(model).size !== model.length || model.some(part => !grade4Integer(part, 0, denominator - 1))) {
                        errors.push('shaded_parts must contain unique valid part indexes.');
                    }
                    total += model.length;
                });
                if (grade4Integer(numerator, 1, 48) && total !== numerator) errors.push('shaded_parts count must match numerator.');
            }
            if (!grade4Boolean(params.show_fraction_label)) errors.push('show_fraction_label must be boolean.');
            if (grade4QuestionIsFractionCalculation(questionText) && grade4FractionMatchesAnswer(params, correctAnswer)) {
                errors.push('Fraction calculation media must not render the result as the shaded fraction.');
            }
        }

        if (type === 'bar_chart') {
            const axis = params.y_axis;
            const series = params.series;
            const axisValid = isPlainObject(axis) && grade4Integer(axis.min, 0, 1000000)
                && grade4Integer(axis.max, 1, 1000000) && grade4Integer(axis.step, 1, 1000000)
                && axis.min < axis.max && (axis.max - axis.min) % axis.step === 0;
            if (!axisValid) errors.push('bar_chart axis range must contain a divisible integer min, max and step.');
            if (!Array.isArray(series) || series.length < 2 || series.length > 6) {
                errors.push('bar_chart requires 2 to 6 series.');
            } else if (axisValid) {
                const labels = [];
                const values = [];
                series.forEach(item => {
                    if (!isPlainObject(item) || typeof item.label !== 'string' || item.label.trim() === '' || !grade4Integer(item.value, axis.min, axis.max)) {
                        errors.push('Each bar must have a label and in-range integer value.');
                        return;
                    }
                    if ((item.value - axis.min) % axis.step !== 0) errors.push('Every bar value must land exactly on an axis tick.');
                    labels.push(item.label);
                    values.push(item.value);
                });
                if (new Set(labels).size !== labels.length) errors.push('Bar labels must be unique.');
                if (['highest', 'lowest'].includes(params.question_mode) && values.length === series.length) {
                    const extreme = params.question_mode === 'highest' ? Math.max(...values) : Math.min(...values);
                    if (values.filter(value => value === extreme).length !== 1) errors.push('Highest/lowest bar questions must have one unique extreme.');
                }
            }
            if (!['read_value', 'highest', 'lowest', 'compare'].includes(params.question_mode)) errors.push('Unsupported bar_chart question_mode.');
            if (!grade4Boolean(params.show_values)) errors.push('show_values must be boolean.');
        }

        if (type === 'rhombus_diagonals') {
            const labels = params.vertex_labels;
            if (!Array.isArray(labels) || labels.length !== 4 || new Set(labels).size !== 4) errors.push('Rhombus requires four unique vertex labels.');
            ['show_diagonals', 'show_perpendicular_marker', 'show_area'].forEach(field => {
                if (!grade4Boolean(params[field])) errors.push(`${field} must be boolean.`);
            });
            if (params.show_diagonals || params.show_perpendicular_marker || params.show_area) errors.push('Rhombus diagonals, perpendicular marker and area are not enabled for Grade 4 yet.');
            if (!grade4Integer(params.diagonal_long, 40, 300) || !grade4Integer(params.diagonal_short, 40, 300) || params.diagonal_long === params.diagonal_short) {
                errors.push('Rhombus diagonal lengths must be valid and different.');
            }
        }

        return { valid: errors.length === 0, errors: [...new Set(errors)] };
    }

    const grade5SvgTypes = new Set([
        'rectangular_prism_model', 'circle_measurement', 'trapezoid_measurement',
        'triangle_measurement', 'rhombus_measurement', 'pie_chart', 'motion_timeline'
    ]);

    function grade5PositiveNumber(value, maximum = 1000000) {
        return typeof value === 'number' && Number.isFinite(value) && value > 0 && value <= maximum;
    }

    function grade5HandMeasurement(value) {
        return Number.isInteger(value) && value >= 1 && value <= 50;
    }

    function grade5Labels(value, count, label, errors) {
        if (!Array.isArray(value) || value.length !== count || value.some(item => typeof item !== 'string' || item.trim() === '') || new Set(value).size !== count) {
            errors.push(`${label} must contain ${count} unique labels.`);
            return false;
        }
        return true;
    }

    function grade5ForbiddenGeometryFields(value, path = '') {
        if (!value || typeof value !== 'object') return [];
        const forbidden = new Set([
            'area', 'expected_area', 'perimeter', 'expected_perimeter', 'circumference',
            'expected_circumference', 'volume', 'expected_volume', 'surface_area',
            'total_surface_area', 'lateral_surface_area', 'result', 'solution', 'formula'
        ]);
        const errors = [];
        Object.entries(value).forEach(([key, child]) => {
            const childPath = path ? `${path}.${key}` : key;
            if (forbidden.has(String(key).toLowerCase())) errors.push(`forbidden geometry answer field: ${childPath}`);
            errors.push(...grade5ForbiddenGeometryFields(child, childPath));
        });
        return errors;
    }

    function grade5ReadingPrompt(questionText) {
        return /(?:đọc|đo|số đo|bao nhiêu)\s*(?:là|của|được)?\s*(?:bán kính|đường kính|chiều cao|đáy|cạnh)/iu.test(String(questionText || ''));
    }

    function grade5VolumePrompt(questionText) {
        return /(?:thể tích|bao nhiêu khối|số khối)/iu.test(String(questionText || ''));
    }

    function validateGrade5MediaParams(params, questionText = '', templateId = '') {
        const errors = [
            ...grade4ForbiddenAnswerFields(params),
            ...grade5ForbiddenGeometryFields(params)
        ];
        const type = params && params.type;
        if (!isPlainObject(params) || !grade5SvgTypes.has(type)) {
            errors.push('Unsupported Grade 5 SVG type.');
            return { valid: false, errors: [...new Set(errors)] };
        }

        const requireBoolean = fields => fields.forEach(field => {
            if (!grade4Boolean(params[field])) errors.push(`${field} must be boolean.`);
        });
        const requireUnit = () => {
            if (typeof params.unit !== 'string' || params.unit.trim() === '' || params.unit.length > 12) errors.push('unit must be a short non-empty string.');
        };

        if (type === 'rectangular_prism_model') {
            if (!['cuboid', 'cube'].includes(params.solid)) errors.push('solid must be cuboid or cube.');
            ['length', 'width', 'height'].forEach(field => {
                if (!grade5HandMeasurement(params[field])) errors.push(`${field} must be a whole-number hand-calculation measure from 1 to 50 cm.`);
            });
            if (params.solid === 'cube' && !(params.length === params.width && params.width === params.height)) errors.push('A cube requires equal length, width and height.');
            if (!isPlainObject(params.labels) || ['length', 'width', 'height'].some(field => typeof params.labels[field] !== 'string' || params.labels[field].trim() === '')) {
                errors.push('labels must contain length, width and height.');
            }
            requireUnit();
            requireBoolean(['show_dimensions', 'show_unit_cubes', 'show_net']);
            if (params.show_net === true) errors.push('show_net requires its own approved schema and is not available yet.');
            if (params.show_unit_cubes === true) {
                const count = Number(params.length) * Number(params.width) * Number(params.height);
                if (count > 48) errors.push('Unit-cube models are limited to 48 cubes.');
                if (grade5VolumePrompt(questionText)) errors.push('Volume questions must not render a countable unit-cube result.');
            }
        }

        if (type === 'circle_measurement') {
            if (typeof params.center_label !== 'string' || params.center_label.trim() === '') errors.push('center_label is required.');
            if (!grade5HandMeasurement(params.radius)) errors.push('radius must be a whole-number hand-calculation measure from 1 to 50 cm.');
            if (Object.prototype.hasOwnProperty.call(params, 'diameter') && (!grade5PositiveNumber(params.diameter) || Math.abs(params.diameter - 2 * params.radius) > 0.000001)) {
                errors.push('diameter must equal two times radius.');
            }
            grade5Labels(params.point_labels, 2, 'point_labels', errors);
            requireUnit();
            requireBoolean(['show_radius', 'show_diameter', 'show_measure_labels']);
            if (params.show_radius !== true && params.show_diameter !== true) errors.push('At least one of show_radius or show_diameter must be true.');
            if (params.show_diameter === true && !Object.prototype.hasOwnProperty.call(params, 'diameter')) errors.push('show_diameter requires diameter.');
            if (params.show_measure_labels === true && grade5ReadingPrompt(questionText)) errors.push('Reading-measure questions must hide measure labels.');
        }

        if (type === 'trapezoid_measurement') {
            ['top_base', 'bottom_base', 'height'].forEach(field => {
                if (!grade5HandMeasurement(params[field])) errors.push(`${field} must be a whole-number hand-calculation measure from 1 to 50 cm.`);
            });
            if (params.top_base === params.bottom_base) errors.push('A trapezoid model must not collapse into a parallelogram.');
            grade5Labels(params.vertex_labels, 4, 'vertex_labels', errors);
            requireUnit();
            requireBoolean(['show_base_labels', 'show_height_label', 'show_parallel_marks', 'show_right_angle_marker']);
            if (params.show_parallel_marks !== true) errors.push('Trapezoids require SVG parallel marks on both bases.');
            if (params.show_right_angle_marker !== true) errors.push('Trapezoids require an SVG right-angle marker for height.');
            if (params.show_height_label === true && grade5ReadingPrompt(questionText)) errors.push('Reading-height questions must hide the height label.');
        }

        if (type === 'triangle_measurement') {
            ['base', 'height'].forEach(field => {
                if (!grade5HandMeasurement(params[field])) errors.push(`${field} must be a whole-number hand-calculation measure from 1 to 50 cm.`);
            });
            if (!['scalene', 'isosceles', 'right'].includes(params.triangle_kind)) errors.push('triangle_kind must be scalene, isosceles or right.');
            grade5Labels(params.vertex_labels, 3, 'vertex_labels', errors);
            requireUnit();
            requireBoolean(['show_base_label', 'show_height_label', 'show_right_angle_marker']);
            if (params.show_right_angle_marker !== true) errors.push('Triangle height requires an SVG right-angle marker.');
            if (params.show_height_label === true && grade5ReadingPrompt(questionText)) errors.push('Reading-height questions must hide the height label.');
        }

        if (type === 'rhombus_measurement') {
            ['side', 'diagonal_a', 'diagonal_b', 'height'].forEach(field => {
                if (!grade5HandMeasurement(params[field])) errors.push(`${field} must be a whole-number hand-calculation measure from 1 to 50 cm.`);
            });
            if (params.diagonal_a === params.diagonal_b) errors.push('Rhombus diagonals must be different so the model is not a rotated square.');
            if (grade5HandMeasurement(params.side) && grade5HandMeasurement(params.diagonal_a) && grade5HandMeasurement(params.diagonal_b)) {
                const computedSide = Math.hypot(params.diagonal_a / 2, params.diagonal_b / 2);
                if (Math.abs(computedSide - params.side) > 0.000001) errors.push('Rhombus side must match the two diagonals.');
                const computedHeight = (params.diagonal_a * params.diagonal_b) / (2 * computedSide);
                if (grade5HandMeasurement(params.height) && Math.abs(computedHeight - params.height) > 0.000001) errors.push('Rhombus height must match the supplied side and diagonals.');
            }
            grade5Labels(params.vertex_labels, 4, 'vertex_labels', errors);
            requireUnit();
            requireBoolean(['show_diagonals', 'show_height', 'show_measure_labels', 'show_perpendicular_marker']);
            if (params.show_perpendicular_marker === true && params.show_diagonals !== true) errors.push('A perpendicular marker requires visible diagonals.');
            if (Object.prototype.hasOwnProperty.call(params, 'show_area')) errors.push('show_area is not permitted in the Grade 5 rhombus renderer.');
            if (params.show_measure_labels === true && grade5ReadingPrompt(questionText)) errors.push('Reading-measure questions must hide measure labels.');
        }

        if (type === 'pie_chart') {
            if (!Array.isArray(params.segments) || params.segments.length < 2 || params.segments.length > 5) {
                errors.push('segments must contain from 2 to 5 data categories.');
            } else {
                const labels = params.segments.map(segment => segment && segment.label);
                const values = params.segments.map(segment => segment && segment.value);
                if (labels.some(label => typeof label !== 'string' || label.trim() === '') || new Set(labels).size !== labels.length) errors.push('pie-chart labels must be unique non-empty strings.');
                if (values.some(value => !Number.isInteger(value) || value <= 0) || values.reduce((sum, value) => sum + Number(value || 0), 0) !== 100) errors.push('pie-chart segment values must be positive whole percentages totaling 100.');
            }
            requireBoolean(['show_values']);
        }

        if (type === 'motion_timeline') {
            if (!grade5PositiveNumber(params.distance, 1000000)) errors.push('distance must be a positive number.');
            if (!grade5PositiveNumber(params.duration, 1000000)) errors.push('duration must be a positive number.');
            if (typeof params.distance_unit !== 'string' || params.distance_unit.trim() === '') errors.push('distance_unit is required.');
            if (typeof params.time_unit !== 'string' || params.time_unit.trim() === '') errors.push('time_unit is required.');
            if (!isPlainObject(params.labels) || ['start', 'end'].some(field => typeof params.labels[field] !== 'string' || params.labels[field].trim() === '')) errors.push('labels must contain start and end.');
            requireBoolean(['show_distance', 'show_duration']);
        }

        return { valid: errors.length === 0, errors: [...new Set(errors)] };
    }

    function validateMediaParams(params, questionText = '', templateId = '', correctAnswer = null) {
        return grade5SvgTypes.has(params && params.type)
            ? validateGrade5MediaParams(params, questionText, templateId)
            : validateGrade4MediaParams(params, questionText, templateId, correctAnswer);
    }

    function grade4MediaError(type) {
        return wrap(`<svg class="question-media-svg grade4-media-error-svg" viewBox="0 0 520 130" role="img" aria-label="Dữ liệu hình chưa hợp lệ" data-media-error="${escapeSvgText(type || 'unknown')}"><rect x="10" y="10" width="500" height="110" rx="12" fill="#fff7ed" stroke="#f97316" stroke-width="2" stroke-dasharray="7 6"/><path d="M260 35 L292 92 H228 Z" fill="#fed7aa" stroke="#ea580c" stroke-width="3"/><text x="260" y="79" text-anchor="middle" font-size="27" font-weight="800" fill="#9a3412">!</text><text x="260" y="108" text-anchor="middle" font-size="16" font-weight="800" fill="#9a3412">Dữ liệu hình chưa hợp lệ</text></svg>`, 'question-media-compact');
    }

    function wrap(html, modifier = '') {
        return `<div class="question-media ${modifier}" aria-hidden="true">${html}</div>`;
    }

    function clock(hour, minute = 0) {
        const safeHour = bounded(hour, 1, 12, 12);
        const safeMinute = bounded(minute, 0, 59, 0);
        const hourAngle = (((safeHour % 12) + safeMinute / 60) * 30 - 90) * Math.PI / 180;
        const minuteAngle = (safeMinute * 6 - 90) * Math.PI / 180;
        const hourX = 70 + Math.cos(hourAngle) * 31;
        const hourY = 70 + Math.sin(hourAngle) * 31;
        const minuteX = 70 + Math.cos(minuteAngle) * 45;
        const minuteY = 70 + Math.sin(minuteAngle) * 45;
        const marks = Array.from({ length: 12 }, (_, index) => {
            const value = index + 1;
            const markAngle = (value * 30 - 90) * Math.PI / 180;
            const x = 70 + Math.cos(markAngle) * 50;
            const y = 74 + Math.sin(markAngle) * 50;
            return `<text x="${x.toFixed(1)}" y="${y.toFixed(1)}" class="clock-number">${value}</text>`;
        }).join('');
        return `<svg class="question-media-svg clock-svg" viewBox="0 0 140 140" role="img" aria-label="Đồng hồ chỉ ${safeHour} giờ ${safeMinute} phút">
            <circle cx="70" cy="70" r="62" class="clock-face"></circle><circle cx="70" cy="70" r="4" class="clock-pin"></circle>${marks}
            <line x1="70" y1="70" x2="${minuteX.toFixed(1)}" y2="${minuteY.toFixed(1)}" class="clock-minute"></line><line x1="70" y1="70" x2="${hourX.toFixed(1)}" y2="${hourY.toFixed(1)}" class="clock-hour"></line><circle cx="70" cy="70" r="5" class="clock-pin-top"></circle>
        </svg>`;
    }

    function clockHourFrom(value) {
        const match = String(value ?? '').match(/(?:^|\D)(1[0-2]|[1-9])\s*(?:giờ|h\b|:\d{2})/iu)
            || String(value ?? '').match(/kim giờ\s+chỉ\s+(?:số\s+)?(1[0-2]|[1-9])/iu)
            || String(value ?? '').trim().match(/^(1[0-2]|[1-9])$/u);
        return match ? Number(match[1]) : null;
    }

    function bill(amount, toneClass) {
        const safeAmount = bounded(amount, 1, 999, 1);
        return `<svg class="money-bill ${toneClass}" viewBox="0 0 190 88" role="img"><rect x="8" y="10" width="174" height="68" rx="9" class="bill-body"></rect><rect x="20" y="22" width="150" height="44" rx="6" class="bill-inner"></rect><circle cx="40" cy="44" r="11" class="bill-seal"></circle><text x="112" y="51" class="bill-value">${formatStudentNumber(safeAmount * 1000)} đồng</text></svg>`;
    }

    function clockQuestion(question, numbers, params) {
        const isExactHour = Boolean(params && (params.exact_hour === true || !Object.prototype.hasOwnProperty.call(params, 'minute')));
        const hasExplicitMinute = params && isIntegerInRange(params.minute, 0, 59);
        if (!params || !isIntegerInRange(params.hour, 1, 12) || (!hasExplicitMinute && !isExactHour)) return '';
        const questionText = String(question.question || '');
        const elapsed = questionText.toLowerCase().includes('sau') || String(question.template_id || '').includes('elapsed');
        if (elapsed) {
            const hour = Number(params.hour);
            const minute = hasExplicitMinute ? Number(params.minute) : 0;
            const minuteMatch = questionText.match(/sau\s+(\d+)\s*phút/iu);
            const hourMatch = questionText.match(/sau\s+(\d+)\s*giờ/iu);
            const durationMinutes = Number(params && params.duration_minutes);
            const durationLabel = Number.isFinite(durationMinutes) && durationMinutes > 0
                ? `+${durationMinutes} phút`
                : minuteMatch
                    ? `+${minuteMatch[1]} phút`
                    : hourMatch
                        ? `+${hourMatch[1]} giờ`
                        : '';
            return wrap(`<div class="question-media-row">${clock(hour, minute)}${durationLabel ? `<div class="question-media-plus">${durationLabel}</div>` : ''}</div>`, 'question-media-compact');
        }
        const hour = Number(params.hour);
        const minute = hasExplicitMinute ? Number(params.minute) : 0;
        return wrap(clock(hour, minute), 'question-media-compact');
    }

    function weekCalendar(params = {}) {
        const days = ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'];
        const active = bounded(params.active_day, 0, 6, 0);
        const cells = days.map((day, index) => {
            const x = 12 + index * 48;
            const fill = index === active ? '#bfdbfe' : '#f8fafc';
            const stroke = index === active ? '#2563eb' : '#cbd5e1';
            return `<rect x="${x}" y="24" width="42" height="54" rx="6" fill="${fill}" stroke="${stroke}" stroke-width="2"/><text x="${x + 21}" y="56" text-anchor="middle" font-size="15" font-weight="800" fill="#17324d">${day}</text>`;
        }).join('');
        return wrap(`<svg class="question-media-svg week-calendar-svg" viewBox="0 0 360 102" role="img" aria-label="Lich cac ngay trong tuan"><text x="12" y="16" font-size="13" font-weight="800" fill="#0f766e">MOT TUAN</text>${cells}</svg>`, 'question-media-compact');
    }

    function monthCalendar(params = {}) {
        const days = ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'];
        const totalDays = bounded(params.total_days, 28, 31, 30);
        const startDay = bounded(params.start_day, 0, 6, 0);
        const highlighted = new Set(Array.isArray(params.highlighted_days) ? params.highlighted_days.map(Number) : []);
        const cellW = 42;
        const cellH = 30;
        const header = days.map((day, index) => `<text x="${24 + index * cellW}" y="35" text-anchor="middle" font-size="12" font-weight="800" fill="#1e3a8a">${day}</text>`).join('');
        const cells = Array.from({ length: totalDays }, (_, index) => {
            const day = index + 1;
            const slot = startDay + index;
            const column = slot % 7;
            const row = Math.floor(slot / 7);
            const x = 3 + column * cellW;
            const y = 43 + row * cellH;
            const selected = highlighted.has(day);
            return `<rect x="${x}" y="${y}" width="${cellW - 3}" height="${cellH - 3}" rx="4" fill="${selected ? '#fde68a' : '#f8fafc'}" stroke="${selected ? '#f59e0b' : '#cbd5e1'}" stroke-width="1.5"/><text x="${x + 19.5}" y="${y + 19}" text-anchor="middle" font-size="13" font-weight="700" fill="#17324d">${day}</text>`;
        }).join('');
        return wrap(`<svg class="question-media-svg month-calendar-svg" viewBox="0 0 300 218" role="img" aria-label="Lich thang co o ngay"><text x="10" y="17" font-size="15" font-weight="800" fill="#0f766e">${String(params.month_label || 'THANG')}</text>${header}${cells}</svg>`, 'question-media-compact');
    }

    function moneyQuestion(numbers, params = {}) {
        const first = Number.isFinite(Number(params.first_thousand)) ? Number(params.first_thousand) : numbers[0];
        const second = Number.isFinite(Number(params.second_thousand)) ? Number(params.second_thousand) : numbers[1];
        return wrap(`<div class="question-media-row money-row">${bill(bounded(first, 1, 999, 5), 'bill-blue')}<div class="question-media-plus">+</div>${bill(bounded(second, 1, 999, 1), 'bill-green')}</div>`);
    }

    function inlineSvg(params = {}) {
        let svg = typeof params.svg === 'string' ? params.svg.trim() : '';
        if (!svg || !/^<svg[\s>]/i.test(svg)) return '';
        // SVG chỉ có viewBox thiếu kích thước nội tại ổn định trong flex trên Safari.
        // Bổ sung từ chính viewBox, giữ nguyên nét/hình và kích thước đã có của nguồn.
        svg = svg.replace(/^<svg\b[^>]*>/i, (tag) => {
            if (/\b(?:width|height)\s*=/i.test(tag)) return tag;
            const viewBox = tag.match(/\bviewBox\s*=\s*["']([^"']+)["']/i);
            const dimensions = viewBox?.[1].trim().split(/[\s,]+/).map(Number);
            if (!dimensions || dimensions.length !== 4 || !dimensions.every(Number.isFinite)
                || dimensions[2] <= 0 || dimensions[3] <= 0) return tag;
            return tag.replace(/>$/, ` width="${dimensions[2]}" height="${dimensions[3]}">`);
        });
        return wrap(svg, 'question-media-inline-svg');
    }

    function numberLine(numbers) {
        const total = bounded(numbers[0], 1, 999, 80);
        const cut = bounded(numbers[1], 0, total, Math.min(20, total));
        const startX = 34;
        const endX = 306;
        const cutX = startX + ((endX - startX) * cut / Math.max(1, total));
        return wrap(`<svg class="question-media-svg number-line-svg" viewBox="0 0 340 108" role="img"><line x1="${startX}" y1="54" x2="${endX}" y2="54" class="line-base"></line><line x1="${startX}" y1="54" x2="${cutX.toFixed(1)}" y2="54" class="line-cut"></line><line x1="${cutX.toFixed(1)}" y1="54" x2="${endX}" y2="54" class="line-left"></line><circle cx="${startX}" cy="54" r="5" class="line-dot"></circle><circle cx="${cutX.toFixed(1)}" cy="54" r="6" class="line-cut-dot"></circle><circle cx="${endX}" cy="54" r="5" class="line-dot"></circle><text x="${startX}" y="82" class="media-label">0</text><text x="${cutX.toFixed(1)}" y="30" class="media-label">${cut} cm</text><text x="${endX}" y="82" class="media-label">${total} cm</text></svg>`);
    }

    function numberRay(params = {}) {
        const min = bounded(params.min, 0, 999, 0);
        const max = Math.max(min + 10, bounded(params.max, min + 10, 999, 100));
        const target = bounded(params.target, min, max, min);
        const anchor = Number.isFinite(Number(params.anchor)) ? bounded(params.anchor, min, max, min) : null;
        const width = 520;
        const startX = 38;
        const endX = width - 38;
        const y = 60;
        const toX = value => startX + ((value - min) / Math.max(1, max - min)) * (endX - startX);
        const step = max - min <= 20 ? 1 : 10;
        const ticks = [];
        for (let value = min; value <= max; value += step) {
            const x = toX(value);
            const emphasized = value === target || value === anchor || value % 10 === 0;
            ticks.push(`<line x1="${x}" y1="${y - (emphasized ? 12 : 7)}" x2="${x}" y2="${y + (emphasized ? 12 : 7)}" stroke="#2563eb" stroke-width="${emphasized ? 2.5 : 1.5}"/>`);
            if (emphasized) ticks.push(`<text x="${x}" y="${y + 34}" text-anchor="middle" font-size="${value === target ? 17 : 13}" font-weight="${value === target ? 800 : 700}" fill="#17324d">${formatStudentNumber(value)}</text>`);
        }
        const targetX = toX(target);
        const anchorX = anchor === null ? null : toX(anchor);
        const anchorMark = anchorX === null ? '' : `<circle cx="${anchorX}" cy="${y}" r="7" fill="#fbbf24" stroke="#b45309" stroke-width="2"/>`;
        return wrap(`<svg class="question-media-svg number-ray-svg" viewBox="0 0 ${width} 112" role="img" aria-label="Tia số từ ${formatStudentNumber(min)} đến ${formatStudentNumber(max)}"><defs><marker id="number-ray-arrow" markerWidth="9" markerHeight="9" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#2563eb"/></marker></defs><line x1="${startX}" y1="${y}" x2="${endX}" y2="${y}" stroke="#2563eb" stroke-width="3" marker-end="url(#number-ray-arrow)"/>${ticks.join('')}${anchorMark}<circle cx="${targetX}" cy="${y}" r="9" fill="#22c55e" stroke="#15803d" stroke-width="2.5"/><text x="${targetX}" y="${y - 18}" text-anchor="middle" font-size="17" font-weight="800" fill="#166534">${formatStudentNumber(target)}</text></svg>`, 'question-media-compact');
    }

    function tenFrameAddition(params = {}) {
        const left = bounded(params.left, 0, 20, 0);
        const right = bounded(params.right, 0, 20 - left, 0);
        const total = left + right;
        const cell = 34;
        const gap = 5;
        const columns = 10;
        const cells = Array.from({ length: 20 }, (_, index) => {
            const row = Math.floor(index / columns);
            const column = index % columns;
            const x = 25 + column * (cell + gap);
            const y = 42 + row * (cell + gap);
            const color = index < left ? '#60a5fa' : (index < total ? '#86efac' : '#ffffff');
            const stroke = index < left ? '#1d4ed8' : (index < total ? '#15803d' : '#cbd5e1');
            return `<rect x="${x}" y="${y}" width="${cell}" height="${cell}" rx="5" fill="${color}" stroke="${stroke}" stroke-width="2"/>`;
        }).join('');
        return wrap(`<svg class="question-media-svg ten-frame-svg" viewBox="0 0 430 128" role="img" aria-label="Khung 10 minh họa phép cộng"><text x="25" y="22" font-size="16" font-weight="800" fill="#1d4ed8">${left}</text><text x="62" y="22" font-size="16" font-weight="800" fill="#166534">+ ${right}</text><text x="138" y="22" font-size="16" font-weight="800" fill="#475569">= ?</text>${cells}</svg>`, 'question-media-compact');
    }

    function partWhole(params = {}) {
        const mode = params.mode === 'subtract' ? 'subtract' : 'add';
        const first = bounded(params.first, 0, 20, 0);
        const second = bounded(params.second, 0, 20 - first, 0);
        const total = mode === 'subtract' ? first : first + second;
        const remaining = mode === 'subtract' ? first - second : total;
        const cell = 31;
        const gap = 6;
        const cells = Array.from({ length: total }, (_, index) => {
            const x = 30 + (index % 10) * (cell + gap);
            const y = 42 + Math.floor(index / 10) * (cell + gap);
            const removed = mode === 'subtract' && index >= remaining;
            const fill = removed ? '#fdba74' : (index < first ? '#60a5fa' : '#86efac');
            const stroke = removed ? '#c2410c' : (index < first ? '#1d4ed8' : '#15803d');
            const cross = removed ? `<path d="M${x + 7} ${y + 7} L${x + cell - 7} ${y + cell - 7} M${x + cell - 7} ${y + 7} L${x + 7} ${y + cell - 7}" stroke="#9a3412" stroke-width="2.5"/>` : '';
            return `<rect x="${x}" y="${y}" width="${cell}" height="${cell}" rx="5" fill="${fill}" stroke="${stroke}" stroke-width="2"/>${cross}`;
        }).join('');
        const title = mode === 'subtract' ? `${first} bớt ${second}` : `${first} và ${second}`;
        return wrap(`<svg class="question-media-svg part-whole-svg" viewBox="0 0 420 132" role="img" aria-label="Sơ đồ phần và toàn thể"><text x="30" y="22" font-size="16" font-weight="800" fill="#17324d">${title}</text>${cells}</svg>`, 'question-media-compact');
    }

    function tenFrameSubtraction(params = {}) {
        const total = bounded(params.total, 1, 20, 12);
        const removed = bounded(params.removed, 1, total - 1, 4);
        const remaining = total - removed;
        const cell = 34;
        const gap = 5;
        const cells = Array.from({ length: total }, (_, index) => {
            const x = 25 + (index % 10) * (cell + gap);
            const y = 42 + Math.floor(index / 10) * (cell + gap);
            const crossed = index >= remaining;
            const fill = crossed ? '#fdba74' : '#60a5fa';
            const stroke = crossed ? '#c2410c' : '#1d4ed8';
            const mark = crossed ? `<path d="M${x + 7} ${y + 7} L${x + cell - 7} ${y + cell - 7} M${x + cell - 7} ${y + 7} L${x + 7} ${y + cell - 7}" stroke="#9a3412" stroke-width="2.5"/>` : '';
            return `<rect x="${x}" y="${y}" width="${cell}" height="${cell}" rx="5" fill="${fill}" stroke="${stroke}" stroke-width="2"/>${mark}`;
        }).join('');
        return wrap(`<svg class="question-media-svg ten-frame-subtraction-svg" viewBox="0 0 430 128" role="img" aria-label="Khung 10 minh họa phép trừ"><text x="25" y="22" font-size="16" font-weight="800" fill="#1d4ed8">${total}</text><text x="62" y="22" font-size="16" font-weight="800" fill="#c2410c">- ${removed}</text><text x="135" y="22" font-size="16" font-weight="800" fill="#475569">= ?</text>${cells}</svg>`, 'question-media-compact');
    }

    function compareGroups(params = {}) {
        const left = bounded(params.left, 1, 20, 7);
        const right = bounded(params.right, 1, 20, 4);
        const circles = (count, y, fill, stroke) => Array.from({ length: count }, (_, index) => `<circle cx="${35 + (index % 10) * 35}" cy="${y + Math.floor(index / 10) * 26}" r="11" fill="${fill}" stroke="${stroke}" stroke-width="2"/>`).join('');
        const height = Math.max(128, 40 + Math.ceil(Math.max(left, right) / 10) * 52 + 52);
        return wrap(`<svg class="question-media-svg compare-groups-svg" viewBox="0 0 400 ${height}" role="img" aria-label="Hai nhóm để so sánh"><text x="20" y="28" font-size="15" font-weight="800" fill="#1d4ed8">Nhóm xanh</text><text x="20" y="${height / 2 + 12}" font-size="15" font-weight="800" fill="#c2410c">Nhóm cam</text>${circles(left, 54, '#60a5fa', '#1d4ed8')}${circles(right, height / 2 + 38, '#fdba74', '#c2410c')}</svg>`, 'question-media-compact');
    }

    function balanceCompare(params = {}) {
        const left = bounded(params.left, 1, 10, 6);
        const right = bounded(params.right, 1, 10, 4);
        const leftY = left > right ? 79 : (left < right ? 49 : 64);
        const rightY = left > right ? 49 : (left < right ? 79 : 64);
        return wrap(`<svg class="question-media-svg balance-svg" viewBox="0 0 390 160" role="img" aria-label="Cân thăng bằng để so sánh nặng nhẹ"><path d="M195 26 L168 126 H222 Z" fill="#cbd5e1" stroke="#64748b" stroke-width="3"/><line x1="65" y1="${leftY}" x2="325" y2="${rightY}" stroke="#475569" stroke-width="5" stroke-linecap="round"/><line x1="100" y1="${leftY}" x2="100" y2="${leftY + 38}" stroke="#64748b" stroke-width="3"/><line x1="290" y1="${rightY}" x2="290" y2="${rightY + 38}" stroke="#64748b" stroke-width="3"/><path d="M65 ${leftY + 38} Q100 ${leftY + 56} 135 ${leftY + 38}" fill="none" stroke="#64748b" stroke-width="3"/><path d="M255 ${rightY + 38} Q290 ${rightY + 56} 325 ${rightY + 38}" fill="none" stroke="#64748b" stroke-width="3"/><rect x="75" y="${leftY + 20}" width="50" height="28" rx="6" fill="#60a5fa" stroke="#1d4ed8" stroke-width="2"/><rect x="265" y="${rightY + 20}" width="50" height="28" rx="6" fill="#fdba74" stroke="#c2410c" stroke-width="2"/><text x="100" y="${leftY + 40}" text-anchor="middle" font-size="15" font-weight="800" fill="#17324d">A</text><text x="290" y="${rightY + 40}" text-anchor="middle" font-size="15" font-weight="800" fill="#17324d">B</text></svg>`, 'question-media-compact');
    }

    function measureContainer(params = {}) {
        const kind = params.kind === 'litre' ? 'litre' : 'kg';
        const value = bounded(params.value, 1, 99, 2);
        if (kind === 'litre') return wrap(`<svg class="question-media-svg litre-container-svg" viewBox="0 0 250 160" role="img" aria-label="Bình chứa chất lỏng"><path d="M82 28 H168 L181 52 V136 Q125 150 69 136 V52 Z" fill="#f8fafc" stroke="#2563eb" stroke-width="3"/><path d="M75 101 Q125 112 175 101 V136 Q125 150 75 136 Z" fill="#60a5fa" opacity=".85"/><rect x="96" y="12" width="58" height="20" rx="5" fill="#bfdbfe" stroke="#2563eb" stroke-width="2"/><text x="125" y="81" text-anchor="middle" font-size="22" font-weight="800" fill="#17324d">${value} l</text></svg>`, 'question-media-compact');
        return wrap(`<svg class="question-media-svg kg-scale-svg" viewBox="0 0 250 160" role="img" aria-label="Cân khối lượng"><rect x="52" y="82" width="146" height="52" rx="10" fill="#dbeafe" stroke="#2563eb" stroke-width="3"/><path d="M81 82 Q125 41 169 82" fill="none" stroke="#2563eb" stroke-width="3"/><circle cx="125" cy="90" r="28" fill="#fff" stroke="#2563eb" stroke-width="3"/><line x1="125" y1="90" x2="145" y2="72" stroke="#ef4444" stroke-width="3"/><rect x="92" y="25" width="66" height="34" rx="6" fill="#facc15" stroke="#a16207" stroke-width="2"/><text x="125" y="49" text-anchor="middle" font-size="20" font-weight="800" fill="#17324d">${value} kg</text></svg>`, 'question-media-compact');
    }

    function regroupAddition(params = {}) {
        const left = bounded(params.left, 10, 99, 27);
        const right = bounded(params.right, 1, 9, 6);
        const result = left + right;
        const leftTens = Math.floor(left / 10), leftOnes = left % 10;
        const totalTens = Math.floor(result / 10), totalOnes = result % 10;
        const rods = (count, x, fill) => Array.from({ length: count }, (_, i) => `<rect x="${x + (i % 4) * 18}" y="64" width="14" height="54" rx="3" fill="${fill}" stroke="#1d4ed8" stroke-width="1.4"/>`).join('');
        const units = (count, x, y, fill) => Array.from({ length: count }, (_, i) => `<rect x="${x + (i % 5) * 18}" y="${y + Math.floor(i / 5) * 18}" width="13" height="13" rx="3" fill="${fill}" stroke="#a16207" stroke-width="1.2"/>`).join('');
        return wrap(`<svg class="question-media-svg regroup-addition-svg" viewBox="0 0 560 220" role="img" aria-label="Hai bước gộp 10 đơn vị thành 1 chục"><text x="22" y="27" font-size="19" font-weight="800" fill="#17324d">${left} + ${right} = ?</text><text x="24" y="49" font-size="13" font-weight="800" fill="#2563eb">Bước 1: Trước khi gộp</text><text x="358" y="49" font-size="13" font-weight="800" fill="#15803d">Bước 2: Sau khi gộp</text><text x="24" y="67" font-size="12" font-weight="700" fill="#475569">${left}</text>${rods(leftTens,24,'#93c5fd')}${units(leftOnes,92,80,'#fde047')}<text x="164" y="96" font-size="26" font-weight="800" fill="#166534">+</text><text x="194" y="67" font-size="12" font-weight="700" fill="#475569">${right}</text>${units(right,194,80,'#facc15')}<path d="M292 109 H340" stroke="#15803d" stroke-width="3" marker-end="url(#regroup-one-digit-arrow)"/><text x="316" y="89" text-anchor="middle" font-size="11" font-weight="800" fill="#166534">gộp 10 đơn vị</text>${rods(totalTens,358,'#86efac')}${units(totalOnes,426,80,'#fde047')}<text x="24" y="194" font-size="14" font-weight="800" fill="#475569">${leftOnes} đơn vị + ${right} đơn vị = ${leftOnes + right} đơn vị. Gộp 10 đơn vị thành 1 chục.</text><defs><marker id="regroup-one-digit-arrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#15803d"/></marker></defs></svg>`, 'question-media-compact');
    }

    function regroupTwoDigitAddition(params = {}) {
        const left = bounded(params.left, 10, 99, 37);
        const right = bounded(params.right, 1, 99, 25);
        const leftTens = Math.floor(left / 10), rightTens = Math.floor(right / 10);
        const leftOnes = left % 10, rightOnes = right % 10, onesTotal = leftOnes + rightOnes;
        const total = left + right, totalTens = Math.floor(total / 10), rest = total % 10;
        const rods = (count, x, fill) => Array.from({ length: count }, (_, i) => `<rect x="${x + (i % 4) * 17}" y="${65 + Math.floor(i / 4) * 55}" width="13" height="46" rx="3" fill="${fill}" stroke="#1d4ed8" stroke-width="1.4"/>`).join('');
        const ones = (count, x, y, fill) => Array.from({ length: count }, (_, i) => `<rect x="${x + (i % 5) * 16}" y="${y + Math.floor(i / 5) * 16}" width="12" height="12" rx="3" fill="${fill}" stroke="#a16207" stroke-width="1.1"/>`).join('');
        return wrap(`<svg class="question-media-svg regroup-two-digit-addition-svg" viewBox="0 0 640 225" role="img" aria-label="Hai bước gộp 10 đơn vị thành một chục khi cộng"><text x="22" y="27" font-size="19" font-weight="800" fill="#17324d">${left} + ${right} = ?</text><text x="24" y="49" font-size="13" font-weight="800" fill="#2563eb">Bước 1: Trước khi gộp</text><text x="410" y="49" font-size="13" font-weight="800" fill="#15803d">Bước 2: Sau khi gộp</text><text x="24" y="66" font-size="12" font-weight="700" fill="#2563eb">Số thứ nhất: ${left}</text>${rods(leftTens,24,'#93c5fd')}${ones(leftOnes,94,82,'#fde047')}<text x="187" y="101" font-size="26" font-weight="800" fill="#166534">+</text><text x="218" y="66" font-size="12" font-weight="700" fill="#c2410c">Số thứ hai: ${right}</text>${rods(rightTens,218,'#fdba74')}${ones(rightOnes,288,82,'#facc15')}<path d="M370 109 H397" stroke="#15803d" stroke-width="3" marker-end="url(#g2-add-arrow)"/><text x="383" y="89" text-anchor="middle" font-size="10" font-weight="800" fill="#166534">gộp 10</text>${rods(totalTens,410,'#86efac')}${ones(rest,480,82,'#fde047')}<text x="410" y="148" font-size="12" font-weight="800" fill="#166534">${totalTens} chục và ${rest} đơn vị</text><text x="24" y="201" font-size="14" font-weight="800" fill="#475569">${leftOnes} đơn vị + ${rightOnes} đơn vị = ${onesTotal} đơn vị. Gộp 10 đơn vị thành 1 chục.</text><defs><marker id="g2-add-arrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#15803d"/></marker></defs></svg>`, 'question-media-compact');
    }

    function borrowSubtraction(params = {}) {
        const left = bounded(params.left, 10, 99, 42);
        const right = bounded(params.right, 1, 99, 7);
        const tens = Math.floor(left / 10), onesCount = left % 10;
        const drawRods = (count, x, fill) => Array.from({ length: count }, (_, i) => `<rect x="${x + (i % 4) * 18}" y="65" width="14" height="54" rx="3" fill="${fill}" stroke="#1d4ed8" stroke-width="1.4"/>`).join('');
        const drawOnes = (count, x, y, fill, stroke = '#a16207') => Array.from({ length: count }, (_, i) => `<rect x="${x + (i % 5) * 16}" y="${y + Math.floor(i / 5) * 16}" width="12" height="12" rx="3" fill="${fill}" stroke="${stroke}" stroke-width="1.1"/>`).join('');
        const available = onesCount + 10;
        return wrap(`<svg class="question-media-svg borrow-subtraction-svg" viewBox="0 0 620 225" role="img" aria-label="Hai bước tách một chục thành 10 đơn vị khi trừ"><text x="22" y="27" font-size="19" font-weight="800" fill="#17324d">${left} - ${right} = ?</text><text x="24" y="49" font-size="13" font-weight="800" fill="#2563eb">Bước 1: Trước khi tách</text><text x="372" y="49" font-size="13" font-weight="800" fill="#dc2626">Bước 2: Sau khi tách</text>${drawRods(tens,24,'#93c5fd')}${drawOnes(onesCount,96,82,'#fde047')}<path d="M292 108 H350" stroke="#dc2626" stroke-width="3" marker-end="url(#g2-borrow-arrow)"/><text x="321" y="88" text-anchor="middle" font-size="11" font-weight="800" fill="#b91c1c">tách 1 chục</text>${drawRods(tens - 1,372,'#86efac')}${drawOnes(available,442,82,'#fde047')}<text x="372" y="151" font-size="12" font-weight="800" fill="#b45309">Còn ${tens - 1} chục và ${available} đơn vị</text><text x="24" y="201" font-size="14" font-weight="800" fill="#475569">Tách 1 chục thành 10 đơn vị: ${onesCount} đơn vị thành ${available} đơn vị để bớt ${right}.</text><defs><marker id="g2-borrow-arrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#dc2626"/></marker></defs></svg>`, 'question-media-compact');
    }

    function baseTenColumn(value, x, y, colors = {}) {
        const safe = bounded(value, 0, 1000, 0);
        const hundreds = Math.floor(safe / 100);
        const tens = Math.floor((safe % 100) / 10);
        const ones = safe % 10;
        const hundredFill = colors.hundred || '#93c5fd';
        const tenFill = colors.ten || '#5eead4';
        const oneFill = colors.one || '#fde047';
        const blocks = Array.from({ length: hundreds }, (_, index) => {
            const column = index % 3;
            const row = Math.floor(index / 3);
            return `<rect x="${x + column * 23}" y="${y + row * 23}" width="18" height="18" rx="3" fill="${hundredFill}" stroke="#2563eb" stroke-width="1.3"/>`;
        }).join('');
        const rods = Array.from({ length: tens }, (_, index) => {
            const column = index % 5;
            const row = Math.floor(index / 5);
            return `<rect x="${x + 82 + column * 15}" y="${y + row * 40}" width="10" height="34" rx="2" fill="${tenFill}" stroke="#0f766e" stroke-width="1.2"/>`;
        }).join('');
        const units = Array.from({ length: ones }, (_, index) => {
            const column = index % 5;
            const row = Math.floor(index / 5);
            return `<rect x="${x + 167 + column * 14}" y="${y + row * 14}" width="10" height="10" rx="2" fill="${oneFill}" stroke="#a16207" stroke-width="1"/>`;
        }).join('');
        return `${blocks}${rods}${units}`;
    }

    function regroupThreeDigitAddition(params = {}) {
        const left = bounded(params.left, 0, 999, 247);
        const right = bounded(params.right, 0, 999, 138);
        const total = left + right;
        const onesCarry = (left % 10) + (right % 10) >= 10;
        const tensCarry = Math.floor((left % 100) / 10) + Math.floor((right % 100) / 10) + (onesCarry ? 1 : 0) >= 10;
        const note = `${onesCarry ? 'Gộp 10 đơn vị thành 1 chục. ' : ''}${tensCarry ? 'Gộp 10 chục thành 1 trăm.' : ''}` || 'Cộng theo từng hàng.';
        return wrap(`<svg class="question-media-svg regroup-three-digit-addition-svg" viewBox="0 0 700 245" role="img" aria-label="Minh họa phép cộng có nhớ theo hàng"><text x="20" y="28" font-size="20" font-weight="800" fill="#17324d">${left} + ${right} = ?</text><text x="22" y="52" font-size="13" font-weight="800" fill="#2563eb">Trước khi gộp</text><text x="470" y="52" font-size="13" font-weight="800" fill="#15803d">Sau khi gộp</text><text x="22" y="72" font-size="13" font-weight="700" fill="#1e3a8a">${left}</text>${baseTenColumn(left, 22, 84, { hundred: '#bfdbfe', ten: '#99f6e4', one: '#fde047' })}<text x="255" y="132" font-size="30" font-weight="800" fill="#166534">+</text><text x="285" y="72" font-size="13" font-weight="700" fill="#c2410c">${right}</text>${baseTenColumn(right, 285, 84, { hundred: '#fed7aa', ten: '#fdba74', one: '#facc15' })}<path d="M510 128 H552" stroke="#15803d" stroke-width="3" marker-end="url(#g2-three-add-arrow)"/><text x="532" y="112" text-anchor="middle" font-size="11" font-weight="800" fill="#15803d">gộp</text><text x="566" y="72" font-size="13" font-weight="700" fill="#166534">${total}</text>${baseTenColumn(total, 466, 84, { hundred: '#86efac', ten: '#5eead4', one: '#fde047' })}<text x="22" y="223" font-size="14" font-weight="800" fill="#475569">${note}</text><defs><marker id="g2-three-add-arrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#15803d"/></marker></defs></svg>`, 'question-media-compact');
    }

    function threeDigitOperation(params = {}) {
        const left = bounded(params.left, 0, 999, 245);
        const operator = params.operator === '-' ? '-' : '+';
        const right = bounded(params.right, 0, operator === '-' ? left : 999, operator === '-' ? 123 : 134);
        const total = operator === '-' ? left - right : left + right;
        return wrap(`<svg class="question-media-svg three-digit-operation-svg" viewBox="0 0 735 225" role="img" aria-label="Minh họa phép tính theo hàng"><text x="20" y="28" font-size="20" font-weight="800" fill="#17324d">${left} ${operator} ${right} = ?</text><text x="22" y="54" font-size="13" font-weight="800" fill="#2563eb">Số thứ nhất: ${left}</text>${baseTenColumn(left, 22, 70, { hundred: '#bfdbfe', ten: '#99f6e4', one: '#fde047' })}<text x="251" y="120" font-size="32" font-weight="800" fill="#166534">${operator}</text><text x="284" y="54" font-size="13" font-weight="800" fill="#c2410c">Số thứ hai: ${right}</text>${baseTenColumn(right, 284, 70, { hundred: '#fed7aa', ten: '#fdba74', one: '#facc15' })}<path d="M502 118 H542" stroke="#64748b" stroke-width="3" marker-end="url(#g2-three-op-arrow)"/><text x="557" y="54" font-size="13" font-weight="800" fill="#15803d">Kết quả: ${total}</text>${baseTenColumn(total, 492, 70, { hundred: '#86efac', ten: '#5eead4', one: '#fde047' })}<defs><marker id="g2-three-op-arrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#64748b"/></marker></defs></svg>`, 'question-media-compact');
    }

    function columnMultiplication(params = {}) {
        const left = bounded(params.left, 10, 100000, 24);
        const right = bounded(params.right, 2, 9, 3);
        const leftText = formatStudentNumber(left);
        const rightText = formatStudentNumber(right);
        return wrap(`<svg class="question-media-svg column-multiplication-svg" viewBox="0 0 360 205" role="img" aria-label="Đặt tính phép nhân"><text x="52" y="40" font-size="18" font-weight="800" fill="#1e3a8a">Đặt tính</text><text x="255" y="74" text-anchor="end" font-size="30" font-weight="800" fill="#17324d">${leftText}</text><text x="202" y="111" font-size="30" font-weight="800" fill="#c2410c">×</text><text x="255" y="111" text-anchor="end" font-size="30" font-weight="800" fill="#c2410c">${rightText}</text><line x1="120" y1="125" x2="264" y2="125" stroke="#2563eb" stroke-width="3"/><text x="255" y="164" text-anchor="end" font-size="30" font-weight="800" fill="#64748b">?</text><text x="52" y="187" font-size="14" font-weight="700" fill="#475569">Nhân lần lượt theo từng hàng.</text></svg>`, 'question-media-compact');
    }

    function longDivision(params = {}) {
        const dividend = bounded(params.dividend, 10, 100000, 84);
        const divisor = bounded(params.divisor, 2, 9, 3);
        return wrap(`<svg class="question-media-svg long-division-svg" viewBox="0 0 390 190" role="img" aria-label="Đặt tính phép chia"><text x="42" y="42" font-size="18" font-weight="800" fill="#1e3a8a">Đặt tính</text><text x="114" y="110" text-anchor="middle" font-size="31" font-weight="800" fill="#c2410c">${formatStudentNumber(dividend)}</text><path d="M175 68 H307 V136" fill="none" stroke="#2563eb" stroke-width="4"/><text x="155" y="110" text-anchor="middle" font-size="31" font-weight="800" fill="#17324d">${divisor}</text><text x="242" y="111" text-anchor="middle" font-size="30" font-weight="800" fill="#64748b">?</text><text x="42" y="167" font-size="14" font-weight="700" fill="#475569">Chia lần lượt từ hàng cao đến hàng thấp.</text></svg>`, 'question-media-compact');
    }

    function columnOperation(params = {}) {
        const left = bounded(params.left, 0, 100000, 1245);
        const operator = params.operator === '-' ? '-' : '+';
        const right = bounded(params.right, 0, operator === '-' ? left : 100000, 230);
        const leftText = formatStudentNumber(left);
        const rightText = formatStudentNumber(right);
        return wrap(`<svg class="question-media-svg column-operation-svg" viewBox="0 0 390 205" role="img" aria-label="Đặt tính ${operator === '+' ? 'cộng' : 'trừ'}"><text x="42" y="38" font-size="18" font-weight="800" fill="#1e3a8a">Đặt tính</text><text x="292" y="73" text-anchor="end" font-size="29" font-weight="800" fill="#17324d">${leftText}</text><text x="164" y="112" font-size="29" font-weight="800" fill="#c2410c">${operator}</text><text x="292" y="112" text-anchor="end" font-size="29" font-weight="800" fill="#c2410c">${rightText}</text><line x1="108" y1="127" x2="302" y2="127" stroke="#2563eb" stroke-width="3"/><text x="292" y="166" text-anchor="end" font-size="30" font-weight="800" fill="#64748b">?</text><text x="42" y="190" font-size="14" font-weight="700" fill="#475569">Tính lần lượt từ hàng đơn vị.</text></svg>`, 'question-media-compact');
    }

    function perimeterShape(params = {}) {
        const kind = params.kind === 'square' ? 'square' : (params.kind === 'triangle' ? 'triangle' : 'rectangle');
        const width = bounded(params.width, 1, 20, 6);
        const height = bounded(params.height, 1, 20, 4);
        const unit = String(params.unit || 'cm');
        if (kind === 'triangle') {
            const third = bounded(params.third, 1, 20, 5);
            return wrap(`<svg class="question-media-svg perimeter-shape-svg" viewBox="0 0 360 205" role="img" aria-label="Tam giác có độ dài các cạnh"><polygon points="90,157 270,157 180,42" fill="#eff6ff" stroke="#2563eb" stroke-width="4"/><text x="180" y="180" text-anchor="middle" font-size="17" font-weight="800" fill="#17324d">${formatStudentNumber(width)} ${unit}</text><text x="117" y="96" font-size="17" font-weight="800" fill="#17324d">${formatStudentNumber(height)} ${unit}</text><text x="229" y="96" font-size="17" font-weight="800" fill="#17324d">${formatStudentNumber(third)} ${unit}</text></svg>`, 'question-media-compact');
        }
        const displayHeight = kind === 'square' ? width : height;
        return wrap(`<svg class="question-media-svg perimeter-shape-svg" viewBox="0 0 360 205" role="img" aria-label="Hình ${kind === 'square' ? 'vuông' : 'chữ nhật'} có độ dài cạnh"><rect x="95" y="42" width="170" height="112" fill="#eff6ff" stroke="#2563eb" stroke-width="4" rx="2"/><text x="180" y="181" text-anchor="middle" font-size="17" font-weight="800" fill="#17324d">${formatStudentNumber(width)} ${unit}</text><text x="274" y="104" font-size="17" font-weight="800" fill="#17324d">${formatStudentNumber(displayHeight)} ${unit}</text></svg>`, 'question-media-compact');
    }

    function areaGrid(params = {}) {
        const rows = bounded(params.rows, 1, 10, 3);
        const columns = bounded(params.columns, 1, 10, 4);
        const cell = Math.min(38, Math.floor(260 / Math.max(rows, columns)));
        const width = columns * cell;
        const height = rows * cell;
        const x0 = (320 - width) / 2;
        const y0 = (170 - height) / 2 + 8;
        const cells = Array.from({ length: rows * columns }, (_, index) => {
            const row = Math.floor(index / columns);
            const column = index % columns;
            return `<rect x="${x0 + column * cell}" y="${y0 + row * cell}" width="${cell}" height="${cell}" fill="${(row + column) % 2 ? '#eff6ff' : '#dbeafe'}" stroke="#2563eb" stroke-width="1.5"/>`;
        }).join('');
        return wrap(`<svg class="question-media-svg area-grid-svg" viewBox="0 0 320 190" role="img" aria-label="Hình được phủ bởi ô vuông đơn vị"><text x="160" y="24" text-anchor="middle" font-size="14" font-weight="800" fill="#475569">Mỗi ô là 1 cm²</text>${cells}</svg>`, 'question-media-compact');
    }

    function placeValueTable(params = {}) {
        const value = bounded(params.value, 0, 100000, 10000);
        const digits = String(value).padStart(5, '0').split('');
        const labels = ['Chục nghìn', 'Nghìn', 'Trăm', 'Chục', 'Đơn vị'];
        const cells = labels.map((label, index) => {
            const x = 16 + index * 98;
            const center = x + 45;
            const labelLines = label.split(' ');
            const heading = labelLines.length === 1
                ? `<text x="${center}" y="28" text-anchor="middle" font-size="14" font-weight="800" fill="#475569">${label}</text>`
                : `<text x="${center}" y="19" text-anchor="middle" font-size="13" font-weight="800" fill="#475569"><tspan x="${center}" dy="0">${labelLines[0]}</tspan><tspan x="${center}" dy="15">${labelLines.slice(1).join(' ')}</tspan></text>`;
            return `${heading}<rect x="${x}" y="43" width="90" height="72" rx="7" fill="#eff6ff" stroke="#2563eb" stroke-width="2.2"/><text x="${center}" y="91" text-anchor="middle" font-size="35" font-weight="800" fill="#17324d">${digits[index]}</text>`;
        }).join('');
        return wrap(`<svg class="question-media-svg place-value-table-svg" viewBox="0 0 506 132" role="img" aria-label="Bảng giá trị hàng của số ${formatStudentNumber(value)}">${cells}</svg>`);
    }

    function angleDiagram(params = {}) {
        const kind = ['right', 'acute', 'obtuse'].includes(params.kind) ? params.kind : 'right';
        const end = kind === 'right' ? [190, 45] : (kind === 'acute' ? [230, 68] : [235, 145]);
        const arc = kind === 'right'
            ? '<path d="M150 115 V91 H174" fill="none" stroke="#f97316" stroke-width="4"/>'
            : `<path d="M190 115 A40 40 0 ${kind === 'obtuse' ? 1 : 0} 0 ${end[0] - 14} ${end[1] + (kind === 'acute' ? 10 : -8)}" fill="none" stroke="#f97316" stroke-width="4"/>`;
        const label = kind === 'right' ? 'Góc vuông' : (kind === 'acute' ? 'Góc bé hơn góc vuông' : 'Góc lớn hơn góc vuông');
        return wrap(`<svg class="question-media-svg angle-diagram-svg" viewBox="0 0 340 185" role="img" aria-label="Hình vẽ một góc"><circle cx="150" cy="115" r="5" fill="#1d4ed8"/><path d="M150 115 L250 115 M150 115 L${end[0]} ${end[1]}" fill="none" stroke="#2563eb" stroke-width="6" stroke-linecap="round"/>${arc}<text x="170" y="166" text-anchor="middle" font-size="14" font-weight="700" fill="#475569">${label}</text></svg>`, 'question-media-compact');
    }

    function angleProtractor(params, question = {}) {
        const validation = validateGrade4MediaParams(params, question.question, question.template_id, question.correct_answer);
        if (!validation.valid) return grade4MediaError(params && params.type);
        const degrees = params.angle_degrees;
        const centerX = 305;
        const centerY = 250;
        const radius = 170;
        const rayLength = 212;
        const toPoint = (length, degree) => {
            const radians = -degree * Math.PI / 180;
            return [centerX + Math.cos(radians) * length, centerY + Math.sin(radians) * length];
        };
        const [baseX, baseY] = toPoint(rayLength, 0);
        const [otherX, otherY] = toPoint(rayLength, degrees);
        const ticks = [];
        for (let degree = 0; degree <= 180; degree += 5) {
            const major = degree % 10 === 0;
            const [outerX, outerY] = toPoint(radius, degree);
            const [innerX, innerY] = toPoint(radius - (major ? 15 : 9), degree);
            ticks.push(`<line x1="${outerX.toFixed(1)}" y1="${outerY.toFixed(1)}" x2="${innerX.toFixed(1)}" y2="${innerY.toFixed(1)}" stroke="#64748b" stroke-width="${major ? 2.2 : 1.2}"/>`);
            if (major && degree % 20 === 0) {
                const [labelX, labelY] = toPoint(radius - 31, degree);
                ticks.push(`<text x="${labelX.toFixed(1)}" y="${(labelY + 4).toFixed(1)}" text-anchor="middle" font-size="12" font-weight="700" fill="#475569">${degree}</text>`);
            }
        }
        const rightMarker = params.angle_kind === 'right'
            ? `<path d="M${centerX + 30} ${centerY} L${centerX + 30} ${centerY - 30} L${centerX} ${centerY - 30}" fill="none" stroke="#f97316" stroke-width="4"/>`
            : '';
        const arcEnd = toPoint(46, degrees);
        const arc = degrees === 180
            ? `<path d="M${centerX + 58} ${centerY} A58 58 0 0 0 ${centerX - 58} ${centerY}" fill="none" stroke="#f97316" stroke-width="4"/>`
            : `<path d="M${centerX + 58} ${centerY} A58 58 0 0 0 ${arcEnd[0].toFixed(1)} ${arcEnd[1].toFixed(1)}" fill="none" stroke="#f97316" stroke-width="4"/>`;
        const degreeLabel = params.show_degree_label
            ? `<text x="${centerX}" y="${centerY - 68}" text-anchor="middle" font-size="21" font-weight="800" fill="#c2410c">${degrees}°</text>`
            : '';
        const labels = Array.isArray(params.ray_labels) ? params.ray_labels : ['A', 'B'];
        return wrap(`<svg class="question-media-svg grade4-angle-protractor-svg" viewBox="0 0 620 300" role="img" aria-label="Hình góc có thước đo độ"><path d="M${centerX - radius} ${centerY} A${radius} ${radius} 0 0 1 ${centerX + radius} ${centerY} L${centerX + radius} ${centerY} L${centerX - radius} ${centerY} Z" fill="#f8fafc" stroke="#cbd5e1" stroke-width="2"/>${params.show_protractor ? ticks.join('') : ''}<path d="M${centerX} ${centerY} L${baseX.toFixed(1)} ${baseY.toFixed(1)} M${centerX} ${centerY} L${otherX.toFixed(1)} ${otherY.toFixed(1)}" fill="none" stroke="#2563eb" stroke-width="6" stroke-linecap="round"/>${arc}${rightMarker}<circle cx="${centerX}" cy="${centerY}" r="6" fill="#1d4ed8"/><text x="${baseX.toFixed(1)}" y="${(baseY + 24).toFixed(1)}" text-anchor="middle" font-size="18" font-weight="800" fill="#17324d">${escapeSvgText(labels[0] || 'A')}</text><text x="${otherX.toFixed(1)}" y="${(otherY - 14).toFixed(1)}" text-anchor="middle" font-size="18" font-weight="800" fill="#17324d">${escapeSvgText(labels[1] || 'B')}</text><text x="${centerX - 18}" y="${centerY + 24}" text-anchor="middle" font-size="18" font-weight="800" fill="#17324d">${escapeSvgText(params.vertex_label || 'O')}</text>${degreeLabel}</svg>`, 'question-media-compact');
    }

    function parallelArrowMarks(x, y, vertical = false) {
        if (vertical) return `<path d="M${x - 7} ${y - 9} L${x} ${y} L${x - 7} ${y + 9} M${x + 2} ${y - 9} L${x + 9} ${y} L${x + 2} ${y + 9}" fill="none" stroke="#2563eb" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/>`;
        return `<path d="M${x - 9} ${y - 7} L${x} ${y} L${x + 9} ${y - 7} M${x - 9} ${y + 2} L${x} ${y + 9} L${x + 9} ${y + 2}" fill="none" stroke="#2563eb" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/>`;
    }

    function parallelPerpendicularLines(params) {
        const validation = validateGrade4MediaParams(params);
        if (!validation.valid) return grade4MediaError(params && params.type);
        const labels = Array.isArray(params.line_labels) ? params.line_labels : ['a', 'b'];
        const vertical = params.orientation === 'vertical';
        const lineColor = '#475569';
        if (params.relation === 'parallel') {
            const lines = vertical
                ? `<line x1="220" y1="45" x2="220" y2="255" stroke="${lineColor}" stroke-width="5" stroke-linecap="round"/>${parallelArrowMarks(220, 110, true)}${parallelArrowMarks(220, 195, true)}<line x1="400" y1="45" x2="400" y2="255" stroke="${lineColor}" stroke-width="5" stroke-linecap="round"/>${parallelArrowMarks(400, 110, true)}${parallelArrowMarks(400, 195, true)}<text x="204" y="38" font-size="18" font-weight="800" fill="#17324d">${escapeSvgText(labels[0] || 'a')}</text><text x="384" y="38" font-size="18" font-weight="800" fill="#17324d">${escapeSvgText(labels[1] || 'b')}</text>`
                : `<line x1="90" y1="100" x2="530" y2="100" stroke="${lineColor}" stroke-width="5" stroke-linecap="round"/>${parallelArrowMarks(245, 100)}${parallelArrowMarks(385, 100)}<line x1="90" y1="205" x2="530" y2="205" stroke="${lineColor}" stroke-width="5" stroke-linecap="round"/>${parallelArrowMarks(245, 205)}${parallelArrowMarks(385, 205)}<text x="64" y="106" font-size="18" font-weight="800" fill="#17324d">${escapeSvgText(labels[0] || 'a')}</text><text x="64" y="211" font-size="18" font-weight="800" fill="#17324d">${escapeSvgText(labels[1] || 'b')}</text>`;
            return wrap(`<svg class="question-media-svg grade4-lines-svg" viewBox="0 0 620 300" role="img" aria-label="Hai đường thẳng được ký hiệu bằng SVG">${lines}</svg>`, 'question-media-compact');
        }
        const perpendicular = vertical
            ? `<line x1="310" y1="42" x2="310" y2="258" stroke="${lineColor}" stroke-width="5" stroke-linecap="round"/><line x1="115" y1="150" x2="505" y2="150" stroke="${lineColor}" stroke-width="5" stroke-linecap="round"/><path d="M310 150 H338 V122 H310" fill="none" stroke="#2563eb" stroke-width="4"/><text x="294" y="34" font-size="18" font-weight="800" fill="#17324d">${escapeSvgText(labels[0] || 'a')}</text><text x="510" y="156" font-size="18" font-weight="800" fill="#17324d">${escapeSvgText(labels[1] || 'b')}</text>`
            : `<line x1="95" y1="160" x2="525" y2="160" stroke="${lineColor}" stroke-width="5" stroke-linecap="round"/><line x1="310" y1="48" x2="310" y2="272" stroke="${lineColor}" stroke-width="5" stroke-linecap="round"/><path d="M310 160 V132 H338 V160" fill="none" stroke="#2563eb" stroke-width="4"/><text x="72" y="166" font-size="18" font-weight="800" fill="#17324d">${escapeSvgText(labels[0] || 'a')}</text><text x="295" y="40" font-size="18" font-weight="800" fill="#17324d">${escapeSvgText(labels[1] || 'b')}</text>`;
        return wrap(`<svg class="question-media-svg grade4-lines-svg" viewBox="0 0 620 300" role="img" aria-label="Hai đường thẳng vuông góc được ký hiệu bằng SVG">${perpendicular}</svg>`, 'question-media-compact');
    }

    function fractionSector(cx, cy, radius, startDegree, endDegree, fill) {
        const radians = value => value * Math.PI / 180;
        const startX = cx + radius * Math.cos(radians(startDegree));
        const startY = cy + radius * Math.sin(radians(startDegree));
        const endX = cx + radius * Math.cos(radians(endDegree));
        const endY = cy + radius * Math.sin(radians(endDegree));
        const largeArc = endDegree - startDegree > 180 ? 1 : 0;
        return `<path d="M${cx} ${cy} L${startX.toFixed(2)} ${startY.toFixed(2)} A${radius} ${radius} 0 ${largeArc} 1 ${endX.toFixed(2)} ${endY.toFixed(2)} Z" fill="${fill}" stroke="#2563eb" stroke-width="2"/>`;
    }

    function fractionModel(params, question = {}) {
        const validation = validateGrade4MediaParams(params, question.question, question.template_id, question.correct_answer);
        if (!validation.valid) return grade4MediaError(params && params.type);
        const denominator = params.denominator;
        const numerator = params.numerator;
        const models = Array.isArray(params.shaded_parts[0]) ? params.shaded_parts : [params.shaded_parts];
        const count = models.length;
        const gap = 28;
        const usableWidth = 520 - gap * Math.max(0, count - 1);
        const modelWidth = Math.min(220, usableWidth / count);
        const startX = (620 - (modelWidth * count + gap * Math.max(0, count - 1))) / 2;
        const drawings = models.map((shaded, index) => {
            const x = startX + index * (modelWidth + gap);
            const filled = new Set(shaded);
            if (params.shape === 'bar') {
                const cellWidth = modelWidth / denominator;
                return Array.from({ length: denominator }, (_, part) => `<rect x="${(x + part * cellWidth).toFixed(2)}" y="110" width="${cellWidth.toFixed(2)}" height="88" fill="${filled.has(part) ? '#60a5fa' : '#f8fafc'}" stroke="#2563eb" stroke-width="2"/>`).join('');
            }
            const radius = Math.min(82, modelWidth / 2 - 4);
            const cx = x + modelWidth / 2;
            return Array.from({ length: denominator }, (_, part) => fractionSector(cx, 152, radius, -90 + part * 360 / denominator, -90 + (part + 1) * 360 / denominator, filled.has(part) ? '#60a5fa' : '#f8fafc')).join('');
        }).join('');
        const label = params.show_fraction_label ? `<text x="310" y="260" text-anchor="middle" font-size="25" font-weight="800" fill="#17324d">${formatStudentNumber(numerator)}/${formatStudentNumber(denominator)}</text>` : '';
        return wrap(`<svg class="question-media-svg grade4-fraction-model-svg" viewBox="0 0 620 285" role="img" aria-label="Mô hình phân số chia phần bằng nhau">${drawings}${label}</svg>`, 'question-media-compact');
    }

    function barChart(params) {
        const validation = validateGrade4MediaParams(params);
        if (!validation.valid) return grade4MediaError(params && params.type);
        const { min, max, step } = params.y_axis;
        const plot = { x: 88, y: 54, width: 470, height: 230 };
        const ticks = [];
        for (let value = min; value <= max; value += step) {
            const y = plot.y + plot.height - ((value - min) / (max - min)) * plot.height;
            ticks.push(`<line x1="${plot.x}" y1="${y.toFixed(2)}" x2="${plot.x + plot.width}" y2="${y.toFixed(2)}" stroke="#cbd5e1" stroke-width="1.5"/><text x="${plot.x - 13}" y="${(y + 5).toFixed(2)}" text-anchor="end" font-size="14" font-weight="700" fill="#475569">${formatStudentNumber(value)}</text>`);
        }
        const slot = plot.width / params.series.length;
        const barWidth = Math.min(66, slot * 0.58);
        const bars = params.series.map((item, index) => {
            const height = ((item.value - min) / (max - min)) * plot.height;
            const x = plot.x + slot * index + (slot - barWidth) / 2;
            const y = plot.y + plot.height - height;
            const valueText = params.show_values ? `<text x="${(x + barWidth / 2).toFixed(2)}" y="${Math.max(34, y - 9).toFixed(2)}" text-anchor="middle" font-size="15" font-weight="800" fill="#17324d">${formatStudentNumber(item.value)}</text>` : '';
            return `<rect x="${x.toFixed(2)}" y="${y.toFixed(2)}" width="${barWidth.toFixed(2)}" height="${height.toFixed(2)}" rx="4" fill="${escapeSvgText(item.color || '#2563eb')}" stroke="#1e3a8a" stroke-width="2"/>${valueText}<text x="${(x + barWidth / 2).toFixed(2)}" y="${plot.y + plot.height + 29}" text-anchor="middle" font-size="14" font-weight="800" fill="#17324d">${escapeSvgText(item.label)}</text>`;
        }).join('');
        const unit = params.unit ? `<text x="${plot.x - 13}" y="${plot.y - 12}" text-anchor="end" font-size="13" font-weight="800" fill="#475569">${escapeSvgText(params.unit)}</text>` : '';
        return wrap(`<svg class="question-media-svg grade4-bar-chart-svg" viewBox="0 0 640 340" role="img" aria-label="Biểu đồ cột đơn"><text x="320" y="27" text-anchor="middle" font-size="18" font-weight="800" fill="#17324d">${escapeSvgText(params.title || '')}</text>${ticks.join('')}<line x1="${plot.x}" y1="${plot.y}" x2="${plot.x}" y2="${plot.y + plot.height}" stroke="#475569" stroke-width="3"/><line x1="${plot.x}" y1="${plot.y + plot.height}" x2="${plot.x + plot.width}" y2="${plot.y + plot.height}" stroke="#475569" stroke-width="3"/>${unit}${bars}</svg>`, 'question-media-compact');
    }

    function rhombusDiagonals(params) {
        const validation = validateGrade4MediaParams(params);
        if (!validation.valid) return grade4MediaError(params && params.type);
        const cx = 310;
        const cy = 155;
        const points = [[cx, cy - params.diagonal_short / 2], [cx + params.diagonal_long / 2, cy], [cx, cy + params.diagonal_short / 2], [cx - params.diagonal_long / 2, cy]];
        const offsets = [[-12, -12], [14, -4], [-12, 25], [-28, -4]];
        const pointText = points.map(([x, y], index) => `<text x="${(x + offsets[index][0]).toFixed(2)}" y="${(y + offsets[index][1]).toFixed(2)}" font-size="19" font-weight="800" fill="#17324d">${escapeSvgText(params.vertex_labels[index])}</text>`).join('');
        return wrap(`<svg class="question-media-svg grade4-rhombus-svg" viewBox="0 0 620 310" role="img" aria-label="Hình thoi"><polygon points="${points.map(point => point.map(value => value.toFixed(2)).join(',')).join(' ')}" fill="#dbeafe" stroke="#2563eb" stroke-width="5" stroke-linejoin="round"/>${pointText}</svg>`, 'question-media-compact');
    }

    function grade5MeasurementLabel(value, unit) {
        return `${formatStudentNumber(value)} ${escapeSvgText(unit)}`;
    }

    function grade5ParallelMark(x, y) {
        return `<path d="M${x - 8} ${y - 5} L${x + 3} ${y + 5} M${x + 3} ${y - 5} L${x + 14} ${y + 5}" fill="none" stroke="#7c3aed" stroke-width="3" stroke-linecap="round"/>`;
    }

    function rectangularPrismModel(params, question = {}) {
        const validation = validateGrade5MediaParams(params, question.question, question.template_id);
        if (!validation.valid) return grade4MediaError(params && params.type);
        const ratio = Math.max(params.length, params.width, params.height);
        const scale = 190 / ratio;
        const frontWidth = Math.max(112, params.length * scale);
        const frontHeight = Math.max(82, params.height * scale);
        const depthX = Math.max(42, params.width * scale * 0.48);
        const depthY = Math.max(30, params.width * scale * 0.3);
        const frontX = 265 - frontWidth / 2;
        const frontY = 170 - frontHeight / 2 + depthY / 2;
        const top = `${frontX},${frontY} ${frontX + depthX},${frontY - depthY} ${frontX + frontWidth + depthX},${frontY - depthY} ${frontX + frontWidth},${frontY}`;
        const right = `${frontX + frontWidth},${frontY} ${frontX + frontWidth + depthX},${frontY - depthY} ${frontX + frontWidth + depthX},${frontY + frontHeight - depthY} ${frontX + frontWidth},${frontY + frontHeight}`;
        const unitGrid = params.show_unit_cubes
            ? Array.from({ length: Math.min(8, Math.round(params.length)) - 1 }, (_, index) => {
                const x = frontX + (index + 1) * frontWidth / Math.min(8, Math.round(params.length));
                return `<line x1="${x.toFixed(2)}" y1="${frontY}" x2="${x.toFixed(2)}" y2="${frontY + frontHeight}" stroke="#93c5fd" stroke-width="1.5"/>`;
            }).join('') + Array.from({ length: Math.min(6, Math.round(params.height)) - 1 }, (_, index) => {
                const y = frontY + (index + 1) * frontHeight / Math.min(6, Math.round(params.height));
                return `<line x1="${frontX}" y1="${y.toFixed(2)}" x2="${frontX + frontWidth}" y2="${y.toFixed(2)}" stroke="#93c5fd" stroke-width="1.5"/>`;
            }).join('')
            : '';
        const dimensions = params.show_dimensions ? `
            <line x1="${frontX}" y1="${frontY + frontHeight + 31}" x2="${frontX + frontWidth}" y2="${frontY + frontHeight + 31}" stroke="#0f766e" stroke-width="2"/>
            <text x="${frontX + frontWidth / 2}" y="${frontY + frontHeight + 54}" text-anchor="middle" font-size="17" font-weight="800" fill="#0f766e">${escapeSvgText(params.labels.length)} = ${grade5MeasurementLabel(params.length, params.unit)}</text>
            <line x1="${frontX - 27}" y1="${frontY}" x2="${frontX - 27}" y2="${frontY + frontHeight}" stroke="#ea580c" stroke-width="2"/>
            <text x="${frontX - 36}" y="${frontY + frontHeight / 2}" text-anchor="end" font-size="17" font-weight="800" fill="#ea580c">${escapeSvgText(params.labels.height)} = ${grade5MeasurementLabel(params.height, params.unit)}</text>
            <line x1="${frontX + frontWidth + 12}" y1="${frontY - 6}" x2="${frontX + frontWidth + depthX + 10}" y2="${frontY - depthY - 6}" stroke="#7c3aed" stroke-width="2"/>
            <text x="${frontX + frontWidth + depthX + 22}" y="${frontY - depthY - 12}" font-size="17" font-weight="800" fill="#7c3aed">${escapeSvgText(params.labels.width)} = ${grade5MeasurementLabel(params.width, params.unit)}</text>` : '';
        const solidLabel = params.solid === 'cube' ? 'Hình lập phương' : 'Hình hộp chữ nhật';
        return wrap(`<svg class="question-media-svg grade5-prism-svg" viewBox="0 0 620 340" role="img" aria-label="${solidLabel}"><polygon points="${top}" fill="#dbeafe" stroke="#2563eb" stroke-width="4" stroke-linejoin="round"/><polygon points="${right}" fill="#bfdbfe" stroke="#2563eb" stroke-width="4" stroke-linejoin="round"/><rect x="${frontX}" y="${frontY}" width="${frontWidth}" height="${frontHeight}" fill="#eff6ff" stroke="#2563eb" stroke-width="4" rx="2"/>${unitGrid}${dimensions}<text x="310" y="30" text-anchor="middle" font-size="18" font-weight="800" fill="#17324d">${solidLabel}</text></svg>`, 'question-media-compact');
    }

    function circleMeasurement(params, question = {}) {
        const validation = validateGrade5MediaParams(params, question.question, question.template_id);
        if (!validation.valid) return grade4MediaError(params && params.type);
        const cx = 310;
        const cy = 155;
        const radius = 100;
        const [leftLabel, rightLabel] = params.point_labels;
        const radiusLine = params.show_radius ? `<line x1="${cx}" y1="${cy}" x2="${cx + radius}" y2="${cy}" stroke="#ea580c" stroke-width="4" stroke-linecap="round"/>` : '';
        const diameterLine = params.show_diameter ? `<line x1="${cx - radius}" y1="${cy}" x2="${cx + radius}" y2="${cy}" stroke="#2563eb" stroke-width="4" stroke-linecap="round"/>` : '';
        const measures = params.show_measure_labels ? `${params.show_radius ? `<text x="${cx + radius / 2}" y="${cy - 12}" text-anchor="middle" font-size="17" font-weight="800" fill="#c2410c">${grade5MeasurementLabel(params.radius, params.unit)}</text>` : ''}${params.show_diameter ? `<text x="${cx}" y="${cy + 26}" text-anchor="middle" font-size="17" font-weight="800" fill="#1d4ed8">${grade5MeasurementLabel(params.diameter, params.unit)}</text>` : ''}` : '';
        return wrap(`<svg class="question-media-svg grade5-circle-svg" viewBox="0 0 620 315" role="img" aria-label="Đường tròn có tâm ${escapeSvgText(params.center_label)}"><circle cx="${cx}" cy="${cy}" r="${radius}" fill="#eff6ff" stroke="#2563eb" stroke-width="4"/>${diameterLine}${radiusLine}<circle cx="${cx}" cy="${cy}" r="5" fill="#17324d"/><text x="${cx - 15}" y="${cy - 11}" font-size="18" font-weight="800" fill="#17324d">${escapeSvgText(params.center_label)}</text><text x="${cx - radius - 22}" y="${cy + 7}" font-size="18" font-weight="800" fill="#17324d">${escapeSvgText(leftLabel)}</text><text x="${cx + radius + 10}" y="${cy + 7}" font-size="18" font-weight="800" fill="#17324d">${escapeSvgText(rightLabel)}</text>${measures}</svg>`, 'question-media-compact');
    }

    function trapezoidMeasurement(params, question = {}) {
        const validation = validateGrade5MediaParams(params, question.question, question.template_id);
        if (!validation.valid) return grade4MediaError(params && params.type);
        const scale = Math.min(26, 310 / Math.max(params.top_base, params.bottom_base));
        const topWidth = params.top_base * scale;
        const bottomWidth = params.bottom_base * scale;
        const height = Math.max(86, Math.min(150, params.height * scale));
        const cx = 310;
        const topY = 78;
        const bottomY = topY + height;
        const topLeft = cx - topWidth / 2;
        const topRight = cx + topWidth / 2;
        const bottomLeft = cx - bottomWidth / 2;
        const bottomRight = cx + bottomWidth / 2;
        const [a, b, c, d] = params.vertex_labels;
        const labels = `${params.show_base_labels ? `<text x="${cx}" y="${topY - 16}" text-anchor="middle" font-size="17" font-weight="800" fill="#0f766e">${grade5MeasurementLabel(params.top_base, params.unit)}</text><text x="${cx}" y="${bottomY + 31}" text-anchor="middle" font-size="17" font-weight="800" fill="#0f766e">${grade5MeasurementLabel(params.bottom_base, params.unit)}</text>` : ''}${params.show_height_label ? `<text x="${topLeft - 16}" y="${topY + height / 2}" text-anchor="end" font-size="17" font-weight="800" fill="#c2410c">${grade5MeasurementLabel(params.height, params.unit)}</text>` : ''}`;
        return wrap(`<svg class="question-media-svg grade5-trapezoid-svg" viewBox="0 0 620 310" role="img" aria-label="Hình thang có hai đáy song song"><polygon points="${topLeft},${topY} ${topRight},${topY} ${bottomRight},${bottomY} ${bottomLeft},${bottomY}" fill="#eff6ff" stroke="#2563eb" stroke-width="4" stroke-linejoin="round"/>${grade5ParallelMark(cx - 12, topY)}${grade5ParallelMark(cx - 12, bottomY)}<line x1="${topLeft}" y1="${topY}" x2="${topLeft}" y2="${bottomY}" stroke="#ea580c" stroke-width="3" stroke-dasharray="7 6"/><path d="M${topLeft} ${bottomY} H${topLeft + 22} V${bottomY - 22}" fill="none" stroke="#ea580c" stroke-width="3"/><text x="${topLeft - 18}" y="${topY - 8}" font-size="18" font-weight="800" fill="#17324d">${escapeSvgText(a)}</text><text x="${topRight + 10}" y="${topY - 8}" font-size="18" font-weight="800" fill="#17324d">${escapeSvgText(b)}</text><text x="${bottomRight + 10}" y="${bottomY + 22}" font-size="18" font-weight="800" fill="#17324d">${escapeSvgText(c)}</text><text x="${bottomLeft - 20}" y="${bottomY + 22}" font-size="18" font-weight="800" fill="#17324d">${escapeSvgText(d)}</text>${labels}</svg>`, 'question-media-compact');
    }

    function triangleMeasurement(params, question = {}) {
        const validation = validateGrade5MediaParams(params, question.question, question.template_id);
        if (!validation.valid) return grade4MediaError(params && params.type);
        const basePixels = 330;
        const leftX = 145;
        const baseY = 250;
        const visualHeight = Math.max(92, Math.min(172, params.height / params.base * basePixels));
        const apexX = params.triangle_kind === 'isosceles' ? leftX + basePixels / 2 : (params.triangle_kind === 'right' ? leftX : leftX + basePixels * 0.37);
        const apexY = baseY - visualHeight;
        const [a, b, c] = params.vertex_labels;
        const measureLabels = `${params.show_base_label ? `<text x="${leftX + basePixels / 2}" y="${baseY + 34}" text-anchor="middle" font-size="17" font-weight="800" fill="#0f766e">${grade5MeasurementLabel(params.base, params.unit)}</text>` : ''}${params.show_height_label ? `<text x="${apexX - 14}" y="${apexY + visualHeight / 2}" text-anchor="end" font-size="17" font-weight="800" fill="#c2410c">${grade5MeasurementLabel(params.height, params.unit)}</text>` : ''}`;
        return wrap(`<svg class="question-media-svg grade5-triangle-svg" viewBox="0 0 620 310" role="img" aria-label="Hình tam giác có đường cao"><polygon points="${leftX},${baseY} ${leftX + basePixels},${baseY} ${apexX},${apexY}" fill="#eff6ff" stroke="#2563eb" stroke-width="4" stroke-linejoin="round"/><line x1="${apexX}" y1="${apexY}" x2="${apexX}" y2="${baseY}" stroke="#ea580c" stroke-width="3" stroke-dasharray="7 6"/><path d="M${apexX} ${baseY} H${apexX + 22} V${baseY - 22}" fill="none" stroke="#ea580c" stroke-width="3"/><text x="${leftX - 22}" y="${baseY + 22}" font-size="18" font-weight="800" fill="#17324d">${escapeSvgText(a)}</text><text x="${leftX + basePixels + 9}" y="${baseY + 22}" font-size="18" font-weight="800" fill="#17324d">${escapeSvgText(b)}</text><text x="${apexX - 10}" y="${apexY - 13}" font-size="18" font-weight="800" fill="#17324d">${escapeSvgText(c)}</text>${measureLabels}</svg>`, 'question-media-compact');
    }

    function rhombusMeasurement(params, question = {}) {
        const validation = validateGrade5MediaParams(params, question.question, question.template_id);
        if (!validation.valid) return grade4MediaError(params && params.type);
        const scale = Math.min(8, 270 / Math.max(params.diagonal_a, params.diagonal_b));
        const horizontal = params.diagonal_a * scale;
        const vertical = params.diagonal_b * scale;
        const cx = 310;
        const cy = 155;
        const top = [cx, cy - vertical / 2];
        const right = [cx + horizontal / 2, cy];
        const bottom = [cx, cy + vertical / 2];
        const left = [cx - horizontal / 2, cy];
        const [a, b, c, d] = params.vertex_labels;
        const baseVector = [bottom[0] - left[0], bottom[1] - left[1]];
        const baseLength = Math.hypot(baseVector[0], baseVector[1]);
        const unitVector = [baseVector[0] / baseLength, baseVector[1] / baseLength];
        const fromLeftToTop = [top[0] - left[0], top[1] - left[1]];
        const projection = fromLeftToTop[0] * unitVector[0] + fromLeftToTop[1] * unitVector[1];
        const foot = [left[0] + projection * unitVector[0], left[1] + projection * unitVector[1]];
        const diagonalLines = params.show_diagonals ? `<line x1="${left[0]}" y1="${left[1]}" x2="${right[0]}" y2="${right[1]}" stroke="#7c3aed" stroke-width="3" stroke-dasharray="7 5"/><line x1="${top[0]}" y1="${top[1]}" x2="${bottom[0]}" y2="${bottom[1]}" stroke="#7c3aed" stroke-width="3" stroke-dasharray="7 5"/>${params.show_perpendicular_marker ? `<path d="M${cx} ${cy} h18 v18 h-18" fill="none" stroke="#7c3aed" stroke-width="3"/>` : ''}` : '';
        const heightLine = params.show_height ? `<line x1="${top[0]}" y1="${top[1]}" x2="${foot[0].toFixed(2)}" y2="${foot[1].toFixed(2)}" stroke="#ea580c" stroke-width="3" stroke-dasharray="7 6"/><path d="M${foot[0].toFixed(2)} ${foot[1].toFixed(2)} l${(-unitVector[1] * 18).toFixed(2)} ${(-unitVector[0] * 18).toFixed(2)} l${(unitVector[0] * 18).toFixed(2)} ${(unitVector[1] * 18).toFixed(2)}" fill="none" stroke="#ea580c" stroke-width="3"/>` : '';
        const labels = params.show_measure_labels ? `<text x="${(left[0] + bottom[0]) / 2 - 18}" y="${(left[1] + bottom[1]) / 2 + 24}" text-anchor="middle" font-size="16" font-weight="800" fill="#0f766e">${grade5MeasurementLabel(params.side, params.unit)}</text>${params.show_height ? `<text x="${(top[0] + foot[0]) / 2 - 16}" y="${(top[1] + foot[1]) / 2 - 10}" text-anchor="end" font-size="16" font-weight="800" fill="#c2410c">${grade5MeasurementLabel(params.height, params.unit)}</text>` : ''}${params.show_diagonals ? `<text x="${cx + horizontal / 4}" y="${cy - 10}" text-anchor="middle" font-size="16" font-weight="800" fill="#6d28d9">${grade5MeasurementLabel(params.diagonal_a, params.unit)}</text><text x="${cx + 13}" y="${cy - vertical / 4}" font-size="16" font-weight="800" fill="#6d28d9">${grade5MeasurementLabel(params.diagonal_b, params.unit)}</text>` : ''}` : '';
        return wrap(`<svg class="question-media-svg grade5-rhombus-svg" viewBox="0 0 620 310" role="img" aria-label="Hình thoi"><polygon points="${top.join(',')} ${right.join(',')} ${bottom.join(',')} ${left.join(',')}" fill="#ede9fe" stroke="#7c3aed" stroke-width="4" stroke-linejoin="round"/>${diagonalLines}${heightLine}<text x="${top[0] - 12}" y="${top[1] - 12}" font-size="18" font-weight="800" fill="#17324d">${escapeSvgText(a)}</text><text x="${right[0] + 10}" y="${right[1] - 2}" font-size="18" font-weight="800" fill="#17324d">${escapeSvgText(b)}</text><text x="${bottom[0] - 12}" y="${bottom[1] + 25}" font-size="18" font-weight="800" fill="#17324d">${escapeSvgText(c)}</text><text x="${left[0] - 27}" y="${left[1] - 2}" font-size="18" font-weight="800" fill="#17324d">${escapeSvgText(d)}</text>${labels}</svg>`, 'question-media-compact');
    }

    function pieChart(params, question = {}) {
        const validation = validateGrade5MediaParams(params, question.question, question.template_id);
        if (!validation.valid) return grade4MediaError(params && params.type);
        const colors = ['#2563eb', '#16a34a', '#f59e0b', '#9333ea', '#ef4444'];
        const cx = 190; const cy = 155; const radius = 100;
        let angle = -Math.PI / 2;
        const paths = params.segments.map((segment, index) => {
            const sweep = (segment.value / 100) * Math.PI * 2;
            const end = angle + sweep;
            const x1 = cx + radius * Math.cos(angle); const y1 = cy + radius * Math.sin(angle);
            const x2 = cx + radius * Math.cos(end); const y2 = cy + radius * Math.sin(end);
            const large = sweep > Math.PI ? 1 : 0;
            const path = `<path d="M${cx} ${cy} L${x1.toFixed(2)} ${y1.toFixed(2)} A${radius} ${radius} 0 ${large} 1 ${x2.toFixed(2)} ${y2.toFixed(2)} Z" fill="${colors[index]}" stroke="#ffffff" stroke-width="3"/>`;
            angle = end;
            return path;
        }).join('');
        const legend = params.segments.map((segment, index) => {
            const y = 64 + index * 42;
            const value = params.show_values ? `: ${formatStudentNumber(segment.value)}%` : '';
            return `<rect x="352" y="${y - 15}" width="20" height="20" rx="4" fill="${colors[index]}"/><text x="384" y="${y + 1}" font-size="17" font-weight="800" fill="#17324d">${escapeSvgText(segment.label)}${value}</text>`;
        }).join('');
        return wrap(`<svg class="question-media-svg grade5-pie-chart-svg" viewBox="0 0 620 310" role="img" aria-label="Biểu đồ hình quạt tròn">${paths}${legend}</svg>`, 'question-media-compact');
    }

    function motionTimeline(params, question = {}) {
        const validation = validateGrade5MediaParams(params, question.question, question.template_id);
        if (!validation.valid) return grade4MediaError(params && params.type);
        const left = 90; const right = 530; const y = 150;
        const distanceLabel = params.show_distance ? `${formatStudentNumber(params.distance)} ${escapeSvgText(params.distance_unit)}` : '';
        const durationLabel = params.show_duration ? `${formatStudentNumber(params.duration)} ${escapeSvgText(params.time_unit)}` : '';
        return wrap(`<svg class="question-media-svg grade5-motion-timeline-svg" viewBox="0 0 620 260" role="img" aria-label="Sơ đồ chuyển động một vật"><defs><marker id="grade5-motion-arrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#2563eb"/></marker></defs><circle cx="${left}" cy="${y}" r="13" fill="#22c55e"/><circle cx="${right}" cy="${y}" r="13" fill="#f97316"/><line x1="${left + 18}" y1="${y}" x2="${right - 18}" y2="${y}" stroke="#2563eb" stroke-width="5" stroke-linecap="round" marker-end="url(#grade5-motion-arrow)"/><text x="${left}" y="${y + 38}" text-anchor="middle" font-size="17" font-weight="800" fill="#17324d">${escapeSvgText(params.labels.start)}</text><text x="${right}" y="${y + 38}" text-anchor="middle" font-size="17" font-weight="800" fill="#17324d">${escapeSvgText(params.labels.end)}</text><text x="310" y="${y - 24}" text-anchor="middle" font-size="20" font-weight="800" fill="#0f766e">${distanceLabel}</text><text x="310" y="${y + 78}" text-anchor="middle" font-size="18" font-weight="800" fill="#7c3aed">${durationLabel}</text></svg>`, 'question-media-compact');
    }

    function rulerMillimeter(params = {}) {
        const start = bounded(params.start, 0, 50, 0);
        const end = bounded(params.end, start + 1, 60, 35);
        const x = value => 28 + value * 4.7;
        const ticks = Array.from({ length: 61 }, (_, value) => `<line x1="${x(value)}" y1="${value % 10 === 0 ? 88 : 96}" x2="${x(value)}" y2="112" stroke="#2563eb" stroke-width="${value % 10 === 0 ? 2 : 1}"/>${value % 10 === 0 ? `<text x="${x(value)}" y="130" text-anchor="middle" font-size="11" fill="#1e3a8a">${value}</text>` : ''}`).join('');
        return wrap(`<svg class="question-media-svg ruler-millimeter-svg" viewBox="0 0 340 150" role="img" aria-label="Thước chia mi-li-mét"><rect x="24" y="87" width="286" height="28" rx="4" fill="#fef3c7" stroke="#f59e0b"/><line x1="${x(start)}" y1="60" x2="${x(end)}" y2="60" stroke="#ef4444" stroke-width="10" stroke-linecap="round"/>${ticks}<text x="28" y="28" font-size="14" font-weight="800" fill="#475569">Mỗi vạch nhỏ là 1 mm</text></svg>`, 'question-media-compact');
    }

    function thermometer(params = {}) {
        const temperature = bounded(params.temperature, -5, 45, 20);
        const top = 36; const bottom = 154; const y = bottom - ((temperature + 5) / 50) * (bottom - top);
        const ticks = Array.from({ length: 11 }, (_, index) => {
            const value = index * 5;
            const tickY = bottom - ((value + 5) / 50) * (bottom - top);
            return `<line x1="182" y1="${tickY}" x2="${index % 2 === 0 ? 202 : 195}" y2="${tickY}" stroke="#2563eb" stroke-width="2"/><text x="210" y="${tickY + 4}" font-size="11" fill="#1e3a8a">${value}</text>`;
        }).join('');
        return wrap(`<svg class="question-media-svg thermometer-svg" viewBox="0 0 310 185" role="img" aria-label="Nhiệt kế"><rect x="146" y="28" width="36" height="134" rx="18" fill="#eff6ff" stroke="#2563eb" stroke-width="3"/><rect x="157" y="${y}" width="14" height="${bottom - y}" rx="7" fill="#ef4444"/><circle cx="164" cy="161" r="23" fill="#ef4444" stroke="#b91c1c" stroke-width="3"/>${ticks}<text x="36" y="45" font-size="15" font-weight="800" fill="#475569">Nhiệt kế</text></svg>`, 'question-media-compact');
    }

    function borrowThreeDigitSubtraction(params = {}) {
        const left = bounded(params.left, 0, 999, 402);
        const right = bounded(params.right, 0, left, 185);
        const needsOnesBorrow = left % 10 < right % 10;
        const leftTensAfterOnes = Math.floor((left % 100) / 10) - (needsOnesBorrow ? 1 : 0);
        const needsTensBorrow = leftTensAfterOnes < Math.floor((right % 100) / 10);
        const note = `${needsTensBorrow ? 'Tách 1 trăm thành 10 chục. ' : ''}${needsOnesBorrow ? 'Tách 1 chục thành 10 đơn vị.' : ''}`;
        return wrap(`<svg class="question-media-svg borrow-three-digit-subtraction-svg" viewBox="0 0 700 245" role="img" aria-label="Minh họa phép trừ có nhớ theo hàng"><text x="20" y="28" font-size="20" font-weight="800" fill="#17324d">${left} - ${right} = ?</text><text x="22" y="52" font-size="13" font-weight="800" fill="#2563eb">Số bị trừ</text><text x="470" y="52" font-size="13" font-weight="800" fill="#dc2626">Sau khi tách</text><text x="22" y="72" font-size="13" font-weight="700" fill="#1e3a8a">${left}</text>${baseTenColumn(left, 22, 84, { hundred: '#bfdbfe', ten: '#99f6e4', one: '#fde047' })}<text x="255" y="132" font-size="30" font-weight="800" fill="#b91c1c">-</text><text x="285" y="72" font-size="13" font-weight="700" fill="#c2410c">${right}</text>${baseTenColumn(right, 285, 84, { hundred: '#fed7aa', ten: '#fdba74', one: '#facc15' })}<path d="M510 128 H552" stroke="#dc2626" stroke-width="3" marker-end="url(#g2-three-sub-arrow)"/><text x="532" y="112" text-anchor="middle" font-size="11" font-weight="800" fill="#dc2626">tách</text><text x="566" y="72" font-size="13" font-weight="700" fill="#166534">${left - right}</text>${baseTenColumn(left - right, 466, 84, { hundred: '#86efac', ten: '#5eead4', one: '#fde047' })}<text x="22" y="223" font-size="14" font-weight="800" fill="#475569">${note}</text><defs><marker id="g2-three-sub-arrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#dc2626"/></marker></defs></svg>`, 'question-media-compact');
    }

    function tallyTable(params = {}) {
        if (!Array.isArray(params.labels) || !Array.isArray(params.counts)
            || params.labels.length < 1 || params.labels.length > 4
            || params.labels.length !== params.counts.length
            || params.labels.some(label => String(label || '').trim() === '')
            || params.counts.some(count => !isIntegerInRange(count, 0, 10))) return '';
        const labels = params.labels;
        const counts = params.counts;
        const rows = labels.map((label, index) => {
            const count = bounded(counts[index], 0, 10, 0);
            const rowY = 39 + index * 36;
            const textY = rowY + 23;
            const marks = Array.from({ length: count }, (_, mark) => `<line x1="${173 + mark * 12}" y1="${rowY + 12}" x2="${173 + mark * 12}" y2="${rowY + 31}" stroke="#2563eb" stroke-width="3"/>`).join('');
            return `<rect x="18" y="${rowY}" width="364" height="36" fill="${index % 2 ? '#f8fafc' : '#eff6ff'}" stroke="#cbd5e1"/><text x="34" y="${textY}" font-size="15" font-weight="700" fill="#17324d">${label}</text>${marks}<text x="353" y="${textY}" text-anchor="middle" font-size="16" font-weight="800" fill="#166534">${formatStudentNumber(count)}</text>`;
        }).join('');
        return wrap(`<svg class="question-media-svg tally-table-svg" viewBox="0 0 400 ${52 + labels.length * 36}" role="img" aria-label="Bảng kiểm đếm"><rect x="18" y="10" width="364" height="29" fill="#dbeafe" stroke="#2563eb"/><text x="34" y="30" font-size="14" font-weight="800" fill="#17324d">Loại</text><text x="175" y="30" font-size="14" font-weight="800" fill="#17324d">Vạch kiểm</text><text x="353" y="30" text-anchor="middle" font-size="14" font-weight="800" fill="#17324d">Số</text>${rows}</svg>`, 'question-media-compact');
    }

    function pictograph(params = {}) {
        if (!Array.isArray(params.labels) || !Array.isArray(params.counts)
            || params.labels.length < 1 || params.labels.length > 3
            || params.labels.length !== params.counts.length
            || params.labels.some(label => String(label || '').trim() === '')
            || params.counts.some(count => !isIntegerInRange(count, 0, 9))) return '';
        const labels = params.labels;
        const counts = params.counts;
        const colors = ['#ef4444', '#2563eb', '#eab308'];
        const rows = labels.map((label, index) => {
            const count = bounded(counts[index], 0, 9, 0);
            const rowY = 55 + index * 42;
            const symbols = Array.from({ length: count }, (_, item) => `<circle cx="${126 + item * 26}" cy="${rowY}" r="9" fill="${colors[index]}" stroke="#334155" stroke-width="1.2"/>`).join('');
            return `<text x="24" y="${rowY + 5}" font-size="15" font-weight="700" fill="#17324d">${label}</text>${symbols}`;
        }).join('');
        return wrap(`<svg class="question-media-svg pictograph-svg" viewBox="0 0 390 ${35 + labels.length * 42}" role="img" aria-label="Biểu đồ tranh, mỗi hình tròn là một đồ vật"><text x="22" y="22" font-size="13" font-weight="800" fill="#475569">Mỗi hình tròn là 1 đồ vật</text>${rows}</svg>`, 'question-media-compact');
    }

    function geometryDiagram(params = {}) {
        const kind = params.kind || 'segment';
        if (kind === 'polyline') return wrap(`<svg class="question-media-svg geometry-diagram-svg" viewBox="0 0 360 170" role="img" aria-label="Đường gấp khúc"><polyline points="42,125 105,52 175,112 246,42 316,104" fill="none" stroke="#2563eb" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/><circle cx="42" cy="125" r="6" fill="#f97316"/><circle cx="105" cy="52" r="6" fill="#f97316"/><circle cx="175" cy="112" r="6" fill="#f97316"/><circle cx="246" cy="42" r="6" fill="#f97316"/><circle cx="316" cy="104" r="6" fill="#f97316"/></svg>`, 'question-media-compact');
        if (kind === 'compose') return wrap(`<svg class="question-media-svg geometry-diagram-svg" viewBox="0 0 360 170" role="img" aria-label="Hình ghép từ các mảnh hình học"><rect x="105" y="28" width="150" height="115" fill="#dbeafe" stroke="#2563eb" stroke-width="4"/><line x1="180" y1="28" x2="180" y2="143" stroke="#2563eb" stroke-width="3"/><line x1="105" y1="86" x2="255" y2="86" stroke="#2563eb" stroke-width="3"/><polygon points="105,28 180,86 105,86" fill="#fef3c7" stroke="#d97706" stroke-width="3"/></svg>`, 'question-media-compact');
        if (kind === 'point') return wrap(`<svg class="question-media-svg geometry-diagram-svg" viewBox="0 0 360 170" role="img" aria-label="Các điểm"><circle cx="75" cy="82" r="7" fill="#2563eb"/><circle cx="180" cy="45" r="7" fill="#f97316"/><circle cx="285" cy="116" r="7" fill="#16a34a"/><text x="63" y="66" font-size="19" font-weight="800">A</text><text x="168" y="30" font-size="19" font-weight="800">B</text><text x="273" y="150" font-size="19" font-weight="800">C</text></svg>`, 'question-media-compact');
        return wrap(`<svg class="question-media-svg geometry-diagram-svg" viewBox="0 0 360 170" role="img" aria-label="Đoạn thẳng"><line x1="60" y1="90" x2="300" y2="90" stroke="#2563eb" stroke-width="6" stroke-linecap="round"/><circle cx="60" cy="90" r="7" fill="#f97316"/><circle cx="300" cy="90" r="7" fill="#f97316"/><text x="48" y="70" font-size="19" font-weight="800">A</text><text x="290" y="70" font-size="19" font-weight="800">B</text></svg>`, 'question-media-compact');
    }

    function geometryDiagramVariant(params = {}) {
        const kind = params.kind || 'segment';
        const details = params.params && typeof params.params === 'object' ? params.params : null;
        if (!details) return geometryDiagram(params);
        if (kind === 'point') {
            const count = bounded(details.count, 2, 5, 3);
            const labels = Array.isArray(details.labels) ? details.labels.slice(0, count) : ['A', 'B', 'C', 'D', 'E'].slice(0, count);
            const points = Array.from({ length: count }, (_, index) => {
                const x = 48 + index * (264 / Math.max(1, count - 1));
                const y = 92 + (index % 2 === 0 ? 26 : -30);
                return `<circle cx="${x}" cy="${y}" r="7" fill="${index % 2 ? '#f97316' : '#2563eb'}"/><text x="${x - 11}" y="${y - 13}" font-size="18" font-weight="800">${labels[index]}</text>`;
            }).join('');
            return wrap(`<svg class="question-media-svg geometry-diagram-svg" viewBox="0 0 360 170" role="img" aria-label="Các điểm được đánh dấu">${points}</svg>`, 'question-media-compact');
        }
        if (kind === 'segment') {
            const labels = Array.isArray(details.labels) && details.labels.length === 2 ? details.labels : ['A', 'B'];
            return wrap(`<svg class="question-media-svg geometry-diagram-svg" viewBox="0 0 360 170" role="img" aria-label="Đoạn thẳng"><line x1="60" y1="90" x2="300" y2="90" stroke="#2563eb" stroke-width="6" stroke-linecap="round"/><circle cx="60" cy="90" r="7" fill="#f97316"/><circle cx="300" cy="90" r="7" fill="#f97316"/><text x="48" y="70" font-size="19" font-weight="800">${labels[0]}</text><text x="290" y="70" font-size="19" font-weight="800">${labels[1]}</text></svg>`, 'question-media-compact');
        }
        if (kind === 'polyline') {
            const count = bounded(details.points, 3, 6, 5);
            const coords = Array.from({ length: count }, (_, index) => [36 + index * (288 / (count - 1)), index % 2 ? 44 : 124]);
            const points = coords.map(point => point.join(',')).join(' ');
            const dots = coords.map(([x, y]) => `<circle cx="${x}" cy="${y}" r="6" fill="#f97316"/>`).join('');
            return wrap(`<svg class="question-media-svg geometry-diagram-svg" viewBox="0 0 360 170" role="img" aria-label="Đường gấp khúc"><polyline points="${points}" fill="none" stroke="#2563eb" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>${dots}</svg>`, 'question-media-compact');
        }
        if (kind === 'compose') {
            const outer = details.outer === 'square' ? 'square' : 'rectangle';
            const pieces = bounded(details.pieces, 3, 6, 4);
            const width = outer === 'square' ? 116 : 168;
            const x = (360 - width) / 2;
            const step = width / pieces;
            const dividers = Array.from({ length: pieces - 1 }, (_, index) => `<line x1="${x + step * (index + 1)}" y1="33" x2="${x + step * (index + 1)}" y2="137" stroke="#2563eb" stroke-width="3"/>`).join('');
            return wrap(`<svg class="question-media-svg geometry-diagram-svg" viewBox="0 0 360 170" role="img" aria-label="Hình ghép"><rect x="${x}" y="33" width="${width}" height="104" fill="#dbeafe" stroke="#2563eb" stroke-width="4"/>${dividers}<rect x="${x}" y="33" width="${step}" height="104" fill="#fef3c7" stroke="#d97706" stroke-width="3"/></svg>`, 'question-media-compact');
        }
        return geometryDiagram(params);
    }

    function midpointSegment(params = {}) {
        const labels = Array.isArray(params.labels) && params.labels.length === 3
            ? params.labels.map(value => String(value).slice(0, 3))
            : ['A', 'M', 'B'];
        return wrap(`<svg class="question-media-svg geometry-diagram-svg" viewBox="0 0 360 170" role="img" aria-label="Đoạn thẳng có điểm ở giữa"><line x1="48" y1="92" x2="312" y2="92" stroke="#2563eb" stroke-width="6" stroke-linecap="round"/><circle cx="48" cy="92" r="7" fill="#f97316"/><circle cx="180" cy="92" r="7" fill="#22c55e"/><circle cx="312" cy="92" r="7" fill="#f97316"/><line x1="114" y1="80" x2="114" y2="104" stroke="#94a3b8" stroke-width="2"/><line x1="246" y1="80" x2="246" y2="104" stroke="#94a3b8" stroke-width="2"/><text x="39" y="70" font-size="19" font-weight="800">${labels[0]}</text><text x="171" y="70" font-size="19" font-weight="800">${labels[1]}</text><text x="303" y="70" font-size="19" font-weight="800">${labels[2]}</text></svg>`, 'question-media-compact');
    }

    function circleGeometry() {
        return wrap('<svg class="question-media-svg geometry-diagram-svg" viewBox="0 0 360 210" role="img" aria-label="Hình tròn có tâm, bán kính và đường kính"><circle cx="180" cy="106" r="72" fill="#eff6ff" stroke="#2563eb" stroke-width="4"/><line x1="108" y1="106" x2="252" y2="106" stroke="#f97316" stroke-width="4"/><line x1="180" y1="106" x2="226" y2="50" stroke="#16a34a" stroke-width="4"/><line x1="180" y1="106" x2="134" y2="162" stroke="#16a34a" stroke-width="4"/><circle cx="180" cy="106" r="6" fill="#1d4ed8"/><circle cx="108" cy="106" r="5" fill="#f97316"/><circle cx="252" cy="106" r="5" fill="#f97316"/><circle cx="226" cy="50" r="5" fill="#16a34a"/><circle cx="134" cy="162" r="5" fill="#16a34a"/><text x="170" y="96" font-size="18" font-weight="800">O</text><text x="94" y="96" font-size="18" font-weight="800">A</text><text x="260" y="96" font-size="18" font-weight="800">B</text><text x="232" y="44" font-size="18" font-weight="800">C</text><text x="116" y="181" font-size="18" font-weight="800">D</text></svg>', 'question-media-compact');
    }

    function operationBlocks(params = {}) {
        const left = bounded(params.left, 0, 99, 0);
        const right = bounded(params.right, 1, 99, 1);
        const operator = params.operator === '-' ? '-' : '+';
        const tens = Math.floor(left / 10);
        const ones = left % 10;
        const rightTens = Math.floor(right / 10);
        const rightOnes = right % 10;
        const block = (count, x, y, tone, kind) => Array.from({ length: count }, (_, index) => {
            if (kind === 'ten') {
                const row = Math.floor(index / 5);
                const column = index % 5;
                return `<rect x="${x + column * 19}" y="${y + row * 25}" width="14" height="20" rx="3" fill="${tone}" stroke="#1d4ed8" stroke-width="1.2"/>`;
            }
            const row = Math.floor(index / 5);
            const column = index % 5;
            return `<rect x="${x + column * 16}" y="${y + row * 16}" width="11" height="11" rx="2" fill="${tone}" stroke="#0f766e" stroke-width="1"/>`;
        }).join('');
        const leftBlocks = `${block(tens, 22, 58, '#bfdbfe', 'ten')}${block(ones, 22, 116, '#99f6e4', 'one')}`;
        const rightBlocks = `${block(rightTens, 235, 58, '#fde68a', 'ten')}${block(rightOnes, 235, 116, '#fecaca', 'one')}`;
        const rightLabel = rightTens > 0 ? `${rightTens} chục ${rightOnes ? `và ${rightOnes} đơn vị` : ''}` : `${rightOnes} đơn vị`;
        return wrap(`<svg class="question-media-svg operation-blocks-svg" viewBox="0 0 410 160" role="img" aria-label="Minh họa chục và đơn vị"><text x="20" y="28" font-size="18" font-weight="800" fill="#1e3a8a">${left}</text><text x="194" y="96" font-size="32" font-weight="800" fill="#166534">${operator}</text><text x="234" y="28" font-size="18" font-weight="800" fill="#92400e">${right}</text><text x="22" y="49" font-size="12" font-weight="700" fill="#475569">${tens} chục${ones ? ` và ${ones} đơn vị` : ''}</text><text x="235" y="49" font-size="12" font-weight="700" fill="#475569">${rightLabel}</text><line x1="174" y1="39" x2="174" y2="145" stroke="#cbd5e1" stroke-width="2" stroke-dasharray="5 5"/>${leftBlocks}${rightBlocks}</svg>`, 'question-media-compact');
    }

    function planeShapes(numbers) {
        const triangles = bounded(numbers[0], 0, 12, 3);
        const rectangles = bounded(numbers[1], 0, 12, 3);
        const triShapes = Array.from({ length: triangles }, (_, index) => {
            const x = 26 + (index % 6) * 42;
            const y = 26 + Math.floor(index / 6) * 38;
            return `<polygon points="${x},${y + 30} ${x + 17},${y} ${x + 34},${y + 30}" class="shape-triangle"></polygon>`;
        }).join('');
        const rectShapes = Array.from({ length: rectangles }, (_, index) => {
            const x = 26 + (index % 6) * 42;
            const y = 92 + Math.floor(index / 6) * 34;
            return `<rect x="${x}" y="${y}" width="34" height="24" rx="4" class="shape-rect"></rect>`;
        }).join('');
        return wrap(`<svg class="question-media-svg shapes-svg" viewBox="0 0 300 160" role="img">${triShapes}${rectShapes}</svg>`);
    }

    function solidIcon(x, y, kind) {
        if (kind === 'box') return `<path d="M${x} ${y + 18} L${x + 32} ${y + 6} L${x + 62} ${y + 20} L${x + 31} ${y + 34} Z" class="solid-top"></path><path d="M${x} ${y + 18} L${x + 31} ${y + 34} L${x + 31} ${y + 63} L${x} ${y + 47} Z" class="solid-side"></path><path d="M${x + 31} ${y + 34} L${x + 62} ${y + 20} L${x + 62} ${y + 49} L${x + 31} ${y + 63} Z" class="solid-front"></path>`;
        return `<path d="M${x} ${y + 18} L${x + 23} ${y + 5} L${x + 46} ${y + 18} L${x + 23} ${y + 31} Z" class="solid-top"></path><path d="M${x} ${y + 18} L${x + 23} ${y + 31} L${x + 23} ${y + 56} L${x} ${y + 43} Z" class="solid-side"></path><path d="M${x + 23} ${y + 31} L${x + 46} ${y + 18} L${x + 46} ${y + 43} L${x + 23} ${y + 56} Z" class="solid-front"></path>`;
    }

    function solids(numbers) {
        const cubes = bounded(numbers[0], 0, 8, 2);
        const boxes = bounded(numbers[1], 0, 8, 2);
        const cubeIcons = Array.from({ length: cubes }, (_, index) => solidIcon(24 + (index % 4) * 58, 16 + Math.floor(index / 4) * 70, 'cube')).join('');
        const boxIcons = Array.from({ length: boxes }, (_, index) => solidIcon(24 + (index % 4) * 68, 168 + Math.floor(index / 4) * 70, 'box')).join('');
        return wrap(`<svg class="question-media-svg solids-svg" viewBox="0 0 320 320" role="img">${cubeIcons}${boxIcons}</svg>`, 'question-media-tall');
    }

    function chart(numbers) {
        const first = bounded(numbers[0], 0, 1000000, 8);
        const second = bounded(numbers[1], 0, 1000000, 8);
        const max = Math.max(1, first, second);
        const firstH = 120 * first / max;
        const secondH = 120 * second / max;
        return wrap(`<svg class="question-media-svg chart-svg" viewBox="0 0 300 190" role="img"><line x1="45" y1="155" x2="255" y2="155" class="chart-axis"></line><rect x="78" y="${155 - firstH}" width="54" height="${firstH}" rx="7" class="chart-bar-one"></rect><rect x="170" y="${155 - secondH}" width="54" height="${secondH}" rx="7" class="chart-bar-two"></rect><text x="105" y="${145 - firstH}" class="media-label">${formatStudentNumber(first)}</text><text x="197" y="${145 - secondH}" class="media-label">${formatStudentNumber(second)}</text><text x="105" y="178" class="media-label">1</text><text x="197" y="178" class="media-label">2</text></svg>`);
    }

    function probabilityBag(numbers) {
        const red = bounded(numbers[0], 0, 14, 6);
        const blue = bounded(numbers[1], 0, 14, 3);
        const balls = [];
        for (let index = 0; index < red + blue; index++) {
            const isRed = index < red;
            const local = isRed ? index : index - red;
            const x = 92 + (local % 5) * 30 + (isRed ? 0 : 12);
            const y = 74 + Math.floor(index / 5) * 28;
            balls.push(`<circle cx="${x}" cy="${y}" r="10" class="${isRed ? 'ball-red' : 'ball-blue'}"></circle>`);
        }
        return wrap(`<svg class="question-media-svg bag-svg" viewBox="0 0 300 190" role="img"><path d="M93 45 C105 28, 195 28, 207 45 C196 60, 104 60, 93 45 Z" class="bag-mouth"></path><path d="M72 48 C58 92, 65 162, 150 170 C235 162, 242 92, 228 48 Z" class="bag-body"></path>${balls.join('')}</svg>`);
    }

    function objectCount(question, numbers) {
        const count = bounded(numbers[0], 1, 20, 1);
        const text = String(question.question || '').toLowerCase();
        const isFlower = text.includes('hoa');
        const isStar = text.includes('sao');
        const items = Array.from({ length: count }, (_, index) => {
            const x = 28 + (index % 10) * 29;
            const y = 34 + Math.floor(index / 10) * 62;
            if (isFlower) return `<g transform="translate(${x} ${y})"><circle cx="0" cy="-8" r="7" fill="#ff8bb1"/><circle cx="8" cy="0" r="7" fill="#ff8bb1"/><circle cx="0" cy="8" r="7" fill="#ff8bb1"/><circle cx="-8" cy="0" r="7" fill="#ff8bb1"/><circle cx="0" cy="0" r="5" fill="#ffc800"/></g>`;
            if (isStar) return `<polygon points="${x},${y - 12} ${x + 4},${y - 4} ${x + 13},${y - 3} ${x + 6},${y + 3} ${x + 8},${y + 12} ${x},${y + 7} ${x - 8},${y + 12} ${x - 6},${y + 3} ${x - 13},${y - 3} ${x - 4},${y - 4}" fill="#ffc800"/>`;
            return `<rect x="${x - 10}" y="${y - 10}" width="20" height="20" rx="4" fill="#4da3ff"/>`;
        }).join('');
        return wrap(`<svg class="question-media-svg object-count-svg" viewBox="0 0 320 150" role="img" aria-label="Hình minh họa để đếm">${items}</svg>`);
    }

    function equalGroups(params = {}) {
        const groups = bounded(params.groups, 1, 5, 2);
        const perGroup = bounded(params.per_group, 1, 10, 2);
        const panelWidth = 74;
        const gap = 14;
        const startX = 14;
        const rows = Math.ceil(perGroup / 3);
        const panelHeight = 48 + rows * 20;
        const viewHeight = panelHeight + 32;
        const panels = Array.from({ length: groups }, (_, groupIndex) => {
            const x = startX + groupIndex * (panelWidth + gap);
            const dots = Array.from({ length: perGroup }, (_, itemIndex) => {
                const col = itemIndex % 3;
                const row = Math.floor(itemIndex / 3);
                return `<circle cx="${x + 20 + col * 18}" cy="${52 + row * 19}" r="6" fill="#fbbf24" stroke="#d97706" stroke-width="2"></circle>`;
            }).join('');
            return `<rect x="${x}" y="20" width="${panelWidth}" height="${panelHeight}" rx="10" fill="#eff6ff" stroke="#60a5fa" stroke-width="2"></rect><text x="${x + panelWidth / 2}" y="42" text-anchor="middle" font-size="12" font-weight="800" fill="#1d4ed8">Nhóm ${groupIndex + 1}</text>${dots}`;
        }).join('');
        const viewWidth = startX * 2 + groups * panelWidth + (groups - 1) * gap;
        return wrap(`<svg class="question-media-svg equal-groups-svg" viewBox="0 0 ${viewWidth} ${viewHeight}" role="img" aria-label="${groups} nhóm bằng nhau, mỗi nhóm ${perGroup} phần tử">${panels}</svg>`);
    }

    function hasInlineEmojiIllustration(question) {
        const text = String(question && question.question ? question.question : '');
        return ['🖊️', '✏️', '🖍️', '🍬', '🍎', '🍊', '🍌', '🍓', '🍐', '🍪', '🍦', '⚽', '🌼', '📘', '🎒', '🚗', '🐟', '🦆', '🐰', '🎁', '🥤', '🧢', '🪁', '🧶', '🧱', '🟥', '🟦']
            .some(emoji => text.includes(emoji));
    }

    const FLAT_SHAPE_DEFINITIONS = [
        { kind: 'rectangle', term: 'hình chữ nhật', label: 'hình chữ nhật', color: '#4da3ff' },
        { kind: 'square', term: 'hình vuông', label: 'hình vuông', color: '#7d8cff' },
        { kind: 'circle', term: 'hình tròn', label: 'hình tròn', color: '#65d6a5' },
        { kind: 'triangle', term: 'hình tam giác', label: 'hình tam giác', color: '#ffc800' },
        { kind: 'rhombus', term: 'hình thoi', label: 'hình thoi', color: '#f49ac2' },
        { kind: 'parallelogram', term: 'hình bình hành', label: 'hình bình hành', color: '#a78bfa' },
        { kind: 'trapezoid', term: 'hình thang', label: 'hình thang', color: '#fb923c' },
        { kind: 'hexagon', term: 'hình lục giác', label: 'hình lục giác', color: '#38bdf8' },
        { kind: 'pentagon', term: 'hình ngũ giác', label: 'hình ngũ giác', color: '#facc15' },
        { kind: 'oval', term: 'hình bầu dục', label: 'hình bầu dục', color: '#f472b6' }
    ];

    function lowerQuestionText(question) {
        return String(question && question.question ? question.question : '').toLocaleLowerCase('vi-VN');
    }

    function escapeRegExp(value) {
        return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }

    function requestedFlatShapes(question, params = null) {
        const text = lowerQuestionText(question);
        const requested = Array.isArray(params && params.shapes)
            ? params.shapes
            : (params && params.shape ? [params.shape] : []);
        const fromMetadata = FLAT_SHAPE_DEFINITIONS.filter(shape => requested.includes(shape.kind));
        if (fromMetadata.length > 0) return fromMetadata;
        const fromText = FLAT_SHAPE_DEFINITIONS.filter(shape => text.includes(shape.term));
        if (fromText.length > 0) return fromText;
        return params && params.type === 'flat_shapes'
            ? FLAT_SHAPE_DEFINITIONS.filter(shape => ['circle', 'square', 'triangle'].includes(shape.kind))
            : [];
    }

    function requestedSolidShape(question, params = null) {
        const text = lowerQuestionText(question);
        const fromMetadata = params && typeof params.shape === 'string' ? params.shape : null;
        if (['cube', 'cuboid', 'sphere', 'cylinder', 'cone', 'pyramid'].includes(fromMetadata)) return fromMetadata;
        if (params && params.type === 'solid_shape' && !fromMetadata && !text.includes('kh')) return 'cube';
        if (text.includes('khối trụ')) return 'cylinder';
        if (text.includes('khối nón')) return 'cone';
        if (text.includes('khối chóp')) return 'pyramid';
        if (text.includes('khối cầu')) return 'sphere';
        if (text.includes('khối hộp chữ nhật')) return 'cuboid';
        if (text.includes('khối lập phương')) return 'cube';
        return null;
    }

    function namedShapeCount(text, shape) {
        const matcher = new RegExp(`(\\d+)\\s+${escapeRegExp(shape.term)}`, 'iu');
        const match = text.match(matcher);
        return match ? bounded(match[1], 0, 12, 1) : 1;
    }

    function flatShapeSvg(shape, x, y) {
        switch (shape.kind) {
            case 'rectangle': return `<rect x="${x - 24}" y="${y - 15}" width="48" height="30" rx="3" fill="${shape.color}"/>`;
            case 'square': return `<rect x="${x - 16}" y="${y - 16}" width="32" height="32" rx="3" fill="${shape.color}"/>`;
            case 'circle': return `<circle cx="${x}" cy="${y}" r="16" fill="${shape.color}"/>`;
            case 'triangle': return `<polygon points="${x},${y - 18} ${x + 18},${y + 16} ${x - 18},${y + 16}" fill="${shape.color}"/>`;
            case 'rhombus': return `<polygon points="${x},${y - 19} ${x + 23},${y} ${x},${y + 19} ${x - 23},${y}" fill="${shape.color}"/>`;
            case 'parallelogram': return `<polygon points="${x - 22},${y - 15} ${x + 22},${y - 15} ${x + 13},${y + 15} ${x - 31},${y + 15}" fill="${shape.color}"/>`;
            case 'trapezoid': return `<polygon points="${x - 14},${y - 16} ${x + 14},${y - 16} ${x + 25},${y + 16} ${x - 25},${y + 16}" fill="${shape.color}"/>`;
            case 'hexagon': return `<polygon points="${x - 18},${y - 15} ${x + 18},${y - 15} ${x + 28},${y} ${x + 18},${y + 15} ${x - 18},${y + 15} ${x - 28},${y}" fill="${shape.color}"/>`;
            case 'pentagon': return `<polygon points="${x},${y - 20} ${x + 19},${y - 6} ${x + 12},${y + 18} ${x - 12},${y + 18} ${x - 19},${y - 6}" fill="${shape.color}"/>`;
            case 'oval': return `<ellipse cx="${x}" cy="${y}" rx="25" ry="15" fill="${shape.color}"/>`;
            default: return '';
        }
    }

    function shapeGrid(question, numbers) {
        const rows = bounded(numbers[0], 1, 8, 2);
        const columns = bounded(numbers[1], 1, 8, 2);
        const size = Math.min(42, Math.floor(240 / Math.max(rows, columns)));
        const width = columns * size;
        const height = rows * size;
        const startX = (300 - width) / 2;
        const startY = (150 - height) / 2;
        const cells = Array.from({ length: rows * columns }, (_, index) => {
            const row = Math.floor(index / columns);
            const column = index % columns;
            return `<rect x="${startX + column * size}" y="${startY + row * size}" width="${size}" height="${size}" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>`;
        }).join('');
        return wrap(`<svg class="question-media-svg flat-shapes-svg" viewBox="0 0 300 150" role="img" aria-label="Lưới ô vuông ${rows} hàng ${columns} cột">${cells}</svg>`);
    }

    function solidShape(question, params = null) {
        const kind = requestedSolidShape(question, params);
        if (kind === 'sphere') return wrap('<svg class="question-media-svg solid-shape-svg" viewBox="0 0 180 130" role="img" aria-label="Khối cầu"><circle cx="90" cy="65" r="42" fill="#69b7ff"/><ellipse cx="76" cy="49" rx="16" ry="10" fill="#dff3ff" opacity=".8"/></svg>');
        if (kind === 'cuboid') return wrap(`<svg class="question-media-svg solid-shape-svg" viewBox="0 0 180 130" role="img" aria-label="Khối hộp chữ nhật">${solidIcon(48, 28, 'box')}</svg>`);
        if (kind === 'cylinder') return wrap('<svg class="question-media-svg solid-shape-svg" viewBox="0 0 180 130" role="img" aria-label="Khối trụ"><ellipse cx="90" cy="31" rx="33" ry="13" fill="#bfdbfe" stroke="#2563eb" stroke-width="3"/><path d="M57 31 V94 C57 111 123 111 123 94 V31" fill="#60a5fa" stroke="#2563eb" stroke-width="3"/><ellipse cx="90" cy="94" rx="33" ry="13" fill="#3b82f6" stroke="#2563eb" stroke-width="3"/><path d="M57 31 C57 48 123 48 123 31" fill="none" stroke="#2563eb" stroke-width="3"/></svg>');
        if (kind === 'cone') return wrap('<svg class="question-media-svg solid-shape-svg" viewBox="0 0 180 130" role="img" aria-label="Khối nón"><path d="M90 18 L50 96 C59 113 121 113 130 96 Z" fill="#fb923c" stroke="#c2410c" stroke-width="3"/><ellipse cx="90" cy="96" rx="40" ry="14" fill="#fdba74" stroke="#c2410c" stroke-width="3"/></svg>');
        if (kind === 'pyramid') return wrap('<svg class="question-media-svg solid-shape-svg" viewBox="0 0 180 130" role="img" aria-label="Khối chóp"><polygon points="90,18 45,96 132,96" fill="#c4b5fd" stroke="#6d28d9" stroke-width="3"/><path d="M90 18 L112 73 L132 96 M112 73 L45 96" fill="none" stroke="#6d28d9" stroke-width="3"/><path d="M45 96 L68 111 L145 111 L132 96" fill="#a78bfa" stroke="#6d28d9" stroke-width="3"/></svg>');
        if (kind === 'cube') return wrap(`<svg class="question-media-svg solid-shape-svg" viewBox="0 0 180 130" role="img" aria-label="Khối lập phương">${solidIcon(62, 28, 'cube')}</svg>`);
        return '';
    }

    function flatShapes(question, numbers, params = null) {
        const text = lowerQuestionText(question);
        const shapes = requestedFlatShapes(question, params);
        if (shapes.length === 0) return '';
        if (text.includes('lưới') || (text.includes('hàng') && text.includes('cột'))) return shapeGrid(question, numbers);

        const groups = shapes.map(shape => ({ shape, count: namedShapeCount(text, shape) }));
        const maxCount = Math.max(...groups.map(group => group.count));
        const height = Math.max(100, groups.length * (maxCount > 6 ? 105 : 72) + 26);
        const items = groups.map((group, groupIndex) => {
            const perRow = 6;
            const startY = 37 + groupIndex * (maxCount > 6 ? 105 : 72);
            const icons = Array.from({ length: group.count }, (_, index) => {
                const x = 38 + (index % perRow) * 46;
                const y = startY + Math.floor(index / perRow) * 40;
                return flatShapeSvg(group.shape, x, y);
            }).join('');
            const label = groups.length > 1 ? `<text x="286" y="${startY + 5}" text-anchor="end" class="media-label">${group.shape.label}</text>` : '';
            return `${icons}${label}`;
        }).join('');
        return wrap(`<svg class="question-media-svg flat-shapes-svg" viewBox="0 0 320 ${height}" role="img" aria-label="Hình minh họa hình học">${items}</svg>`);
    }

    function rulerLength(numbers, params = {}) {
        const start = Object.prototype.hasOwnProperty.call(params, 'start')
            ? bounded(params.start, 0, 9, 0)
            : 0;
        const length = Object.prototype.hasOwnProperty.call(params, 'length')
            ? bounded(params.length, 1, 10 - start, 8)
            : bounded(numbers[0], 1, 10 - start, 8);
        const marks = Array.from({ length: 11 }, (_, index) => `<line x1="${35 + index * 25}" y1="74" x2="${35 + index * 25}" y2="${index % 5 === 0 ? 98 : 88}" stroke="#2563eb" stroke-width="2"/><text x="${31 + index * 25}" y="112" font-size="11" fill="#1e3a8a">${index}</text>`).join('');
        return wrap(`<svg class="question-media-svg ruler-svg" viewBox="0 0 320 130" role="img" aria-label="Thước đo độ dài"><rect x="35" y="72" width="250" height="28" rx="4" fill="#fef3c7" stroke="#f59e0b"/><rect x="${35 + start * 25}" y="42" width="${Math.min(250, length * 25)}" height="16" rx="8" fill="#ef4444"/>${marks}</svg>`);
    }

    function hiddenCellsBarModel(numbers) {
        const total = bounded(numbers[0], 1, 12, 4);
        const hidden = bounded(numbers[1], 0, total, 2);
        const cells = Array.from({ length: total }, (_, index) => {
            const x = 34 + index * 23;
            const isHidden = index >= total - hidden;
            return `<rect x="${x}" y="45" width="19" height="32" rx="3" fill="${isHidden ? '#cbd5e1' : '#60a5fa'}" stroke="#2563eb" stroke-width="2"/>${isHidden ? `<line x1="${x + 3}" y1="48" x2="${x + 16}" y2="74" stroke="#64748b" stroke-width="2"/>` : ''}`;
        }).join('');
        return wrap(`<svg class="question-media-svg bar-model-svg" viewBox="0 0 320 120" role="img" aria-label="Sơ đồ ô có phần bị che">${cells}</svg>`);
    }

    function barModel(question, numbers) {
        const text = lowerQuestionText(question);
        if (text.includes('bar model') && text.includes('che') && text.includes('ô')) return hiddenCellsBarModel(numbers);
        const first = bounded(numbers[0], 1, 12, 4);
        const second = bounded(numbers[1], 0, 12, 2);
        const unit = 18;
        return wrap(`<svg class="question-media-svg bar-model-svg" viewBox="0 0 320 130" role="img" aria-label="Sơ đồ đoạn thẳng"><text x="18" y="45" font-size="14" fill="#1e3a8a">A</text><rect x="42" y="28" width="${first * unit}" height="24" rx="4" fill="#60a5fa"/><text x="18" y="95" font-size="14" fill="#1e3a8a">B</text><rect x="42" y="78" width="${Math.max(1, first - second) * unit}" height="24" rx="4" fill="#86efac"/><line x1="${42 + Math.max(1, first - second) * unit}" y1="90" x2="${42 + first * unit}" y2="90" stroke="#ef4444" stroke-width="3"/><text x="${45 + first * unit}" y="95" font-size="13" fill="#b91c1c">?</text></svg>`);
    }

    function numberGrid(params) {
        if (!Array.isArray(params.values) || params.values.length < 1 || !isIntegerInRange(params.columns, 2, 10)) return '';
        const values = params.values;
        const columns = Number(params.columns);
        const hiddenIndexes = new Set(Array.isArray(params.hidden_indexes) ? params.hidden_indexes.map(Number) : []);
        if (values.some((value, index) => !hiddenIndexes.has(index) && !Number.isFinite(Number(value)))) return '';
        const labels = values.map((value, index) => hiddenIndexes.has(index) ? '?' : formatStudentNumber(value));
        const longestLabel = Math.max(...labels.map(label => label.length));
        // Two-number comparison cards need enough room for four- and five-digit values.
        // Dense number tables retain the compact cells needed to fit every column on screen.
        const cell = columns <= 4 ? Math.min(126, Math.max(52, 22 + longestLabel * 16)) : 42;
        const fontSize = columns <= 4
            ? (longestLabel >= 7 ? 19 : (longestLabel >= 5 ? 21 : (longestLabel >= 4 ? 23 : 25)))
            : 20;
        const columnGap = values.length === 2 && columns === 2 ? 18 : 12;
        const rowGap = 12;
        const rows = Math.ceil(values.length / columns);
        const width = columns * cell + Math.max(0, columns - 1) * columnGap + 20;
        const height = rows * cell + Math.max(0, rows - 1) * rowGap + 20;
        const cells = values.map((value, index) => {
            const column = index % columns;
            const row = Math.floor(index / columns);
            const x = 10 + column * (cell + columnGap);
            const y = 10 + row * (cell + rowGap);
            const hidden = hiddenIndexes.has(index);
            return `<rect x="${x}" y="${y}" width="${cell}" height="${cell}" rx="${Math.max(5, Math.round(cell / 8))}" fill="${hidden ? '#fde68a' : '#dbeafe'}" stroke="#2563eb" stroke-width="2.4"/><text x="${x + cell / 2}" y="${y + cell * 0.63}" text-anchor="middle" font-size="${fontSize}" font-weight="800" fill="#17324d">${hidden ? '?' : labels[index]}</text>`;
        }).join('');
        return wrap(`<svg class="question-media-svg number-grid-svg" viewBox="0 0 ${width} ${height}" role="img" aria-label="Bảng số có ô cần điền">${cells}</svg>`);
    }

    function placeValueBlocks(params) {
        const tens = bounded(params.tens, 1, 9, 1);
        const ones = bounded(params.ones, 0, 9, 0);
        const rodWidth = 22;
        const rodGap = 8;
        const rodStart = 24;
        const segmentHeight = 12;
        const rods = Array.from({ length: tens }, (_, rodIndex) => Array.from({ length: 10 }, (_, segmentIndex) => {
            const x = rodStart + rodIndex * (rodWidth + rodGap);
            const y = 42 + segmentIndex * segmentHeight;
            return `<rect x="${x}" y="${y}" width="${rodWidth}" height="${segmentHeight - 1}" rx="2" fill="#60a5fa" stroke="#1d4ed8" stroke-width="1.2"/>`;
        }).join('')).join('');
        const onesStart = Math.max(170, rodStart + tens * (rodWidth + rodGap) + 32);
        const onesBlocks = Array.from({ length: ones }, (_, index) => {
            const column = index % 3;
            const row = Math.floor(index / 3);
            const x = onesStart + column * 27;
            const y = 58 + row * 27;
            return `<rect x="${x}" y="${y}" width="21" height="21" rx="3" fill="#facc15" stroke="#ca8a04" stroke-width="1.6"/>`;
        }).join('');
        const width = Math.max(300, onesStart + 92);
        return wrap(`<svg class="question-media-svg place-value-svg" viewBox="0 0 ${width} 180" role="img" aria-label="${tens} chục và ${ones} đơn vị"><text x="${rodStart}" y="25" font-size="16" font-weight="700" fill="#1e3a8a">Chục</text><text x="${onesStart}" y="25" font-size="16" font-weight="700" fill="#92400e">Đơn vị</text><line x1="${onesStart - 18}" y1="36" x2="${onesStart - 18}" y2="160" stroke="#cbd5e1" stroke-width="2"/>${rods}${onesBlocks}</svg>`);
    }

    function placeValueThousands(params) {
        const count = (value, maximum) => Math.max(0, Math.min(maximum, Number.parseInt(value, 10) || 0));
        const thousands = count(params.thousands, 1);
        const hundreds = count(params.hundreds, 9);
        const tens = count(params.tens, 9);
        const ones = count(params.ones, 9);
        const thousandBlock = thousands ? `<rect x="24" y="50" width="74" height="74" rx="9" fill="#c4b5fd" stroke="#7c3aed" stroke-width="3"/><text x="61" y="94" text-anchor="middle" font-size="16" font-weight="800" fill="#5b21b6">1000</text>` : '';
        const hundredBlocks = Array.from({ length: hundreds }, (_, index) => {
            const x = 137 + (index % 3) * 38;
            const y = 50 + Math.floor(index / 3) * 38;
            return `<rect x="${x}" y="${y}" width="31" height="31" rx="4" fill="#93c5fd" stroke="#2563eb" stroke-width="2"/><text x="${x + 15.5}" y="${y + 21}" text-anchor="middle" font-size="10" font-weight="800" fill="#1e3a8a">100</text>`;
        }).join('');
        const tenRods = Array.from({ length: tens }, (_, index) => {
            const x = 280 + (index % 3) * 27;
            const y = 50 + Math.floor(index / 3) * 42;
            return Array.from({ length: 5 }, (_, segment) => `<rect x="${x}" y="${y + segment * 7}" width="20" height="6" rx="1" fill="#5eead4" stroke="#0f766e" stroke-width="1"/>`).join('');
        }).join('');
        const oneBlocks = Array.from({ length: ones }, (_, index) => {
            const x = 402 + (index % 3) * 27;
            const y = 58 + Math.floor(index / 3) * 27;
            return `<rect x="${x}" y="${y}" width="20" height="20" rx="3" fill="#facc15" stroke="#ca8a04" stroke-width="1.5"/>`;
        }).join('');
        return wrap(`<svg class="question-media-svg place-value-thousands-svg" viewBox="0 0 500 180" role="img" aria-label="Place-value blocks"><text x="24" y="30" font-size="14" font-weight="800" fill="#5b21b6">Ngh&#236;n</text><text x="137" y="30" font-size="14" font-weight="800" fill="#1e3a8a">Tr&#259;m</text><text x="280" y="30" font-size="14" font-weight="800" fill="#0f766e">Ch&#7909;c</text><text x="402" y="30" font-size="14" font-weight="800" fill="#92400e">&#272;&#417;n v&#7883;</text><line x1="115" y1="38" x2="115" y2="162" stroke="#cbd5e1" stroke-width="2"/><line x1="255" y1="38" x2="255" y2="162" stroke="#cbd5e1" stroke-width="2"/><line x1="378" y1="38" x2="378" y2="162" stroke="#cbd5e1" stroke-width="2"/>${thousandBlock}${hundredBlocks}${tenRods}${oneBlocks}</svg>`);
    }

    function placeValueCompare(params) {
        const drawGroup = (offset, label, tens, ones, color, border) => {
            const safeTens = bounded(tens, 1, 9, 1);
            const safeOnes = bounded(ones, 0, 9, 0);
            const rods = Array.from({ length: safeTens }, (_, rodIndex) => Array.from({ length: 10 }, (_, segmentIndex) => {
                const x = offset + rodIndex * 17;
                const y = 48 + segmentIndex * 10;
                return `<rect x="${x}" y="${y}" width="13" height="9" rx="1.5" fill="${color}" stroke="${border}" stroke-width=".8"/>`;
            }).join('')).join('');
            const onesStart = offset + 158;
            const blocks = Array.from({ length: safeOnes }, (_, index) => {
                const column = index % 3;
                const row = Math.floor(index / 3);
                return `<rect x="${onesStart + column * 18}" y="${55 + row * 18}" width="14" height="14" rx="2" fill="#facc15" stroke="#a16207" stroke-width="1"/>`;
            }).join('');
            return `<rect x="${offset - 12}" y="16" width="224" height="148" rx="10" fill="#f8fafc" stroke="#cbd5e1" stroke-width="2"/><text x="${offset}" y="38" font-size="18" font-weight="700" fill="#17324d">${label}</text>${rods}${blocks}`;
        };
        const leftTens = params.left_tens ?? 1;
        const leftOnes = params.left_ones ?? 0;
        const rightTens = params.right_tens ?? 1;
        const rightOnes = params.right_ones ?? 0;
        const leftLabel = String(params.left_label ?? 'Số thứ nhất');
        const rightLabel = String(params.right_label ?? 'Số thứ hai');
        return wrap(`<svg class="question-media-svg place-value-compare-svg" viewBox="0 0 520 180" role="img" aria-label="Hai số biểu diễn bằng chục và đơn vị">${drawGroup(26, leftLabel, leftTens, leftOnes, '#60a5fa', '#1d4ed8')}${drawGroup(278, rightLabel, rightTens, rightOnes, '#86efac', '#15803d')}</svg>`);
    }

    function lengthCompare(params) {
        const leftLabel = String(params.left_label || 'Đoạn màu xanh');
        const rightLabel = String(params.right_label || 'Đoạn màu cam');
        const leftLength = bounded(params.left_length, 1, 10, 6);
        const rightLength = bounded(params.right_length, 1, 10, 4);
        const scale = 22;
        const labelWidth = 122;
        const bar = (y, length, fill, stroke, label) => `<text x="10" y="${y + 17}" font-size="14" font-weight="700" fill="#334155">${label}</text><line x1="${labelWidth}" y1="${y + 13}" x2="${labelWidth + length * scale}" y2="${y + 13}" stroke="${stroke}" stroke-width="14" stroke-linecap="round"/><circle cx="${labelWidth}" cy="${y + 13}" r="4" fill="${fill}"/><circle cx="${labelWidth + length * scale}" cy="${y + 13}" r="4" fill="${fill}"/>`;
        return wrap(`<svg class="question-media-svg length-compare-svg" viewBox="0 0 370 120" role="img" aria-label="Hai đoạn thẳng để so sánh độ dài">${bar(24, leftLength, '#22c55e', '#15803d', leftLabel)}${bar(74, rightLength, '#fb923c', '#c2410c', rightLabel)}</svg>`);
    }

    function sceneObject(kind, x, y) {
        if (kind === 'box') return `<rect x="${x}" y="${y + 8}" width="42" height="34" rx="4" fill="#fbbf24" stroke="#b45309" stroke-width="2"/><path d="M${x} ${y + 18} L${x + 21} ${y + 5} L${x + 42} ${y + 18} M${x + 21} ${y + 5} V${y + 34}" fill="none" stroke="#b45309" stroke-width="2"/>`;
        if (kind === 'book') return `<rect x="${x}" y="${y}" width="46" height="28" rx="3" fill="#60a5fa" stroke="#1d4ed8" stroke-width="2"/><line x1="${x + 8}" y1="${y + 8}" x2="${x + 38}" y2="${y + 8}" stroke="#dbeafe" stroke-width="2"/>`;
        if (kind === 'pencil') return `<path d="M${x} ${y + 16} L${x + 44} ${y + 2} L${x + 51} ${y + 9} L${x + 7} ${y + 23} Z" fill="#facc15" stroke="#a16207" stroke-width="2"/><path d="M${x + 44} ${y + 2} L${x + 54} ${y} L${x + 51} ${y + 9} Z" fill="#f3f4f6" stroke="#64748b" stroke-width="2"/>`;
        if (kind === 'ball') return `<circle cx="${x + 18}" cy="${y + 18}" r="18" fill="#fb7185" stroke="#be123c" stroke-width="2"/><path d="M${x + 5} ${y + 7} Q${x + 18} ${y + 18} ${x + 31} ${y + 7} M${x + 5} ${y + 29} Q${x + 18} ${y + 18} ${x + 31} ${y + 29}" fill="none" stroke="#fff" stroke-width="2"/>`;
        if (kind === 'bag') return `<rect x="${x}" y="${y + 10}" width="40" height="38" rx="8" fill="#a78bfa" stroke="#6d28d9" stroke-width="2"/><path d="M${x + 10} ${y + 10} Q${x + 20} ${y - 4} ${x + 30} ${y + 10}" fill="none" stroke="#6d28d9" stroke-width="4"/>`;
        if (kind === 'chair') return `<rect x="${x + 10}" y="${y + 17}" width="36" height="9" rx="2" fill="#c08457" stroke="#7c3f16" stroke-width="2"/><rect x="${x + 10}" y="${y}" width="9" height="26" rx="2" fill="#d6a46c" stroke="#7c3f16" stroke-width="2"/><path d="M${x + 14} ${y + 26} V${y + 48} M${x + 42} ${y + 26} V${y + 48}" stroke="#7c3f16" stroke-width="3"/>`;
        if (kind === 'cat') return `<circle cx="${x + 23}" cy="${y + 23}" r="19" fill="#f59e0b" stroke="#b45309" stroke-width="2"/><path d="M${x + 8} ${y + 11} L${x + 12} ${y - 2} L${x + 20} ${y + 7} M${x + 27} ${y + 7} L${x + 35} ${y - 2} L${x + 39} ${y + 11}" fill="#f59e0b" stroke="#b45309" stroke-width="2"/><circle cx="${x + 17}" cy="${y + 22}" r="2" fill="#172554"/><circle cx="${x + 29}" cy="${y + 22}" r="2" fill="#172554"/><path d="M${x + 20} ${y + 31} Q${x + 23} ${y + 34} ${x + 26} ${y + 31}" fill="none" stroke="#7c2d12" stroke-width="2"/>`;
        return `<rect x="${x}" y="${y}" width="36" height="36" rx="5" fill="#94a3b8"/>`;
    }

    function spatialScene(params) {
        const left = params.left_object || 'book';
        const right = params.right_object || 'pencil';
        const relation = params.relation || 'left';
        const layouts = {
            left: { marker: 'Bên trái', first: [88, 92], second: [220, 92], line: 'M145 105 H210' },
            right: { marker: 'Bên phải', first: [220, 92], second: [88, 92], line: 'M210 105 H145' },
            above: { marker: 'Ở trên', first: [160, 45], second: [160, 112], line: 'M180 82 V106' },
            below: { marker: 'Ở dưới', first: [160, 122], second: [160, 56], line: 'M180 112 V82' },
            front: { marker: 'Ở trước', first: [172, 109], second: [150, 67], line: 'M174 100 V83' },
            behind: { marker: 'Ở sau', first: [150, 67], second: [172, 109], line: 'M186 83 V100' }
        };
        const layout = layouts[relation] || layouts.left;
        return wrap(`<svg class="question-media-svg spatial-scene-svg" viewBox="0 0 360 190" role="img" aria-label="Bối cảnh bàn học có vị trí đồ vật"><rect x="36" y="76" width="288" height="66" rx="10" fill="#f5c98a" stroke="#9a5c24" stroke-width="3"/><rect x="58" y="142" width="18" height="32" fill="#9a5c24"/><rect x="284" y="142" width="18" height="32" fill="#9a5c24"/>${sceneObject(left, layout.first[0], layout.first[1])}${sceneObject(right, layout.second[0], layout.second[1])}<path d="${layout.line}" stroke="#0f766e" stroke-width="3" marker-end="url(#scene-arrow)"/><text x="180" y="28" text-anchor="middle" font-size="16" font-weight="700" fill="#0f766e">${layout.marker}</text><defs><marker id="scene-arrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#0f766e"/></marker></defs></svg>`);
    }

    function directionMap(params) {
        const size = bounded(params.grid_size, 3, 5, 3);
        const start = params.start || { row: size - 1, column: 0 };
        const moves = Array.isArray(params.moves) ? params.moves : [{ command: 'straight', steps: 2 }, { command: 'left', steps: 1 }];
        const cell = 48;
        let row = bounded(start.row, 0, size - 1, size - 1);
        let column = bounded(start.column, 0, size - 1, 0);
        let direction = 0;
        const vectors = [[0, 1], [-1, 0], [0, -1], [1, 0]];
        const points = [[column, row]];
        moves.forEach(move => {
            if (move.command === 'left') direction = (direction + 1) % 4;
            if (move.command === 'right') direction = (direction + 3) % 4;
            const steps = bounded(move.steps, 1, size, 1);
            for (let index = 0; index < steps; index++) {
                column = bounded(column + vectors[direction][1], 0, size - 1, column);
                row = bounded(row + vectors[direction][0], 0, size - 1, row);
                points.push([column, row]);
            }
        });
        const cells = Array.from({ length: size * size }, (_, index) => {
            const currentRow = Math.floor(index / size);
            const currentColumn = index % size;
            return `<rect x="${10 + currentColumn * cell}" y="${10 + currentRow * cell}" width="${cell}" height="${cell}" fill="#f8fafc" stroke="#94a3b8" stroke-width="2"/>`;
        }).join('');
        const path = points.map(([x, y]) => `${34 + x * cell},${34 + y * cell}`).join(' ');
        const [endColumn, endRow] = points[points.length - 1];
        return wrap(`<svg class="question-media-svg direction-map-svg" viewBox="0 0 ${size * cell + 20} ${size * cell + 20}" role="img" aria-label="Lưới điều hướng"><defs><marker id="map-arrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#2563eb"/></marker></defs>${cells}<polyline points="${path}" fill="none" stroke="#2563eb" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" marker-end="url(#map-arrow)"/><circle cx="${34 + start.column * cell}" cy="${34 + start.row * cell}" r="10" fill="#22c55e"/><circle cx="${34 + endColumn * cell}" cy="${34 + endRow * cell}" r="10" fill="#f97316"/></svg>`);
    }

    function render(question) {
        const params = parseParams(question);
        if (!params || !params.type) return '';
        const numbers = numbersFrom(question);
        const text = lowerQuestionText(question);
        const flat = requestedFlatShapes(question, params);
        const solid = requestedSolidShape(question, params);

        // Repair only legacy single-shape records at render time: the student sees
        // the illustration requested by the question without changing stored data.
        const isLegacySingleShape = params.type === 'flat_shapes' || params.type === 'solid_shape';
        if (isLegacySingleShape && text.includes('bar model')) return barModel(question, numbers);
        if (isLegacySingleShape && flat.length > 0) return flatShapes(question, numbers, params);
        if (isLegacySingleShape && solid) return solidShape(question, params);
        if (isLegacySingleShape) return '';
        switch (params.type) {
            case 'clock': return clockQuestion(question, numbers, params);
            case 'inline_svg': return inlineSvg(params);
            case 'week_calendar': return weekCalendar(params);
            case 'month_calendar': return monthCalendar(params);
            case 'money_vnd': return moneyQuestion(numbers, params);
            case 'number_line': return numberLine(numbers);
            case 'number_ray': return numberRay(params);
            case 'ten_frame_addition': return tenFrameAddition(params);
            case 'part_whole': return partWhole(params);
            case 'ten_frame_subtraction': return tenFrameSubtraction(params);
            case 'compare_groups': return compareGroups(params);
            case 'balance_compare': return balanceCompare(params);
            case 'measure_container': return measureContainer(params);
            case 'regroup_addition': return regroupAddition(params);
            case 'regroup_two_digit_addition': return regroupTwoDigitAddition(params);
            case 'borrow_subtraction': return borrowSubtraction(params);
            case 'regroup_three_digit_addition': return regroupThreeDigitAddition(params);
            case 'three_digit_operation': return threeDigitOperation(params);
            case 'column_operation': return columnOperation(params);
            case 'column_multiplication': return columnMultiplication(params);
            case 'long_division': return longDivision(params);
            case 'perimeter_shape': return perimeterShape(params);
            case 'area_grid': return areaGrid(params);
            case 'place_value_table': return placeValueTable(params);
            case 'angle_diagram': return angleDiagram(params);
            case 'angle_protractor': return angleProtractor(params, question);
            case 'parallel_perpendicular_lines': return parallelPerpendicularLines(params);
            case 'fraction_model': return fractionModel(params, question);
            case 'bar_chart': return barChart(params);
            case 'rhombus_diagonals': return rhombusDiagonals(params);
            case 'rectangular_prism_model': return rectangularPrismModel(params, question);
            case 'circle_measurement': return circleMeasurement(params, question);
            case 'trapezoid_measurement': return trapezoidMeasurement(params, question);
            case 'triangle_measurement': return triangleMeasurement(params, question);
            case 'rhombus_measurement': return rhombusMeasurement(params, question);
            case 'pie_chart': return pieChart(params, question);
            case 'motion_timeline': return motionTimeline(params, question);
            case 'ruler_millimeter': return rulerMillimeter(params);
            case 'thermometer': return thermometer(params);
            case 'borrow_three_digit_subtraction': return borrowThreeDigitSubtraction(params);
            case 'tally_table': return tallyTable(params);
            case 'pictograph': return pictograph(params);
            case 'geometry_diagram': return geometryDiagramVariant(params);
            case 'midpoint_segment': return midpointSegment(params);
            case 'circle_geometry': return circleGeometry(params);
            case 'operation_blocks': return operationBlocks(params);
            case 'plane_shapes': return planeShapes(numbers);
            case 'solids': return solids(numbers);
            case 'chart': return chart(numbers);
            case 'probability_bag': return probabilityBag(numbers);
            case 'equal_groups': return equalGroups(params);
            // Emoji trong câu đã là hình vật cần đếm; không thêm ô xanh SVG cũ.
            case 'object_count': return hasInlineEmojiIllustration(question) ? '' : objectCount(question, numbers);
            case 'solid_shape': return solidShape(question, params);
            case 'flat_shapes': return flatShapes(question, numbers, params);
            case 'ruler_length': return rulerLength(numbers, params);
            case 'bar_model': return barModel(question, numbers);
            case 'number_grid': return numberGrid(params);
            case 'place_value_blocks': return placeValueBlocks(params);
            case 'place_value_thousands': return placeValueThousands(params);
            case 'place_value_compare': return placeValueCompare(params);
            case 'length_compare': return lengthCompare(params);
            case 'spatial_scene': return spatialScene(params);
            case 'direction_map': return directionMap(params);
            default: return '';
        }
    }

    return { render, validate: validateMediaParams };
})();
