const subjects=[
{id:'portugues',name:'Português e Literatura',icon:'Aa',color:'#eee9ff',desc:'Gramática, leitura e literatura',topics:['Interpretação de texto','Classes de palavras','Gêneros literários']},
{id:'matematica',name:'Matemática',icon:'π',color:'#e3f5ee',desc:'Álgebra, geometria e estatística',topics:['Matemática básica','Álgebra e equações','Geometria','Estatística']},
{id:'ciencias',name:'Biologia',icon:'⌁',color:'#e5f5e9',desc:'Vida, ambiente e genética',topics:['Células e tecidos','Ecologia','Genética básica']},
{id:'quimica',name:'Química',icon:'⚗',color:'#e8f3ff',desc:'Matéria e transformações',topics:['Matéria e propriedades','Átomos e elementos','Reações químicas']},
{id:'fisica',name:'Física',icon:'⚡',color:'#fff1dc',desc:'Movimento, energia e fenômenos',topics:['Movimento','Força e energia','Ondas e eletricidade']},
{id:'historia',name:'História',icon:'⌛',color:'#fff0dd',desc:'Brasil e história geral',topics:['Brasil República','Guerras Mundiais','Guerra Fria']},
{id:'geografia',name:'Geografia',icon:'◎',color:'#e4f5f0',desc:'Espaço, sociedade e geopolítica',topics:['Geografia física','População e urbanização','Geopolítica']},
{id:'ingles',name:'Inglês / Espanhol',icon:'Hi',color:'#ffe9e5',desc:'Comunicação e compreensão',topics:['Vocabulário essencial','Leitura e interpretação','Conversação básica']},
{id:'redacao',name:'Redação',icon:'✎',color:'#f0eaff',desc:'Texto dissertativo-argumentativo',topics:['Tese e argumentos','Estrutura do texto','Coesão e revisão']},
{id:'filosofia',name:'Filosofia',icon:'?',color:'#e9edff',desc:'Ideias, ética e conhecimento',topics:['Ética','Política','Conhecimento e verdade']},
{id:'sociologia',name:'Sociologia',icon:'♧',color:'#f5e9f5',desc:'Sociedade, cultura e cidadania',topics:['Cultura e identidade','Trabalho e desigualdade','Cidadania']},
{id:'artes',name:'Artes',icon:'✦',color:'#ffe9ef',desc:'Criação, cultura e expressão',topics:['Artes visuais','Música e teatro','Arte brasileira']},
{id:'educacao-fisica',name:'Educação Física',icon:'●',color:'#e9f5ff',desc:'Corpo, saúde e movimento',topics:['Saúde e qualidade de vida','Esportes','Corpo e movimento']},
{id:'tic',name:'TIC',icon:'⌘',color:'#e8efff',desc:'Tecnologia e cidadania digital',topics:['Segurança digital','Internet e informação','Ferramentas digitais']},
{id:'javascript',name:'JavaScript',icon:'JS',color:'#fff3be',desc:'Trilha opcional de lógica e programação web',optional:true,topics:['Lógica de programação','Variáveis e funções','HTML, CSS e JavaScript']}
];
const quiz=[
{s:'Português',q:'Na frase “Os alunos estudaram bastante”, qual palavra é o verbo?',a:['Os','alunos','estudaram','bastante'],c:2},
{s:'Matemática',q:'Qual é o resultado de 3 × (4 + 2)?',a:['14','18','24','12'],c:1},
{s:'Biologia',q:'Qual estrutura é considerada a unidade básica dos seres vivos?',a:['Átomo','Célula','Órgão','Tecido'],c:1},
{s:'História',q:'Em que ano foi proclamada a República no Brasil?',a:['1500','1822','1889','1930'],c:2},
{s:'Geografia',q:'Qual linha imaginária divide a Terra nos hemisférios Norte e Sul?',a:['Trópico de Capricórnio','Meridiano de Greenwich','Linha do Equador','Círculo Polar'],c:2},
{s:'Física',q:'Qual unidade é usada para medir força no Sistema Internacional?',a:['Watt','Newton','Metro','Joule'],c:1},
{s:'Química',q:'A água (H₂O) é formada por quais elementos?',a:['Hidrogênio e oxigênio','Hélio e oxigênio','Hidrogênio e ouro','Oxigênio e carbono'],c:0},
{s:'Redação',q:'Em um texto dissertativo-argumentativo, qual é a função principal da tese?',a:['Contar uma história','Apresentar a posição que será defendida','Listar referências','Encerrar o texto'],c:1}
];
const baseProgress=Object.fromEntries(subjects.map(s=>[s.id,{percent:0,sessions:0,minutes:0,level:'A diagnosticar',last:'Ainda não iniciado'}]));
let progress=baseProgress; // O registro oficial fica nos arquivos do repositório; não usamos armazenamento local.
let selectedSubject=null,quizIndex=0,score=0,answered=false;
const content=document.querySelector('#content');
function icon(s){return `<span class="subject-icon" style="background:${s.color}">${s.icon}</span>`}
function nav(){document.querySelector('#subjectNav').innerHTML=subjects.map(s=>`<a class="nav-item" href="#materia/${s.id}" data-view="materia/${s.id}">${icon(s)} ${s.name}${s.optional?' <small>opcional</small>':''}</a>`).join('')}
function route(view=location.hash.slice(1)||'inicio'){
 document.querySelectorAll('.nav-item').forEach(a=>a.classList.toggle('active',a.dataset.view===view));
 const simple={inicio:'Visão geral',hoje:'Estudar agora',diagnostico:'Diagnóstico',progresso:'Meu progresso'};
 document.querySelector('#pageName').textContent=simple[view]||subjects.find(s=>`materia/${s.id}`===view)?.name||'Estudos';
 if(view==='inicio')home(); else if(view==='diagnostico')diagnostic(); else if(view==='hoje')today(); else if(view==='progresso')progressPage(); else if(view.startsWith('materia/'))subjectPage(view.split('/')[1]); else home();
 document.querySelector('#sidebar').classList.remove('open');window.scrollTo(0,0)
}
function home(){content.innerHTML=document.querySelector('#homeTemplate').innerHTML;
 const picks=[subjects[1],subjects[0],subjects[2]];document.querySelector('#continueGrid').innerHTML=picks.map(s=>`<article class="continue-card" data-subject="${s.id}">${icon(s)}<div><h3>${s.name}</h3><p>${progress[s.id].last}</p><div class="progress"><i style="width:${progress[s.id].percent}%"></i></div></div><span class="arrow">›</span></article>`).join('');
 document.querySelector('#subjectGrid').innerHTML=subjects.map(s=>`<article class="subject-card" data-subject="${s.id}">${icon(s)}<h3>${s.name}${s.optional?' <small class="optional-badge">OPCIONAL</small>':''}</h3><p>${s.desc}</p></article>`).join('');
 const vals=subjects.filter(s=>!s.optional).map(s=>progress[s.id]);document.querySelector('#completedStat').textContent=vals.reduce((a,p)=>a+p.sessions,0);document.querySelector('#minutesStat').textContent=vals.reduce((a,p)=>a+p.minutes,0)+' min';document.querySelector('#averageStat').textContent=Math.round(vals.reduce((a,p)=>a+p.percent,0)/vals.length)+'%';document.querySelector('#pointsStat').textContent=vals.reduce((a,p)=>a+p.sessions*10,0);
 bindCards()
}
function diagnostic(){content.innerHTML=document.querySelector('#diagnosticTemplate').innerHTML;quizIndex=0;score=0;renderQuestion()}
function renderQuestion(){const area=document.querySelector('#quizArea');if(quizIndex>=quiz.length){const ratio=score/quiz.length;const level=ratio<.35?'Fundamental':ratio<.65?'Básico':ratio<.9?'Intermediário':'Avançado';area.innerHTML=`<div class="quiz-card"><span class="eyebrow">SEU PONTO DE PARTIDA</span><h2>Nível geral: ${level}</h2><p>Você acertou ${score} de ${quiz.length} questões desta sondagem rápida.</p><p class="empty-note">Agora faremos diagnósticos mais completos dentro de cada matéria. Assim, você pode estar em níveis diferentes em Matemática, Linguagens, Humanas e Natureza — e cada trilha começa no lugar certo.</p><button class="primary-btn" data-go="hoje">Escolher primeira matéria →</button></div>`;bindGo();return}const x=quiz[quizIndex];answered=false;area.innerHTML=`<div class="quiz-card"><div class="quiz-top"><b>${x.s}</b><span>Questão ${quizIndex+1} de ${quiz.length}</span></div><div class="progress"><i style="width:${quizIndex/quiz.length*100}%"></i></div><h2>${x.q}</h2><div class="answers">${x.a.map((a,i)=>`<button class="answer" data-answer="${i}"><b>${String.fromCharCode(65+i)}.</b> ${a}</button>`).join('')}</div><div class="quiz-actions"><button class="primary-btn" id="nextQuestion" style="display:none">Próxima →</button></div></div>`;document.querySelectorAll('.answer').forEach(b=>b.onclick=()=>answer(+b.dataset.answer));document.querySelector('#nextQuestion').onclick=()=>{quizIndex++;renderQuestion()}}
function answer(i){if(answered)return;answered=true;const right=quiz[quizIndex].c;if(i===right)score++;document.querySelectorAll('.answer').forEach((b,n)=>{b.disabled=true;if(n===right)b.classList.add('correct');else if(n===i)b.classList.add('wrong')});document.querySelector('#nextQuestion').style.display='block'}
function today(){content.innerHTML=document.querySelector('#todayTemplate').innerHTML;document.querySelector('#studySubjects').innerHTML=subjects.map(s=>`<button class="study-choice" data-id="${s.id}">${s.icon} &nbsp; ${s.name}</button>`).join('');document.querySelectorAll('.study-choice').forEach(b=>b.onclick=()=>{selectedSubject=b.dataset.id;document.querySelectorAll('.study-choice').forEach(x=>x.classList.toggle('selected',x===b));const btn=document.querySelector('#startSession');btn.disabled=false;btn.textContent='Abrir trilha de '+subjects.find(s=>s.id===selectedSubject).name});document.querySelector('#startSession').onclick=()=>location.hash='materia/'+selectedSubject}
function progressPage(){content.innerHTML=`<section class="page-intro"><span class="eyebrow">ACOMPANHAMENTO</span><h1>Meu progresso</h1><p>Esta página reflete os dados registrados no repositório ao fim de cada sessão.</p></section><div class="progress-list">${subjects.map(s=>{const p=progress[s.id];return `<article class="progress-row">${icon(s)}<div><strong>${s.name}${s.optional?' (opcional)':''}</strong><small>Nível: ${p.level} · ${p.sessions} sessões · ${p.minutes} min · ${p.last}</small><div class="progress"><i style="width:${p.percent}%"></i></div></div><em>${p.percent}%</em></article>`}).join('')}</div>`}
function subjectPage(id){const s=subjects.find(x=>x.id===id);if(!s)return home();const p=progress[id];content.innerHTML=`<section class="page-intro"><span class="eyebrow">${s.optional?'TRILHA OPCIONAL':'TRILHA ADAPTATIVA PARA O ENEM'}</span><h1>${s.name}</h1><p>${s.desc}. O ponto de partida será adaptado ao seu conhecimento atual, avançando gradualmente até o nível exigido pelo ENEM.</p></section><div class="subject-page"><div class="lesson-list">${s.topics.map((t,i)=>`<article class="lesson"><span>MÓDULO ${i+1}</span><h3>${t}</h3><p>${i===0?'Nosso ponto de partida. A aula será criada no chat conforme seu diagnóstico.':'Será liberado após avançarmos no módulo anterior.'}</p></article>`).join('')}</div><aside class="panel"><span class="eyebrow">SEU PROGRESSO</span><h2>Nível: ${p.level}</h2><p><b>${p.percent}%</b> da trilha concluída</p><div class="progress"><i style="width:${p.percent}%"></i></div><p class="empty-note"><b>Onde paramos:</b><br>${p.last}</p><p class="empty-note"><b>Próximo passo:</b><br>${s.topics[0]}</p><button class="primary-btn" data-go="hoje">Iniciar sessão</button></aside></div>`;bindGo()}
function bindCards(){document.querySelectorAll('[data-subject]').forEach(e=>e.onclick=()=>location.hash='materia/'+e.dataset.subject);bindGo()}
function bindGo(){document.querySelectorAll('[data-go]').forEach(e=>e.onclick=()=>location.hash=e.dataset.go)}
window.addEventListener('hashchange',()=>route());document.querySelector('#menuBtn').onclick=()=>document.querySelector('#sidebar').classList.toggle('open');nav();route();
