(function (host) {
    'use strict';

    const escaped = (text, index) => {
        let count = 0;
        while (index > 0 && text[--index] === '\\') count++;
        return count % 2 === 1;
    };
    /** A paired dollar is maths only with syntax, a number, or a variable name.
     * Ordinary prose / a price followed by another price remains plain text. */
    function dollarFormula(body) {
        const value = body.trim();
        if (!value) return false;
        if (/[\\^_{}=+*/<>≤≥×÷−-]/u.test(value)) return true;
        if (/\d/u.test(value) && !/\p{L}{2,}/u.test(value)) return true;
        return /^(?:[A-Za-zΑ-ω]|[A-Z]{2,3})(?:['′]|\s*[,;]\s*[A-Za-zΑ-ω])*$/u.test(value);
    }
    /** Tokenize before inserting markup so formulas never get split by styling.
     * Legacy delimiters keep their exact contents, including multiline blocks. */
    function split(value) {
        const text = String(value ?? ''), parts = [];
        let start = 0, index = 0;
        while (index < text.length) {
            let left = '', right = '', display = false;
            if (text.startsWith('\\(', index)) { left = '\\('; right = '\\)'; }
            else if (text.startsWith('\\[', index)) { left = '\\['; right = '\\]'; display = true; }
            else if (text[index] === '$' && !escaped(text,index)) {
                left = text.startsWith('$$',index) ? '$$' : '$'; right = left; display = left === '$$';
            }
            if (!left) { index++; continue; }
            const dollar = left[0] === '$';
            let end = index + left.length;
            for (; end < text.length; end++) {
                if (dollar && /[\r\n]/u.test(text[end])) break;
                if (text.startsWith(right,end) && (!dollar || !escaped(text,end))
                    && (!dollar || (text[end-1] !== '$' && text[end+right.length] !== '$'))) break;
            }
            if (end >= text.length || !text.startsWith(right,end)) { index += left.length; continue; }
            const body = text.slice(index + left.length,end), next = end + right.length;
            // "$2, $3" is a currency list: the apparent closing dollar starts
            // the next price. Do not consume it as a formula delimiter.
            const priceList = left === '$' && /^\d/u.test(text.slice(next)) && /^[\d,.\s]+$/u.test(body);
            if (dollar && (priceList || !dollarFormula(body))) { index = next; continue; }
            if (index > start) parts.push({ text:text.slice(start,index), math:false });
            parts.push({ text:text.slice(index,next), math:true, display,
                normalized:dollar ? (display ? `\\[${body}\\]` : `\\(${body}\\)`) : text.slice(index,next) });
            start = index = next;
        }
        if (start < text.length) parts.push({ text:text.slice(start), math:false });
        return parts;
    }
    const normalize = text => split(text).map(part => part.math ? part.normalized : part.text).join('');
    host.IMATH_MATH = { split, normalize, dollarFormula };
    host.renderMathIn = function renderMathIn(element) {
        if (!element || typeof host.renderMathInElement !== 'function') return;
        const content = element.textContent || '';
        if (!content.includes('\\(') && !content.includes('\\[') && !content.includes('$')) return;
        if (content.includes('$')) {
            const walker = element.ownerDocument.createTreeWalker(element, 4);
            const nodes = [];
            while (walker.nextNode()) nodes.push(walker.currentNode);
            for (const node of nodes) {
                if (!node.nodeValue.includes('$') || node.parentElement?.closest(
                    'script,noscript,style,textarea,pre,code,option,svg,math,math-field,.katex,.katex-display,[contenteditable]')) continue;
                const converted = normalize(node.nodeValue);
                if (converted !== node.nodeValue) node.nodeValue = converted;
            }
        }

        host.renderMathInElement(element, {
            delimiters: [
                { left: '\\(', right: '\\)', display: false },
                { left: '\\[', right: '\\]', display: true }
            ],
            throwOnError: false,
            trust: false,
            ignoredTags: ['script','noscript','style','textarea','pre','code','option','svg','math','math-field'],
            ignoredClasses: ['katex','katex-display']
        });
    };
    if (typeof module !== 'undefined') module.exports = host.IMATH_MATH;
})(typeof window !== 'undefined' ? window : globalThis);
