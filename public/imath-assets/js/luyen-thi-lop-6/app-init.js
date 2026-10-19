
    'use strict';
    (function startStaticPracticeApp(){
      const data=window.IMathGrade6Data,config=window.IMathGrade6Config,engine=window.IMathGrade6Engine;
      if(!data||!config||!engine)throw new Error('Thiếu tệp dữ liệu, cấu hình ma trận hoặc bộ chọn đề.');
      window.IMathGrade6StaticApp=true;
      document.addEventListener('contextmenu',event=>event.preventDefault());
      const startupBankCheck=engine.validateBank(data);
      if(!startupBankCheck.valid){
        const questionList=document.querySelector('#question-list');
        questionList.replaceChildren();
        const warning=document.createElement('article');
        warning.className='panel generation-error';
        const title=document.createElement('h2');
        title.textContent='Hệ thống đã dừng nạp ngân hàng câu hỏi';
        const description=document.createElement('p');
        description.textContent='Dữ liệu có mã không an toàn hoặc sai cấu trúc. Không có nội dung nghi vấn nào được đưa lên giao diện.';
        const details=document.createElement('ul');
        details.className='generation-conflicts';
        startupBankCheck.errors.slice(0,10).forEach(message=>{
          const row=document.createElement('li');
          row.textContent=message;
          details.appendChild(row);
        });
        warning.append(title,description,details);
        questionList.appendChild(warning);
        document.querySelector('#submit-exam').disabled=true;
        document.querySelector('#new-exam').disabled=true;
        return;
      }
      const schools=config.schoolProfiles,topicNames=config.topicLabels,schoolRegions=config.schoolRegions;
      const $=selector=>document.querySelector(selector),$$=selector=>[...document.querySelectorAll(selector)];
      const DRAFT_KEY='imath_luyen_thi_lop6_draft_v3',RECENT_KEY='imath_luyen_thi_lop6_recent_v3',FREQUENCY_KEY='imath_luyen_thi_lop6_frequency_v1';
      const openRegions=new Set();
      let selectedSchool='caugiay',currentFullQuestions=[],currentQuestions=[],userAnswers={},graded=false,activeQuestionNumber=1,examNumber=1,timeLeft=schools.caugiay.time*60,elapsedSeconds=0,timerId=null,lastBuild=null,currentSeed='';
      const fraction=(top,bottom)=>`<span class="math-frac"><span>${top}</span><span>${bottom}</span></span>`;
      const formatMath=value=>String(value).replace(/(\d+)\/(\d+)/g,(_,top,bottom)=>fraction(top,bottom));
      const formatTime=seconds=>`${String(Math.floor(Math.max(0,seconds)/60)).padStart(2,'0')}:${String(Math.max(0,seconds)%60).padStart(2,'0')}`;
      const escapeHtml=value=>String(value).replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
      const labelClass=label=>label==='Khá'?'kha':label==='Giỏi'?'gioi':'chinh-phuc';
      const countBy=(items,key)=>engine.countBy(items,key);

      function readRecent(){try{const value=JSON.parse(localStorage.getItem(RECENT_KEY)||'[]');return Array.isArray(value)?value:[]}catch(error){return []}}
      function rememberRecent(ids){const merged=[...readRecent(),...ids];const unique=[];merged.forEach(id=>{const old=unique.indexOf(id);if(old>=0)unique.splice(old,1);unique.push(id)});localStorage.setItem(RECENT_KEY,JSON.stringify(unique.slice(-60)))}
      function readAppearanceCounts(){
        try{const stored=JSON.parse(localStorage.getItem(FREQUENCY_KEY)||'{}'),counts={};data.questions.forEach(question=>{const value=Number(stored?.[question.id]);counts[question.id]=Number.isFinite(value)&&value>0?Math.floor(value):0});return counts}catch(error){return {}}
      }
      function rememberAppearances(ids){
        try{const counts=readAppearanceCounts();ids.forEach(id=>{if(data.questions.some(question=>question.id===id))counts[id]=(counts[id]||0)+1});localStorage.setItem(FREQUENCY_KEY,JSON.stringify(counts))}catch(error){}
      }
      function setSaveStatus(text,saved=false){const status=$('#save-status');status.textContent=text;status.classList.toggle('saved',saved)}
      function persistState(){
        if(!currentQuestions.length)return;
        try{localStorage.setItem(DRAFT_KEY,JSON.stringify({version:3,bankVersion:data.version,selectedSchool,examNumber,seed:currentSeed,questionIds:currentQuestions.map(q=>q.id),userAnswers,graded,timeLeft,elapsedSeconds,savedAt:Date.now()}));const stamp=new Date().toLocaleTimeString('vi-VN',{hour:'2-digit',minute:'2-digit'});setSaveStatus(`✓ Đã lưu bài làm lúc ${stamp}`,true)}catch(error){setSaveStatus('Không thể lưu trên thiết bị này')}
      }
      function readDraft(){
        try{const draft=JSON.parse(localStorage.getItem(DRAFT_KEY)||'null');if(!draft||draft.version!==3||draft.bankVersion!==data.version||!schools[draft.selectedSchool]||!Array.isArray(draft.questionIds)||draft.questionIds.length!==15)return null;return draft.questionIds.every(id=>data.questions.some(q=>q.id===id))?draft:null}catch(error){return null}
      }
      function applyExamHeader(){const profile=schools[selectedSchool];$('#exam-title').textContent=`Luyện thi vào lớp 6 ${profile.name}`;$('#exam-description').textContent=profile.description;$('#exam-eyebrow').textContent=`Đề luyện số ${String(examNumber).padStart(2,'0')} · 15 câu${currentSeed?` · Seed ${currentSeed}`:''}`;$$('.exam-meta .meta-pill')[0].textContent=`⏱ ${profile.time} phút`}
      function showRailExam(){$('#timer-box').classList.remove('hidden');$('#rail-result-box').classList.add('hidden');$('#submit-exam').classList.remove('hidden');$('#rail-help').textContent='Nên hoàn thành đủ câu trước khi nộp. Có thể để trống câu chưa biết.'}
      function showRailBlocked(){clearInterval(timerId);$('#timer-box').classList.add('hidden');$('#rail-result-box').classList.add('hidden');$('#submit-exam').classList.add('hidden');$('#rail-help').textContent='Ngân hàng chưa đủ mức để ghép đúng ma trận. Xem tab Kiểm duyệt cấu trúc.'}
      function showRailResult(correct){const score=correct/15*10;$('#timer-box').classList.add('hidden');$('#rail-result-box').classList.remove('hidden');$('#rail-score').textContent=`${score.toFixed(1).replace('.',',')} điểm`;$('#rail-correct').textContent=correct;$('#rail-wrong').textContent=15-correct;$('#submit-exam').classList.add('hidden');$('#rail-help').textContent='Ưu tiên mở các câu màu đỏ để xem lời giải và làm lại.'}
      function renderSchoolList(){
        $('#school-list').innerHTML=schoolRegions.map(region=>`<section class="school-region-group"><button class="school-region-toggle" type="button" data-region="${region.id}" aria-expanded="${openRegions.has(region.id)}"><span class="school-region-copy"><b>${region.label}</b><small>${region.keys.length} trường mục tiêu</small></span><span class="school-region-chevron" aria-hidden="true"></span></button><div class="school-region-items" ${openRegions.has(region.id)?'':'hidden'}>${region.keys.map(key=>{const school=schools[key];return `<button class="school-btn ${key===selectedSchool?'active':''}" type="button" data-school="${key}"><span class="school-code">${school.code}</span><span class="school-name"><b>${school.name}</b><small>${school.place}</small><span class="school-focus">${school.focus.map(topic=>`<span>${topicNames[topic]}</span>`).join('')}</span></span><span class="school-arrow" aria-hidden="true"></span></button>`}).join('')}</div></section>`).join('');
        $('#school-picker-name').textContent=schools[selectedSchool].name;
        $$('.school-region-toggle').forEach(button=>button.addEventListener('click',event=>{event.stopPropagation();const region=button.dataset.region,wasOpen=openRegions.has(region);openRegions.clear();if(!wasOpen)openRegions.add(region);renderSchoolList()}));
        $$('.school-btn').forEach(button=>button.addEventListener('click',()=>{if(button.dataset.school===selectedSchool){$('#school-panel').classList.remove('open');$('#mobile-school-toggle').setAttribute('aria-expanded','false');return}selectedSchool=button.dataset.school;examNumber=1;createExam();renderSchoolList();$('#school-panel').classList.remove('open');$('#mobile-school-toggle').setAttribute('aria-expanded','false')}));
      }
      function makeSeed(){return `${selectedSchool}-${String(examNumber).padStart(2,'0')}-${Date.now().toString(36)}`}
      function renderGenerationError(){
        const conflicts=lastBuild?.conflicts||[{message:'Không xác định được nguyên nhân.'}];
        $('#question-list').innerHTML=`<article class="panel generation-error"><span class="panel-kicker">Không tự hạ điều kiện</span><h2>Chưa thể ghép đề 15 câu theo ma trận mới</h2><p>Không có câu nào bị nâng mức hoặc thay thế âm thầm. Hệ thống dừng và báo chính xác phần ngân hàng còn thiếu.</p><ul class="generation-conflicts">${conflicts.map(item=>`<li><b>${escapeHtml(item.code||'XUNG ĐỘT')}</b> · ${escapeHtml(item.message)}</li>`).join('')}</ul></article>`;
      }
      function createExam(seed=makeSeed()){
        clearInterval(timerId);currentSeed=String(seed);const profile=schools[selectedSchool];
        lastBuild=engine.buildExam({bank:data,config,schoolId:selectedSchool,seed:currentSeed,recentQuestionIds:readRecent(),appearanceCounts:readAppearanceCounts()});activeQuestionNumber=1;
        currentFullQuestions=lastBuild.ok?lastBuild.questions:[];currentQuestions=currentFullQuestions.map(question=>engine.toPublicQuestion(question,config));userAnswers={};graded=false;timeLeft=profile.time*60;elapsedSeconds=0;
        applyExamHeader();$('#tab-result').disabled=true;$('#review-list').innerHTML='';
        if(!lastBuild.ok){renderGenerationError();renderQuestionMap();updateProgress();renderAudit();showRailBlocked();showView('exam');return}
        rememberRecent(currentQuestions.map(question=>question.id));rememberAppearances(currentQuestions.map(question=>question.id));
        showRailExam();renderQuestions();renderQuestionMap();updateProgress();renderAudit();showView('exam');startTimer();persistState();
      }
      function restoreDraft(draft){
        selectedSchool=draft.selectedSchool;activeQuestionNumber=1;examNumber=Number(draft.examNumber)||1;currentSeed=draft.seed||`restored-${examNumber}`;
        currentFullQuestions=draft.questionIds.map((id,index)=>({...data.questions.find(q=>q.id===id),position:index+1,groupId:null,sharedStimulusHtml:null}));currentQuestions=currentFullQuestions.map(question=>engine.toPublicQuestion(question,config));userAnswers=draft.userAnswers||{};graded=false;timeLeft=Math.max(0,Number(draft.timeLeft)||schools[selectedSchool].time*60);elapsedSeconds=Math.max(0,Number(draft.elapsedSeconds)||0);lastBuild={ok:true,questions:currentFullQuestions,seed:currentSeed,conflicts:[],validation:engine.validateGeneratedExam(currentFullQuestions,config,[])};
        applyExamHeader();renderSchoolList();renderQuestions();$$('.answer-input').forEach(input=>{input.value=userAnswers[input.dataset.id]||''});$$('.choice-option input').forEach(input=>{input.checked=String(userAnswers[input.dataset.id]||'')===input.value});renderQuestionMap();updateProgress();renderAudit();showRailExam();showView('exam');
        if(draft.graded)submitExam(true);else{startTimer();setSaveStatus('✓ Đã khôi phục bài đang làm',true)}
      }
      function renderAnswerControl(question){
        if(question.answerType==='choice')return `<div class="choice-list">${question.options.map(option=>`<label class="choice-option"><input type="radio" name="answer-${question.id}" data-id="${question.id}" value="${escapeHtml(option.value)}"><span>${option.label}</span></label>`).join('')}</div>`;
        return `<input class="answer-input" id="answer-${question.id}" data-id="${question.id}" type="text" inputmode="decimal" autocomplete="off" placeholder="Nhập kết quả">`;
      }
      function renderQuestions(){
        const seenGroups=new Set();
        $('#question-list').innerHTML=currentQuestions.map(question=>{let stimulus='';if(question.groupId&&!seenGroups.has(question.groupId)){seenGroups.add(question.groupId);stimulus=`<div class="group-stimulus">${question.sharedStimulusHtml}</div>`}return `<article class="panel question-card ${question.number===activeQuestionNumber?'active-question':''}" id="question-${question.number}" data-id="${question.id}" data-number="${question.number}">${stimulus}<div class="question-top"><div class="question-label"><span class="question-number">${question.number}</span><span class="question-level ${labelClass(question.displayLabel)}">${question.displayLabel}</span></div><span class="question-topic">Toán lớp 5</span></div><div class="question-text">${question.promptHtml}</div>${question.illustration?`<figure class="question-figure">${question.illustration.markup}<figcaption>${escapeHtml(question.illustration.alt)}</figcaption></figure>`:''}<div class="answer-zone"><label>Nhập đáp số</label>${renderAnswerControl(question)}<span class="answer-unit">${question.answerUnit||'Không cần ghi đơn vị'}</span><span class="answer-state"></span></div></article>`}).join('');
        $$('.answer-input').forEach(input=>input.addEventListener('input',()=>{userAnswers[input.dataset.id]=input.value;updateProgress();renderQuestionMap();persistState()}));
        $$('.choice-option input').forEach(input=>input.addEventListener('change',()=>{userAnswers[input.dataset.id]=input.value;updateProgress();renderQuestionMap();persistState()}));
      }
      function showQuestion(number,focus=false){
        if(!currentQuestions.length)return;activeQuestionNumber=Math.max(1,Math.min(currentQuestions.length,Number(number)||1));
        $$('.question-card').forEach(card=>card.classList.toggle('active-question',Number(card.dataset.number)===activeQuestionNumber));
        $$('.map-btn').forEach(button=>button.classList.toggle('current',Number(button.dataset.number)===activeQuestionNumber));
        if(focus){const card=$(`#question-${activeQuestionNumber}`);card?.scrollIntoView({behavior:'smooth',block:'center'});setTimeout(()=>card?.querySelector('input:not(:disabled)')?.focus(),250)}
      }
      function renderQuestionMap(results){$('#question-map').innerHTML=currentQuestions.map(question=>{let state=String(userAnswers[question.id]||'').trim()?'answered':'';if(results)state=results[question.id]?.correct?'correct':'wrong';return `<button class="map-btn ${state}" type="button" data-number="${question.number}" aria-label="Đến câu ${question.number}">${question.number}</button>`}).join('');$$('.map-btn').forEach(button=>button.addEventListener('click',()=>{if(graded)showView('exam');setTimeout(()=>showQuestion(Number(button.dataset.number),true),graded?180:0)}));showQuestion(activeQuestionNumber)}
      function updateProgress(){const answered=currentQuestions.filter(question=>String(userAnswers[question.id]||'').trim()).length,total=currentQuestions.length||15;$('#progress-text').textContent=`Đã làm ${answered}/${total} câu`;$('#rail-progress').textContent=`${answered}/${total}`;$('#progress-fill').style.width=`${total?answered/total*100:0}%`}
      function submitExam(auto=false){
        if(graded||currentFullQuestions.length!==15)return;const answered=currentQuestions.filter(question=>String(userAnswers[question.id]||'').trim()).length;if(!auto&&answered<15&&!confirm(`Con mới làm ${answered}/15 câu. Vẫn nộp bài và chấm điểm?`))return;graded=true;clearInterval(timerId);const grade=engine.gradeExam(currentFullQuestions,userAnswers);
        currentQuestions.forEach(question=>{const result=grade.results[question.id],card=document.querySelector(`[data-id="${question.id}"].question-card`);card.classList.add('graded',result.correct?'correct':'wrong');card.querySelectorAll('input').forEach(input=>{input.disabled=true});card.querySelector('.answer-state').textContent=result.correct?'✓ Chính xác':`Đáp án: ${result.answerDisplay}`});renderQuestionMap(grade.results);renderResults(grade);showRailResult(grade.correct);$('#tab-result').disabled=false;persistState();showView('result')
      }
      function renderResults(grade){
        $('#score-value').textContent=grade.score.toFixed(1).replace('.',',');$('#score-ring').style.setProperty('--score-angle',`${grade.correct/15*360}deg`);$('#result-correct').textContent=`${grade.correct}/15`;$('#result-time').textContent=formatTime(elapsedSeconds);$('#result-school').textContent=schools[selectedSchool].short;$('#result-title').textContent=grade.correct>=13?'Kết quả rất tốt!':grade.correct>=10?'Con đang tiến bộ tốt':grade.correct>=7?'Cần củng cố thêm vài dạng':'Hãy xem kỹ lời giải và thử lại';$('#result-message').textContent=`Con làm đúng ${grade.correct} câu. Lời giải chỉ được mở sau khi nộp bài.`;
        $('#review-list').innerHTML=currentQuestions.map(question=>{const result=grade.results[question.id];return `<article class="panel review-card ${result.correct?'correct':'wrong'}"><div class="review-title"><span class="review-icon">${result.correct?'✓':'!'}</span><b>Câu ${question.number}</b><span>${question.displayLabel}</span></div><div class="review-question">${question.promptHtml}</div><div class="review-answer"><span>Con trả lời: <b>${escapeHtml(userAnswers[question.id]?.trim()||'Chưa trả lời')}</b></span><span>Đáp án đúng: <b>${formatMath(result.answerDisplay)}</b></span></div><details ${result.correct?'':'open'}><summary>Xem lời giải từng bước</summary><ol class="solution-steps">${result.solutionSteps.map(step=>`<li>${formatMath(step)}</li>`).join('')}</ol></details></article>`}).join('')
      }
      function auditCurrentExam(){
        const bankCheck=engine.validateBank(data),checks=[];const add=(state,text)=>checks.push({state,text});
        const approvedIds=['pl14','pl15','th15','th16','th17','th18','th19','th20','th21'];
        add(bankCheck.valid?'pass':'fail',bankCheck.valid?'Schema ngân hàng hợp lệ, không trùng ID.':bankCheck.errors.slice(0,3).join(' '));
        const legacyIds=[...Array.from({length:6},(_,index)=>`w${index+1}`),...Array.from({length:12},(_,index)=>`h${index+1}`),...Array.from({length:30},(_,index)=>`o${String(index+1).padStart(2,'0')}`)];
        add(legacyIds.every(id=>data.questions.some(question=>question.id===id))?'pass':'fail',`Giữ nguyên ngân hàng chính thức ${data.questions.length} câu, gồm đủ 48 ID cũ.`);
        const contentApproved=data.questions.filter(question=>question.review?.content?.status==='approved').length;
        const difficultyApproved=data.questions.filter(question=>question.review?.difficulty?.status==='approved').length;
        add(contentApproved===data.questions.length?'pass':'warn',`${contentApproved}/${data.questions.length} câu đã duyệt riêng phần nội dung, đáp án và lời giải.`);
        add(difficultyApproved===data.questions.length?'pass':'warn',`${difficultyApproved}/${data.questions.length} câu đã duyệt riêng phần phân loại độ khó.`);
        const completeSolutions=data.questions.filter(question=>question.scoringRule&&question.answerDisplay&&question.solutionSteps?.length>=2).length;
        add(completeSolutions===data.questions.length?'pass':'fail',`${completeSolutions}/${data.questions.length} câu có đáp án chấm được và lời giải từng bước.`);
        const uniquePrompts=new Set(data.questions.map(question=>question.promptHtml.replace(/<[^>]+>/g,'').replace(/\s+/g,' ').trim().toLowerCase())).size;
        add(uniquePrompts===data.questions.length?'pass':'fail',`${uniquePrompts}/${data.questions.length} nội dung câu hỏi chính thức là duy nhất.`);
        add(data.questions.every(question=>engine.validateIllustration(question.illustration).valid)?'pass':'fail','Hình SVG/CSS vượt qua bộ lọc thẻ và thuộc tính không an toàn.');
        const approvedQuestions=approvedIds.map(id=>data.questions.find(question=>question.id===id));
        add(approvedQuestions.every(Boolean)?'pass':'fail','Đủ 9 ID mới trong ngân hàng chính thức: pl14, pl15, th15–th21.');
        add(approvedQuestions.every(question=>question?.status==='approved'&&question.review?.content?.status==='approved'&&question.review?.difficulty?.status==='approved')?'pass':'fail','Cả 9 câu mới đã được duyệt ở trạng thái chung, nội dung và độ khó.');
        add((data.candidateQuestions||[]).length===0?'pass':'fail','Kho ứng viên đã trống; không còn bản sao của 9 câu mới.');
        const bankCounts=countBy(data.questions,'internalDifficulty'),bankTargets=config.bankTargetsByDifficulty||{};
        const deficits=Object.keys(bankTargets).filter(level=>(bankCounts[level]||0)<(bankTargets[level]||0));
        const deficitText=deficits.map(level=>`${config.difficultyLabels[level]} thiếu ${(bankTargets[level]||0)-(bankCounts[level]||0)} câu`).join('; ');
        add(deficits.length?'warn':'pass',deficits.length?`Ngân hàng còn thiếu: ${deficitText}.`:'Ngân hàng đạt đủ mục tiêu số lượng ở cả 7 mức nội bộ.');
        if(lastBuild?.ok)add(lastBuild.validation?.valid?'pass':'fail','Đề hiện tại vượt qua toàn bộ điều kiện ghép.');
        else (lastBuild?.conflicts||[]).forEach(conflict=>add('fail',conflict.message));
        return {bankCheck,checks};
      }
      function renderAuditQuestionRows(){
        const filter=$('#audit-question-filter')?.value||'all';
        const rows=data.questions.filter(question=>filter==='all'||question.internalDifficulty===filter);
        const reviewPill=status=>`<span class="audit-pill ${escapeHtml(status)}">${escapeHtml(data.labels.statuses[status]||status)}</span>`;
        $('#audit-question-rows').innerHTML=rows.map(question=>`<tr><td>${escapeHtml(question.id)}</td><td>${escapeHtml(config.difficultyLabels[question.internalDifficulty]||question.internalDifficulty)}</td><td>${escapeHtml(question.topicLabel)}</td><td>${escapeHtml(question.templateFamily)}</td><td class="${question.illustration?'audit-ok':''}">${question.illustration?'Có':'—'}</td><td class="${question.solutionSteps?.length>=2?'audit-ok':'audit-missing'}">${question.solutionSteps?.length||0} bước</td><td>${reviewPill(question.review?.content?.status||'draft')}</td><td>${reviewPill(question.review?.difficulty?.status||'draft')}</td></tr>`).join('');
      }
      function renderAudit(){
        const audit=auditCurrentExam(),required=countBy(config.slots,'internalDifficulty'),available=countBy(data.questions.filter(question=>config.constraints.eligibleStatuses.includes(question.status)),'internalDifficulty'),contentApproved=data.questions.filter(question=>question.review?.content?.status==='approved').length,difficultyApproved=data.questions.filter(question=>question.review?.difficulty?.status==='approved').length,officialFigures=data.questions.filter(question=>question.illustration).length;
        $('#audit-summary').innerHTML=`<article class="panel audit-stat"><small>Ngân hàng chính thức</small><b>${data.questions.length}</b><span>dùng ghép đề</span></article><article class="panel audit-stat"><small>Câu có hình</small><b>${officialFigures}</b><span>hình SVG/CSS riêng</span></article><article class="panel audit-stat"><small>Duyệt nội dung</small><b>${contentApproved}/${data.questions.length}</b><span>đã phê duyệt</span></article><article class="panel audit-stat"><small>Duyệt độ khó</small><b>${difficultyApproved}/${data.questions.length}</b><span>đã phê duyệt</span></article>`;
        $('#audit-matrix-note').textContent=`Ngân hàng chính thức có ${data.questions.length} câu đã duyệt. Từng mức bên dưới được đối chiếu trực tiếp với mục tiêu ngân hàng.`;
        $('#audit-levels').innerHTML=Object.keys(config.difficultyLabels).map(level=>{const target=config.bankTargetsByDifficulty[level]||0,current=available[level]||0,perExam=required[level]||0;return `<div class="audit-level-row"><span>${config.difficultyLabels[level]}</span><div class="audit-bar"><i style="width:${Math.min(100,current/Math.max(1,target)*100)}%"></i></div><b>${current}/${target} · đề ${perExam}</b></div>`}).join('');
        $('#audit-checks').innerHTML=audit.checks.map(check=>`<div class="audit-check ${check.state}"><i>${check.state==='pass'?'✓':check.state==='warn'?'!':'×'}</i><span>${escapeHtml(check.text)}</span></div>`).join('');
        $('#audit-blueprints').innerHTML=Object.values(schools).map(profile=>`<tr><td>${profile.short}</td><td>${profile.time} phút</td><td>${profile.focus.map(topic=>topicNames[topic]).join(', ')}</td><td><span class="audit-pill">${profile.benchmarkStatus}</span></td></tr>`).join('');
        renderAuditQuestionRows();
      }
      function showView(view){const views={exam:'#exam-view',result:'#result-view',audit:'#audit-view'},tabs={exam:'#tab-exam',result:'#tab-result',audit:'#tab-audit'};Object.entries(views).forEach(([key,selector])=>$(selector).classList.toggle('hidden',key!==view));Object.entries(tabs).forEach(([key,selector])=>{$(selector).classList.toggle('active',key===view);$(selector).setAttribute('aria-selected',String(key===view))});window.scrollTo({top:0,behavior:'smooth'})}
      function startTimer(){clearInterval(timerId);$('#timer').textContent=formatTime(timeLeft);timerId=setInterval(()=>{timeLeft-=1;elapsedSeconds+=1;$('#timer').textContent=formatTime(timeLeft);if(elapsedSeconds%10===0)persistState();if(timeLeft<=0){clearInterval(timerId);submitExam(true)}},1000)}
      $('#submit-exam').addEventListener('click',()=>submitExam(false));$('#new-exam').addEventListener('click',()=>{if(!graded&&Object.values(userAnswers).some(value=>String(value).trim())&&!confirm('Tạo đề mới sẽ xóa các đáp án đang làm. Tiếp tục?'))return;examNumber+=1;createExam()});$('#tab-exam').addEventListener('click',()=>showView('exam'));$('#tab-result').addEventListener('click',()=>{if(graded)showView('result')});$('#tab-audit').addEventListener('click',()=>{renderAudit();showView('audit')});$('#audit-question-filter').addEventListener('change',renderAuditQuestionRows);$('#mobile-school-toggle').addEventListener('click',()=>{const panel=$('#school-panel'),open=!panel.classList.contains('open');if(open){openRegions.clear();renderSchoolList()}panel.classList.toggle('open',open);$('#mobile-school-toggle').setAttribute('aria-expanded',String(open))});document.addEventListener('click',event=>{if(event.composedPath().some(node=>node?.classList?.contains('school-picker-shell')))return;$('#school-panel').classList.remove('open');$('#mobile-school-toggle').setAttribute('aria-expanded','false')});$('#font-size').addEventListener('click',()=>{const sizes=[16,17.5,19],current=parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--font-size'))||16,next=sizes[(sizes.indexOf(current)+1)%sizes.length];document.documentElement.style.setProperty('--font-size',`${next}px`)});window.addEventListener('beforeunload',()=>{persistState();clearInterval(timerId)});
      const savedDraft=readDraft();if(savedDraft)restoreDraft(savedDraft);else{renderSchoolList();createExam()}
    })();
  
;

    'use strict';
    if(!window.IMathGrade6StaticApp){
    const schools={caugiay:{code:'CG',name:'THCS Cầu Giấy',short:'Cầu Giấy',place:'Hà Nội',time:45,focus:['logic','numbers','geometry'],description:'Bộ câu hỏi cân bằng giữa số học, toán lời văn, hình học và suy luận.'},ams:{code:'AMS',name:'THPT chuyên Hà Nội – Amsterdam',short:'Ams',place:'Hà Nội',time:45,focus:['logic','numbers','work'],description:'Tăng cường suy luận nhiều bước, tính nhanh và các bài toán thử thách.'},ntt:{code:'NTT',name:'THCS & THPT Nguyễn Tất Thành',short:'Nguyễn Tất Thành',place:'Hà Nội',time:45,focus:['ratio','motion','percent'],description:'Chú trọng đọc hiểu dữ kiện, tỉ số, chuyển động và vận dụng thực tế.'},ltv:{code:'LTV',name:'THCS & THPT Lương Thế Vinh',short:'Lương Thế Vinh',place:'Hà Nội',time:45,focus:['numbers','percent','geometry'],description:'Ôn chắc kỹ năng tính toán, phân số, phần trăm và hình học.'},nksp:{code:'NKSP',name:'THCS Năng khiếu ĐHSP',short:'Năng khiếu ĐHSP',place:'Hà Nội',time:50,focus:['logic','motion','work'],description:'Tập trung toán tư duy, chuyển động và bài toán nhiều quan hệ.'},lhp:{code:'LHP',name:'THPT chuyên Lê Hồng Phong',short:'Lê Hồng Phong',place:'Nam Định',time:45,focus:['geometry','ratio','numbers'],description:'Rèn nền tảng nâng cao, hình học, tỉ số và kỹ năng trình bày.'},tdn:{code:'TĐN',name:'THCS và THPT Trần Đại Nghĩa',short:'Trần Đại Nghĩa',place:'TP. Hồ Chí Minh',time:60,focus:['logic','numbers','geometry'],description:'Luyện đánh giá năng lực với câu hỏi tư duy, đọc hiểu dữ kiện và vận dụng tổng hợp.'},tqt1:{code:'TQT1',name:'THCS Trần Quốc Toản 1',short:'Trần Quốc Toản 1',place:'TP. Hồ Chí Minh',time:45,focus:['logic','numbers','percent'],description:'Rèn bài khảo sát đầu vào với số học, logic và các tình huống thực tế.'},nht:{code:'NHT',name:'THCS Nguyễn Hữu Thọ',short:'Nguyễn Hữu Thọ',place:'TP. Hồ Chí Minh',time:45,focus:['ratio','geometry','motion'],description:'Ôn năng lực toán lớp 5, tỉ số, hình học và bài toán chuyển động.'}};
    const fraction=(top,bottom)=>`<span class="math-frac"><span>${top}</span><span>${bottom}</span></span>`;
    const questionBank=window.IMathGrade6Data.questions;
    const examBlueprints=window.IMathGrade6Data.blueprints;
    const defaultBlueprint=window.IMathGrade6Data.defaultBlueprint;
    let selectedSchool='caugiay',currentQuestions=[],userAnswers={},graded=false,examNumber=1,timeLeft=schools[selectedSchool].time*60,elapsedSeconds=0,timerId=null;
    const $=selector=>document.querySelector(selector),$$=selector=>[...document.querySelectorAll(selector)];
    const DRAFT_KEY='imath_luyen_thi_lop6_draft_v2';
    const topicNames={logic:'Logic',numbers:'Số học',geometry:'Hình học',work:'Công việc',ratio:'Tỉ số',motion:'Chuyển động',percent:'Phần trăm',measure:'Đại lượng'};
    const schoolRegions=[{id:'north',label:'Miền Bắc',keys:['caugiay','ams','ntt','ltv','nksp','lhp']},{id:'hcm',label:'TP. Hồ Chí Minh',keys:['tdn','tqt1','nht']}];
    const openRegions=new Set(['north','hcm']);
    const shuffle=values=>values.map(value=>({value,sort:Math.random()})).sort((a,b)=>a.sort-b.sort).map(item=>item.value);
    const levelLabel=level=>({kha:'Khá',gioi:'Giỏi',hsg:'HSG',kho:'Khó','rat-kho':'Rất khó','chinh-phuc':'Chinh phục'})[level]||level;
    const formatTime=seconds=>`${String(Math.floor(Math.max(0,seconds)/60)).padStart(2,'0')}:${String(Math.max(0,seconds)%60).padStart(2,'0')}`;
    const formatMath=value=>String(value).replace(/(\d+)\/(\d+)/g,(_,top,bottom)=>fraction(top,bottom));
    const escapeHtml=value=>String(value).replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));

    function setSaveStatus(text,saved=false){const status=$('#save-status');status.textContent=text;status.classList.toggle('saved',saved)}
    function persistState(){
      if(!currentQuestions.length)return;
      try{localStorage.setItem(DRAFT_KEY,JSON.stringify({version:2,bankVersion:window.IMathGrade6Data.version,selectedSchool,examNumber,questionIds:currentQuestions.map(q=>q.id),userAnswers,graded,timeLeft,elapsedSeconds,savedAt:Date.now()}));const stamp=new Date().toLocaleTimeString('vi-VN',{hour:'2-digit',minute:'2-digit'});setSaveStatus(`✓ Đã lưu bài làm lúc ${stamp}`,true)}catch(error){setSaveStatus('Không thể lưu trên thiết bị này')}
    }
    function readDraft(){
      try{const draft=JSON.parse(localStorage.getItem(DRAFT_KEY)||'null');if(!draft||draft.version!==2||draft.bankVersion!==window.IMathGrade6Data.version||!schools[draft.selectedSchool]||!Array.isArray(draft.questionIds)||draft.questionIds.length!==15)return null;const valid=draft.questionIds.every(id=>questionBank.some(q=>q.id===id));return valid?draft:null}catch(error){return null}
    }
    function applyExamHeader(){const profile=schools[selectedSchool];$('#exam-title').textContent=`Luyện thi vào lớp 6 ${profile.name}`;$('#exam-description').textContent=profile.description;$('#exam-eyebrow').textContent=`Đề luyện số ${String(examNumber).padStart(2,'0')} · 15 câu`;$$('.exam-meta .meta-pill')[0].textContent=`⏱ ${profile.time} phút`}
    function showRailExam(){
      $('#timer-box').classList.remove('hidden');$('#rail-result-box').classList.add('hidden');$('#submit-exam').classList.remove('hidden');$('#rail-help').textContent='Nên hoàn thành đủ câu trước khi nộp. Có thể để trống câu chưa biết.';
    }
    function showRailResult(correct){
      const score=correct/15*10;$('#timer-box').classList.add('hidden');$('#rail-result-box').classList.remove('hidden');$('#rail-score').textContent=`${score.toFixed(1).replace('.',',')} điểm`;$('#rail-correct').textContent=correct;$('#rail-wrong').textContent=15-correct;$('#submit-exam').classList.add('hidden');$('#rail-help').textContent='Ưu tiên mở các câu màu đỏ để xem lời giải và làm lại.';
    }
    function renderSchoolList(){
      $('#school-list').innerHTML=schoolRegions.map(region=>`<section class="school-region-group"><button class="school-region-toggle" type="button" data-region="${region.id}" aria-expanded="${openRegions.has(region.id)}"><span>${region.label}</span><span class="school-region-chevron" aria-hidden="true"></span></button><div class="school-region-items" ${openRegions.has(region.id)?'':'hidden'}>${region.keys.map(key=>{const school=schools[key];return `<button class="school-btn ${key===selectedSchool?'active':''}" type="button" data-school="${key}"><span class="school-code">${school.code}</span><span class="school-name"><b>${school.name}</b><small>${school.place}</small><span class="school-focus">${school.focus.map(topic=>`<span>${topicNames[topic]}</span>`).join('')}</span></span><span class="school-arrow" aria-hidden="true"></span></button>`}).join('')}</div></section>`).join('');
      $$('.school-region-toggle').forEach(button=>button.addEventListener('click',()=>{const region=button.dataset.region;openRegions.has(region)?openRegions.delete(region):openRegions.add(region);renderSchoolList()}));
      $$('.school-btn').forEach(button=>button.addEventListener('click',()=>{if(button.dataset.school===selectedSchool)return;selectedSchool=button.dataset.school;examNumber=1;createExam();renderSchoolList();$('#school-panel').classList.remove('open')}));
    }
    function countBy(items,key){return items.reduce((counts,item)=>{const value=item[key];counts[value]=(counts[value]||0)+1;return counts},{})}
    function getBlueprint(){return examBlueprints[selectedSchool]||defaultBlueprint}
    function buildExamQuestions(){
      const profile=schools[selectedSchool],blueprint=getBlueprint(),levelOrder=['kha','gioi','kho','rat-kho','chinh-phuc'],picked=[],topicCounts={};let originalCount=0;
      levelOrder.forEach(level=>{
        const needed=Number(blueprint.levels[level]||0);
        for(let slot=0;slot<needed;slot++){
          const candidates=questionBank.filter(q=>q.level===level&&!picked.some(item=>item.id===q.id)).map(q=>{
            const targetMatch=q.targets?.includes('all')||q.targets?.includes(selectedSchool),focusMatch=profile.focus.includes(q.topic),needsOriginal=originalCount<blueprint.originalMin;
            const score=(targetMatch?5:0)+(focusMatch?4:0)+(q.sourceType==='tu-bien-soan'&&needsOriginal?6:0)-(topicCounts[q.topic]||0)*1.8+Math.random()*2;
            return {q,score};
          }).sort((a,b)=>b.score-a.score);
          if(!candidates.length)throw new Error(`Không đủ câu mức ${level} cho ma trận ${selectedSchool}.`);
          const chosen=candidates[0].q;picked.push(chosen);topicCounts[chosen.topic]=(topicCounts[chosen.topic]||0)+1;if(chosen.sourceType==='tu-bien-soan')originalCount++;
        }
      });
      if(originalCount<blueprint.originalMin){
        for(const current of picked.filter(q=>q.sourceType==='chon-loc')){
          const replacement=questionBank.find(q=>q.sourceType==='tu-bien-soan'&&q.level===current.level&&!picked.some(item=>item.id===q.id));
          if(!replacement)continue;const index=picked.findIndex(q=>q.id===current.id);picked[index]=replacement;originalCount++;if(originalCount>=blueprint.originalMin)break;
        }
      }
      let diversityGuard=0;
      while(new Set(picked.map(q=>q.topic)).size<blueprint.minTopics&&diversityGuard<20){
        diversityGuard++;const counts=countBy(picked,'topic'),present=new Set(picked.map(q=>q.topic));let changed=false;
        for(const current of picked){
          if((counts[current.topic]||0)<2)continue;
          const replacements=questionBank.filter(q=>q.level===current.level&&!present.has(q.topic)&&!picked.some(item=>item.id===q.id)&&!(current.sourceType==='tu-bien-soan'&&q.sourceType!=='tu-bien-soan'&&originalCount<=blueprint.originalMin));
          if(!replacements.length)continue;const replacement=replacements.sort((a,b)=>Number(b.targets?.includes(selectedSchool))-Number(a.targets?.includes(selectedSchool)))[0],index=picked.findIndex(q=>q.id===current.id);if(current.sourceType!==replacement.sourceType)originalCount+=replacement.sourceType==='tu-bien-soan'?1:-1;picked[index]=replacement;changed=true;break;
        }
        if(!changed)break;
      }
      return levelOrder.flatMap(level=>shuffle(picked.filter(q=>q.level===level))).map((q,index)=>({...q,number:index+1}));
    }
    function createExam(){
      const profile=schools[selectedSchool];currentQuestions=buildExamQuestions();userAnswers={};graded=false;timeLeft=profile.time*60;elapsedSeconds=0;
      applyExamHeader();$('#tab-result').disabled=true;showRailExam();renderQuestions();renderQuestionMap();updateProgress();renderAudit();showView('exam');startTimer();persistState();
    }
    function restoreDraft(draft){
      const savedTime=Number(draft.timeLeft),savedElapsed=Number(draft.elapsedSeconds);selectedSchool=draft.selectedSchool;examNumber=Number(draft.examNumber)||1;currentQuestions=draft.questionIds.map((id,index)=>({...questionBank.find(q=>q.id===id),number:index+1}));userAnswers=draft.userAnswers||{};graded=false;timeLeft=Number.isFinite(savedTime)?Math.max(0,savedTime):schools[selectedSchool].time*60;elapsedSeconds=Number.isFinite(savedElapsed)?Math.max(0,savedElapsed):0;
      applyExamHeader();renderSchoolList();renderQuestions();$$('.answer-input').forEach(input=>{input.value=userAnswers[input.dataset.id]||''});renderQuestionMap();updateProgress();renderAudit();showRailExam();showView('exam');
      if(draft.graded)submitExam(true);else{startTimer();setSaveStatus('✓ Đã khôi phục bài đang làm',true)}
    }
    function renderQuestions(){
      $('#question-list').innerHTML=currentQuestions.map(q=>`<article class="panel question-card" id="question-${q.number}" data-id="${q.id}"><div class="question-top"><div class="question-label"><span class="question-number">${q.number}</span><span class="question-level ${q.level}">${levelLabel(q.level)}</span><span class="question-source">${q.source} · Lớp 5</span></div><span class="question-topic">${q.topicLabel}</span></div><p class="question-text">${q.prompt}</p>${q.figure?`<figure class="question-figure">${q.figure}<figcaption>Hình minh họa theo dữ kiện đề bài</figcaption></figure>`:''}<div class="answer-zone"><label for="answer-${q.id}">Nhập đáp số</label><input class="answer-input" id="answer-${q.id}" data-id="${q.id}" type="text" inputmode="decimal" autocomplete="off" placeholder="Nhập kết quả"><span class="answer-unit">${q.unit||'Không cần ghi đơn vị'}</span><span class="answer-state"></span></div><div class="inline-solution"><b>Lời giải tóm tắt</b><ol>${q.solution.map(step=>`<li>${formatMath(step)}</li>`).join('')}</ol><b>Đáp số: ${formatMath(q.answerText)}</b></div></article>`).join('');
      $$('.answer-input').forEach(input=>input.addEventListener('input',()=>{userAnswers[input.dataset.id]=input.value;updateProgress();renderQuestionMap();persistState()}));
    }
    function renderQuestionMap(results){
      $('#question-map').innerHTML=currentQuestions.map(q=>{let state=userAnswers[q.id]?.trim()?'answered':'';if(results)state=results[q.id]?'correct':'wrong';return `<button class="map-btn ${state}" type="button" data-number="${q.number}" aria-label="Đến câu ${q.number}">${q.number}</button>`}).join('');
      $$('.map-btn').forEach(button=>button.addEventListener('click',()=>{if(graded)showView('exam');setTimeout(()=>document.querySelector(`#question-${button.dataset.number}`).scrollIntoView({behavior:'smooth',block:'center'}),graded?180:0)}));
    }
    function updateProgress(){const answered=currentQuestions.filter(q=>String(userAnswers[q.id]||'').trim()).length;$('#progress-text').textContent=`Đã làm ${answered}/15 câu`;$('#rail-progress').textContent=`${answered}/15`;$('#progress-fill').style.width=`${answered/15*100}%`}
    function parseAnswer(value){let text=String(value||'').trim().toLowerCase().replace(/\s+/g,'').replace(',','.');const mixed=text.match(/^(-?\d+)\+(\d+)\/(\d+)/);if(mixed)return Number(mixed[1])+Number(mixed[2])/Number(mixed[3]);const ratio=text.match(/^(-?[\d.]+)\/([\d.]+)/);if(ratio)return Number(ratio[1])/Number(ratio[2]);const number=text.match(/-?[\d.]+/);return number?Number(number[0]):NaN}
    function isCorrect(q,value){const parsed=parseAnswer(value);return Number.isFinite(parsed)&&Math.abs(parsed-Number(q.answer))<.0005}
    function submitExam(auto=false){
      if(graded)return;const answered=currentQuestions.filter(q=>String(userAnswers[q.id]||'').trim()).length;if(!auto&&answered<15&&!confirm(`Con mới làm ${answered}/15 câu. Vẫn nộp bài và chấm điểm?`))return;graded=true;clearInterval(timerId);const results={};let correct=0;
      currentQuestions.forEach(q=>{results[q.id]=isCorrect(q,userAnswers[q.id]);if(results[q.id])correct++;const card=document.querySelector(`[data-id="${q.id}"].question-card`);card.classList.add('graded',results[q.id]?'correct':'wrong');const input=card.querySelector('.answer-input');input.disabled=true;card.querySelector('.answer-state').textContent=results[q.id]?'✓ Chính xác':`Đáp án: ${q.answerText}`});renderQuestionMap(results);renderResults(results,correct);showRailResult(correct);$('#tab-result').disabled=false;persistState();showView('result');
    }
    function renderResults(results,correct){
      const score=correct/15*10;$('#score-value').textContent=score.toFixed(1).replace('.',',');$('#score-ring').style.setProperty('--score-angle',`${correct/15*360}deg`);$('#result-correct').textContent=`${correct}/15`;$('#result-time').textContent=formatTime(elapsedSeconds);$('#result-school').textContent=schools[selectedSchool].short;$('#result-title').textContent=correct>=13?'Kết quả rất tốt!':correct>=10?'Con đang tiến bộ tốt':correct>=7?'Cần củng cố thêm vài dạng':'Hãy xem kỹ lời giải và thử lại';$('#result-message').textContent=`Con làm đúng ${correct} câu. Các câu chưa đúng đã được đánh dấu để xem lại.`;
      $('#review-list').innerHTML=currentQuestions.map(q=>`<article class="panel review-card ${results[q.id]?'correct':'wrong'}"><div class="review-title"><span class="review-icon">${results[q.id]?'✓':'!'}</span><b>Câu ${q.number}</b><span>${q.source} · ${levelLabel(q.level)}</span></div><p class="review-question">${q.prompt}</p><div class="review-answer"><span>Con trả lời: <b>${escapeHtml(userAnswers[q.id]?.trim()||'Chưa trả lời')}</b></span><span>Đáp án đúng: <b>${formatMath(q.answerText)}</b></span></div><details ${results[q.id]?'':'open'}><summary>Xem lời giải từng bước</summary><ol class="solution-steps">${q.solution.map(step=>`<li>${formatMath(step)}</li>`).join('')}</ol></details></article>`).join('');
    }
    function auditCurrentExam(){
      const blueprint=getBlueprint(),levelCounts=countBy(currentQuestions,'level'),topicCounts=countBy(currentQuestions,'topic'),sourceCounts=countBy(currentQuestions,'sourceType'),ids=currentQuestions.map(q=>q.id),checks=[];
      const add=(ok,text,warning=false)=>checks.push({state:ok?'pass':warning?'warn':'fail',text});
      add(currentQuestions.length===15,`Đủ 15 câu hỏi: ${currentQuestions.length}/15.`);
      add(new Set(ids).size===ids.length,'Không có câu hỏi trùng ID trong đề.');
      const matrixOk=Object.entries(blueprint.levels).every(([level,count])=>(levelCounts[level]||0)===count);add(matrixOk,'Tỷ lệ độ khó khớp ma trận của trường.');
      add((sourceCounts['tu-bien-soan']||0)>=blueprint.originalMin,`Có ${sourceCounts['tu-bien-soan']||0} câu tự biên soạn, yêu cầu tối thiểu ${blueprint.originalMin}.`);
      add(Object.keys(topicCounts).length>=blueprint.minTopics,`Bao phủ ${Object.keys(topicCounts).length} chuyên đề, yêu cầu tối thiểu ${blueprint.minTopics}.`);
      add(currentQuestions.every(q=>q.grade===5),'Tất cả câu hỏi được gắn phạm vi kiến thức lớp 5.');
      add(currentQuestions.every(q=>Number.isFinite(Number(q.answer))&&Array.isArray(q.solution)&&q.solution.length>=2),'Mỗi câu có đáp án số và lời giải ít nhất hai bước.');
      add(currentQuestions.every(q=>!q.requiresFigure||Boolean(q.figure)),'Các câu bắt buộc có hình đều đã gắn hình minh họa.');
      add(false,'Chưa đối chiếu ma trận với thông báo tuyển sinh chính thức của năm học hiện hành.',true);
      return {blueprint,levelCounts,topicCounts,sourceCounts,checks};
    }
    function renderAudit(){
      if(!currentQuestions.length)return;const audit=auditCurrentExam(),bankSources=countBy(questionBank,'sourceType'),figures=questionBank.filter(q=>q.figure).length,levelOrder=['kha','gioi','kho','rat-kho','chinh-phuc'];
      $('#audit-summary').innerHTML=`<article class="panel audit-stat"><small>Ngân hàng thử nghiệm</small><b>${questionBank.length}</b><span>câu lớp 5</span></article><article class="panel audit-stat"><small>Tự biên soạn</small><b>${bankSources['tu-bien-soan']||0}</b><span>câu mới</span></article><article class="panel audit-stat"><small>Chọn lọc</small><b>${bankSources['chon-loc']||0}</b><span>câu từ hai kho</span></article><article class="panel audit-stat"><small>Câu có hình</small><b>${figures}</b><span>hình dựng riêng</span></article>`;
      $('#audit-matrix-note').textContent=`${schools[selectedSchool].name}: ${audit.blueprint.note}`;
      $('#audit-levels').innerHTML=levelOrder.map(level=>{const actual=audit.levelCounts[level]||0,target=audit.blueprint.levels[level]||0;return `<div class="audit-level-row"><span>${levelLabel(level)}</span><div class="audit-bar"><i style="width:${target/15*100}%"></i></div><b>${actual}/${target}</b></div>`}).join('');
      $('#audit-checks').innerHTML=audit.checks.map(check=>`<div class="audit-check ${check.state}"><i>${check.state==='pass'?'✓':check.state==='warn'?'!':'×'}</i><span>${check.text}</span></div>`).join('');
      $('#audit-blueprints').innerHTML=Object.entries(examBlueprints).map(([key,blueprint])=>`<tr><td>${schools[key]?.short||blueprint.label}</td><td>${blueprint.levels.kha||0}</td><td>${blueprint.levels.gioi||0}</td><td>${blueprint.levels.kho||0}</td><td>${blueprint.levels['rat-kho']||0}</td><td>${blueprint.levels['chinh-phuc']||0}</td><td><span class="audit-pill">${blueprint.originalMin}/15 câu</span></td></tr>`).join('');
    }
    function showView(view){const views={exam:'#exam-view',result:'#result-view',audit:'#audit-view'},tabs={exam:'#tab-exam',result:'#tab-result',audit:'#tab-audit'};Object.entries(views).forEach(([key,selector])=>$(selector).classList.toggle('hidden',key!==view));Object.entries(tabs).forEach(([key,selector])=>{$(selector).classList.toggle('active',key===view);$(selector).setAttribute('aria-selected',String(key===view))});window.scrollTo({top:0,behavior:'smooth'})}
    function startTimer(){clearInterval(timerId);$('#timer').textContent=formatTime(timeLeft);timerId=setInterval(()=>{timeLeft--;elapsedSeconds++;$('#timer').textContent=formatTime(timeLeft);if(elapsedSeconds%10===0)persistState();if(timeLeft<=0){clearInterval(timerId);submitExam(true)}},1000)}
    $('#submit-exam').addEventListener('click',()=>submitExam(false));$('#new-exam').addEventListener('click',()=>{if(!graded&&Object.values(userAnswers).some(value=>String(value).trim())&&!confirm('Tạo đề mới sẽ xóa các đáp án đang làm. Tiếp tục?'))return;examNumber++;createExam()});$('#tab-exam').addEventListener('click',()=>showView('exam'));$('#tab-result').addEventListener('click',()=>{if(graded)showView('result')});$('#tab-audit').addEventListener('click',()=>{renderAudit();showView('audit')});$('#mobile-school-toggle').addEventListener('click',()=>$('#school-panel').classList.toggle('open'));$('#font-size').addEventListener('click',()=>{const sizes=[16,17.5,19],current=parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--font-size'))||16,next=sizes[(sizes.indexOf(current)+1)%sizes.length];document.documentElement.style.setProperty('--font-size',`${next}px`)});window.addEventListener('beforeunload',()=>{persistState();clearInterval(timerId)});const savedDraft=readDraft();if(savedDraft)restoreDraft(savedDraft);else{renderSchoolList();createExam()}
    }
  