(() => {
  'use strict';
  const projects = [
    { id:'orbit', name:'ORBIT', type:'DESKTOP', subtitle:'11 бирж. Один рабочий инструмент.', category:'Скринер фьючерсов', status:'Собственный продукт', tech:['Electron','React','TypeScript','ccxt'], task:'Собрать инструменты разных бирж в одном приложении и фильтровать их по реальному составу индексной цены, а не просто по наличию листинга.', solution:'Desktop-приложение с интеграциями 11 бирж, фильтрами, кэшем и оценкой достоверности источников. Интерфейс помогает разбираться в данных без постоянного переключения между площадками.', result:'Собрана рабочая версия приложения и выполнены проверки. Особое внимание — качеству источников и корректности фильтрации.', role:'Собственный продукт. Разработка с использованием AI-инструментов, включая Codex.' },
    { id:'skinarb', name:'Skinarb', type:'WEB + CLI', subtitle:'Сравнение цен без слепых зон.', category:'Аналитика маркетплейсов', status:'Рабочий инструмент', tech:['Python','FastAPI','httpx','REST API'], task:'Сопоставлять цены скинов CS2 между площадками, учитывая комиссии и ликвидность.', solution:'Инструмент объединяет данные 5 маркетплейсов. Есть фильтры, избранное, веб-интерфейс и командная строка.', result:'Сравнение предложений в одной системе с учётом особенностей площадок. Инструмент аналитический: не обещает доходность и не выполняет автоматические сделки.', role:'Разработка собственного инструмента и интеграций с источниками цен.' },
    { id:'finapp', name:'FinApp', type:'MINI APP', subtitle:'Финансы проекта внутри Telegram.', category:'Учёт бюджета', status:'Развёрнутая версия', tech:['Python','aiohttp','aiogram','SQLite','JavaScript'], task:'Сделать простой учёт бюджета проектов, к которому удобно обращаться из Telegram.', solution:'Mini App с приходами, расходами, комментариями и историей операций. Серверная логика на Python, хранение данных в SQLite.', result:'Приложение разработано с нуля, развёрнуто и проверено. Операции и их контекст доступны в одном интерфейсе.', role:'Полный цикл разработки: данные, backend, бот и интерфейс Mini App.' },
    { id:'aster', name:'ASTER-WICK', type:'DESKTOP + WEB', subtitle:'Потоковые данные. Простое управление.', category:'Инструмент для лимитных заявок', status:'Клиентский EXE собран', tech:['Python','FastAPI','WebSocket','PyInstaller'], task:'Сделать приложение для сопровождения лимитных заявок с понятным управлением и простым запуском.', solution:'Потоковые котировки, серверная логика и веб-панель. Клиент упакован в EXE, который запускается без отдельной установки Python.', result:'Собран клиент и проверен жизненный цикл приложения. Для взаимодействия выбран веб-интерфейс.', role:'Разработка продукта с нуля, интеграция потоковых данных и упаковка приложения.' },
    { id:'tgrepost', name:'tgrepost', type:'AUTOMATION', subtitle:'От потока контента — к порядку.', category:'Telegram-автоматизация', status:'Серверная версия', tech:['Python','Telethon','aiogram','LLM API'], task:'Упростить работу с несколькими источниками Telegram-контента, сохранив контроль человека над публикацией.', solution:'Сбор материалов, AI-перефразирование, отсев рекламы, поиск дубликатов, очередь премодерации и панель управления.', result:'Работающая серверная версия с обновлениями и настройками. Финальное решение о публикации остаётся за человеком.', role:'Проектирование и разработка процесса обработки контента и панели управления.' },
    { id:'stockmon', name:'StockMon', type:'DESKTOP', subtitle:'Котировки, которым нужен контекст.', category:'Монитор рыночных данных', status:'Приложение с EXE', tech:['Python','PyQt6','asyncio','REST','WebSocket'], task:'Сравнивать котировки токенизированных акций с американским рынком и отделять реальные расхождения от задержек данных.', solution:'Монитор примерно 197 инструментов с учётом торговых сессий и свежести источников, потоковыми обновлениями и desktop-интерфейсом.', result:'Рабочий монитор, поставлявшийся в виде EXE. Отдельная задача — устранение ложных расхождений из-за задержанных котировок.', role:'Разработка монитора и улучшение корректности сравнения данных. Это монитор, а не торговый бот.' }
  ];
  const archives = [
    ['tgcontrol','Telegram-пульт и Mini App для состояния и управления серверным приложением. Интеграция поверх существующего проекта rascor.','Интеграция'],
    ['Streamer Card','Адаптивный шаблон визитки стримера: расписание, видео и настройки контента. Nuxt 3, Vue 3, TypeScript. Демонстрационный персонаж — Kai Voss.','Готовый шаблон'],
    ['fair-flip','Сбор и воспроизведение потоковых данных, симуляция гипотез. Практический исследовательский проект на C++.','Исследование'],
    ['MEXC ↔ DEX','Исследование источников котировок, симуляция исполнения и консоль мониторинга.','R&D / paper-прототип'],
    ['MEXC-rascor','Развитие существующего проекта: дополнительные виды контрактов, инструменты и проверки исполнения.','Доработка'],
    ['Bitget-maker','Прототип desktop-приложения с API-интеграцией и обработкой потоковых событий.','Прототип'],
    ['Gapscan','Исследовательский сканер расхождений. Работа остановлена после сбора статистики.','Исследование / архив'],
    ['AlphaX','Исследование API и экспериментальные пробы. Развитие полноценного продукта отложено.','Исследование / архив'],
    ['Crypto Alarm / PULSE','Концепция и макеты приложения для рыночных уведомлений.','Концепт интерфейса'],
    ['Telegram-каталог','Бот-магазин: категории и товары из Excel, корзина и обновление каталога через чат.','Telegram-бот'],
    ['TG Probe','Инструмент для тестирования собственных Telegram-ботов.','Инструмент'],
    ['tg_photo','Небольшой проект автоматизации работы с фото в Telegram.','Автоматизация']
  ];
  const lineChart = '<svg viewBox="0 0 440 140" fill="none" aria-hidden="true"><path d="M0 35H440M0 70H440M0 105H440" stroke="currentColor" opacity=".12"/><path class="chart-line" d="M0 115L25 100 43 109 69 76 90 85 116 65 138 88 162 60 183 70 202 40 224 56 251 43 272 56 291 32 310 45 332 18 354 29 377 12 400 23 440 5" stroke="currentColor" stroke-width="2.5"/></svg>';
  const visuals = {
    orbit:'<div class="ui-window orbit-ui"><div class="ui-top"><b>ORBIT<span class="ui-dot"></span></b><span>MARKET EXPLORER</span><i>•••</i></div><div class="orbit-ui-body"><div class="ui-sidebar"><span class="selected">Обзор</span><span>Источники</span><span>Избранное</span></div><div class="ui-main"><div class="ui-heading">Весь рынок.<br><em>В одном месте.</em></div><div class="ui-pills"><span>11 бирж</span><span>Index price</span></div><div class="ui-data-row"><b>BTC / USDT</b><span>Источник A</span><i>✓</i></div><div class="ui-data-row"><b>ETH / USDT</b><span>Источник B</span><i>✓</i></div><div class="ui-data-row"><b>SOL / USDT</b><span>Источник C</span><i>✓</i></div></div></div></div>',
    skinarb:'<div class="skin-title">skin<span>arb</span><small>PRICE DISCOVERY</small></div><div class="skin-ui"><div class="ui-top"><b>Один предмет. Пять площадок.</b><span>CS2</span></div><div class="skin-item"><span class="skin-item-icon">S</span><div><b>Предмет из коллекции</b><small>Сравнение предложений</small></div><span class="skin-tag">5 площадок</span></div><div class="market-row"><span>Маркетплейс A</span><div style="--bar:72%"></div><b>01</b></div><div class="market-row"><span>Маркетплейс B</span><div style="--bar:88%"></div><b>02</b></div><div class="market-row"><span>Маркетплейс C</span><div style="--bar:58%"></div><b>03</b></div><div class="skin-foot">КОМИССИИ <span>·</span> ЛИКВИДНОСТЬ <span>·</span> ФИЛЬТРЫ</div></div>',
    finapp:'<div class="fin-word">finapp<span>Финансы. Без лишнего.</span></div><div class="phone-ui"><div class="phone-top"><span>9:41</span><span>▰</span></div><div class="fin-top"><b>Мой проект</b><span>F.</span></div><div class="balance-label">Бюджет проекта</div><div class="balance">24 800 <small>₽</small></div><div class="fin-actions"><span>+ Доход</span><span>− Расход</span></div><div class="fin-history">Последние операции</div><div class="fin-entry"><i>+</i><div>Пополнение<small>Сегодня, 12:30</small></div><b>+30 000 ₽</b></div><div class="fin-entry"><i>−</i><div>Сервисы<small>Сегодня, 11:10</small></div><b>−5 200 ₽</b></div><div class="fin-nav"><b>Обзор</b><span>История</span><span>Проекты</span></div></div>',
    aster:'<div class="aster-name">ASTER<span>WICK / TERMINAL</span></div><div class="aster-ui"><div class="ui-top"><b>РАБОЧАЯ ПАНЕЛЬ</b><span>WS · DEMO</span></div><div class="aster-chart"><div class="chart-label"><b>Поток котировок</b><span>Лимитная заявка</span></div>'+lineChart+'<div class="limit-line"><span>LIMIT</span></div></div><div class="aster-controls"><div><small>ПОДКЛЮЧЕНИЕ</small><b>WebSocket</b></div><div><small>УПРАВЛЕНИЕ</small><b>Web-панель</b></div><span>ПАРАМЕТРЫ</span></div></div>',
    tgrepost:'<div class="repost-header"><b>tgrepost<span>✳</span></b><small>КОНТЕНТ ПОД КОНТРОЛЕМ</small></div><div class="repost-flow"><span>Источники</span><i>· · ·</i><span>AI-обработка</span><i>· · ·</i><span class="flow-active">Проверка</span></div><div class="editor-ui"><div class="ui-top"><b>Очередь материалов</b><span>ПРЕМОДЕРАЦИЯ</span></div><div class="editor-paper"><span class="editor-label">ГОТОВО К ПРОВЕРКЕ</span><b>Главное — оставить<br>человеку последнее слово.</b><div class="text-lines"><i></i><i></i><i></i></div><div class="editor-buttons"><span>Подтвердить</span><span>Редактировать</span></div></div></div>',
    stockmon:'<div class="stock-name">StockMon<small>ДАННЫЕ С КОНТЕКСТОМ</small></div><div class="stock-ui"><div class="ui-top"><b>MARKET OVERVIEW</b><span>~197 инструментов</span></div><div class="stock-chart">'+lineChart+'</div><div class="stock-table"><div><b>Инструмент</b><b>Сессия</b><b>Источник</b></div><div><span>AAPL</span><span>Основная</span><span>Проверен</span></div><div><span>MSFT</span><span>Основная</span><span>Проверен</span></div><div><span>NVDA</span><span>Основная</span><span>Проверен</span></div></div></div>'
  };
  const grid = document.querySelector('#project-grid');
  grid.innerHTML = projects.map((p,i)=>`<article class="project-card reveal"><button class="project-open" data-project="${p.id}" aria-label="Подробнее о проекте ${p.name}"><div class="project-visual ${p.id}-visual"><span class="project-num">0${i+1} / ${p.type}</span><div class="visual-content">${visuals[p.id]}</div><span class="demo-label">ДЕМО-ИНТЕРФЕЙС</span><span class="project-open-label">О проекте <i>+</i></span></div><div class="project-caption"><div><h3>${p.name}</h3><p>${p.subtitle}</p></div><span class="project-type">${p.type}</span></div></button></article>`).join('');
  document.querySelector('#archive-list').innerHTML = archives.map((a,i)=>`<details class="archive-row reveal"><summary><span class="archive-index">${String(i+1).padStart(2,'0')}</span><h3>${a[0]}</h3><span class="archive-status">${a[2]}</span><span class="archive-plus" aria-hidden="true">+</span></summary><p>${a[1]}</p></details>`).join('');
  const dialog = document.querySelector('#project-dialog');
  let previousFocus;
  grid.addEventListener('click',event=>{
    const button=event.target.closest('[data-project]'); if(!button) return;
    const p=projects.find(x=>x.id===button.dataset.project);
    previousFocus=button;
    document.querySelector('#dialog-body').innerHTML=`<span class="dialog-category">${p.category}</span><h2 id="dialog-title">${p.name}</h2><p class="dialog-subtitle">${p.subtitle}</p><span class="dialog-status">${p.status}</span><div class="dialog-section"><h3>Задача</h3><p>${p.task}</p></div><div class="dialog-section"><h3>Решение</h3><p>${p.solution}</p></div><div class="dialog-section"><h3>Результат</h3><p>${p.result}</p></div><div class="dialog-section"><h3>Роль</h3><p>${p.role}</p></div><div class="tags">${p.tech.map(t=>`<span>${t}</span>`).join('')}</div><a class="dialog-contact" href="https://t.me/duraceprog" target="_blank" rel="noopener noreferrer">Обсудить похожую задачу</a>`;
    dialog.showModal();dialog.scrollTop=0;document.body.classList.add('dialog-is-open');
  });
  document.querySelector('.dialog-close').addEventListener('click',()=>dialog.close());
  dialog.addEventListener('click',event=>{const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();});
  dialog.addEventListener('close',()=>{document.body.classList.remove('dialog-is-open');previousFocus?.focus({preventScroll:true});});
  const copyButton=document.querySelector('#copy-contact');
  copyButton.addEventListener('click',async()=>{
    try{await navigator.clipboard.writeText('https://t.me/duraceprog');copyButton.textContent='Контакт скопирован';document.querySelector('#contact-status').textContent='Ссылка на Telegram скопирована';}
    catch{copyButton.textContent='@duraceprog';document.querySelector('#contact-status').textContent='Не удалось скопировать автоматически. Контакт: @duraceprog';}
  });
  const media=matchMedia('(prefers-reduced-motion: reduce)');
  let motion=!media.matches;
  try{const saved=localStorage.getItem('savva-motion');if(saved!==null)motion=saved==='on'&&!media.matches;}catch{}
  const motionButton=document.querySelector('#motion-toggle');
  function setMotion(value){motion=value;document.documentElement.classList.toggle('reduce-motion',!motion);motionButton.textContent=`Анимация: ${motion?'вкл.':'выкл.'}`;motionButton.setAttribute('aria-pressed',String(!motion));if(!motion){document.querySelectorAll('.reveal').forEach(el=>el.classList.add('visible'));document.querySelector('.hero-art').style.transform='';document.querySelectorAll('.project-visual').forEach(el=>el.style.transform='');}try{localStorage.setItem('savva-motion',motion?'on':'off');}catch{}}
  setMotion(motion);
  motionButton.addEventListener('click',()=>setMotion(!motion));
  media.addEventListener('change',e=>setMotion(!e.matches));
  const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}}),{threshold:.08});
  document.querySelectorAll('.reveal').forEach(el=>{el.classList.add('reveal-ready');observer.observe(el);});
  const bar=document.querySelector('.progress'),hero=document.querySelector('.hero'),art=document.querySelector('.hero-art');
  let pointerX=0,pointerY=0,smoothedX=0,smoothedY=0,scrollRatio=0,heroVisible=true;
  const finePointer=matchMedia('(pointer: fine)');
  const cursor=document.querySelector('.card-cursor');
  addEventListener('pointermove',event=>{pointerX=(event.clientX/innerWidth-.5)*2;pointerY=(event.clientY/innerHeight-.5)*2;if(finePointer.matches){cursor.style.left=event.clientX+'px';cursor.style.top=event.clientY+'px';}},{passive:true});
  document.querySelectorAll('.project-open').forEach(button=>{
    const visual=button.querySelector('.project-visual');
    button.addEventListener('pointerenter',()=>{if(finePointer.matches&&motion)cursor.classList.add('show');});
    button.addEventListener('pointermove',event=>{if(!motion||!finePointer.matches)return;const r=button.getBoundingClientRect(),x=(event.clientX-r.left)/r.width-.5,y=(event.clientY-r.top)/r.height-.5;visual.style.transform=`perspective(900px) rotateX(${-y*5}deg) rotateY(${x*5}deg)`;});
    button.addEventListener('pointerleave',()=>{visual.style.transform='';cursor.classList.remove('show');});
    button.addEventListener('click',()=>cursor.classList.remove('show'));
  });
  document.querySelectorAll('.magnetic').forEach(button=>{
    button.addEventListener('pointermove',event=>{if(!motion||!finePointer.matches)return;const r=button.getBoundingClientRect();button.style.transform=`translate(${(event.clientX-r.left-r.width/2)*.14}px,${(event.clientY-r.top-r.height/2)*.14}px)`;});
    button.addEventListener('pointerleave',()=>button.style.transform='');
  });
  function onScroll(){const max=document.documentElement.scrollHeight-innerHeight;bar.style.width=(max>0?scrollY/max*100:0)+'%';scrollRatio=Math.min(scrollY/hero.offsetHeight,1);}
  addEventListener('scroll',onScroll,{passive:true});addEventListener('resize',onScroll);onScroll();
  new IntersectionObserver(([entry])=>{heroVisible=entry.isIntersecting;}).observe(hero);
  const canvas=document.querySelector('#field'),ctx=canvas.getContext('2d');
  let cw=0,ch=0;
  const particles=Array.from({length:48},(_,i)=>({x:(Math.sin(i*83.1)*.5+.5),y:(Math.cos(i*36.7)*.5+.5),r:i%4===0?1.5:.7,s:.15+(i%7)*.025}));
  function resizeCanvas(){const dpr=Math.min(devicePixelRatio||1,1.5);cw=hero.clientWidth;ch=hero.clientHeight;canvas.width=cw*dpr;canvas.height=ch*dpr;ctx?.setTransform(dpr,0,0,dpr,0,0);}
  resizeCanvas();addEventListener('resize',resizeCanvas);
  let last=0,elapsed=0;
  function frame(time){requestAnimationFrame(frame);if(document.hidden||!heroVisible||!motion||time-last<32)return;last=time;elapsed+=.016;smoothedX+=(pointerX-smoothedX)*.055;smoothedY+=(pointerY-smoothedY)*.055;art.style.transform=`translate3d(${smoothedX*13}px,${smoothedY*10-scrollRatio*35}px,0) rotate(${smoothedX*2+Math.sin(elapsed*.5)*1.5}deg)`;if(!ctx)return;ctx.clearRect(0,0,cw,ch);for(const p of particles){const x=p.x*cw+Math.sin(elapsed*p.s)*15+smoothedX*8;const y=(p.y*ch-elapsed*p.s*5+ch)%ch;ctx.beginPath();ctx.arc(x,y,p.r,0,Math.PI*2);ctx.fillStyle=p.r>1?'#ff714e88':'#f2f1e960';ctx.fill();}}
  requestAnimationFrame(frame);
})();
