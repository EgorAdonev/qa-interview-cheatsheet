/* Local, deterministic teaching models. They do not contact a backend. */
(() => {
const E=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const flow=(labels,note)=>`<div class="flow">${labels.map((x,i)=>`<div class="flow-step"><span class="step-number">${i+1}</span><strong>${E(x)}</strong></div>`).join('')}</div><p class="diagram-note">${E(note)}</p>`;
window.lessonTable = t => !t?'':`<div class="table-scroll"><table><thead><tr>${t.headers.map(x=>`<th scope="col">${E(x)}</th>`).join('')}</tr></thead><tbody>${t.rows.map(r=>`<tr>${r.map(x=>`<td>${E(x)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
window.lessonVisual = type => {
 const common=(title,body)=>`<figure class="learn-visual" data-demo="${type}"><figcaption>${title}</figcaption>${body}</figure>`;
 if(type==='pyramid')return common('Пирамида как фильтр: дорогой интерфейс — для важного маршрута',`<div class="pyramid"><div>UI / E2E <small>критические маршруты</small></div><div>API / integration <small>контракты и границы</small></div><div>Unit / component <small>логика, много быстрых проверок</small></div></div><p class="diagram-note">Ширина — ассоциация объёма покрытия, а не норматив количества тестов.</p>`);
 if(type==='boundary')return common('Граница — место, где меняется правило',`<div class="boundary-scale">${[17,18,19,64,65,66].map(x=>`<button class="mini ${x<18||x>65?'invalid-value':'valid-value'}" data-age="${x}">${x}</button>`).join('')}</div><label>Целый возраст 18–65 <input class="demo-input" type="text" inputmode="numeric" value="18" aria-label="Возраст для проверки границы"></label><output class="demo-output" aria-live="polite">18: допустимо — нижняя граница.</output>`);
 if(type==='join')return common('JOIN — по строкам данных, а не по кругам Венна',`<p>Клиенты: 1 Аня, 2 Борис, 3 Вера. Заказы: 101 → клиент 1; 102 → клиент 1; 103 → клиент 2; 104 → client_id NULL.</p><div class="demo-controls" role="group" aria-label="Тип JOIN">${['INNER','LEFT','RIGHT'].map((x,i)=>`<button class="mini" data-join="${x}" aria-pressed="${!i}">${x} JOIN</button>`).join('')}</div><div class="join-result" aria-live="polite"></div><p class="diagram-note">JOIN по customers.id = orders.customer_id. NULL не совпадает с ID.</p>`);
 if(type==='wait')return common('Синхронизация: DOM появился ≠ бизнес-операция завершена',flow(['DOM найден','Элемент виден','Кнопка enabled','Заказ сохранён'],'Ожидание проверяет нужное условие. Нажми «Разобрать», чтобы увидеть этапы.')+`<button class="mini play-demo">Разобрать</button><output class="demo-output" aria-live="polite">Ожидаем конечное состояние заказа.</output>`);
 if(type==='api')return common('Путь запроса и результат',flow(['Клиент: POST','API: валидация','БД: commit','Клиент: 201'],'Учебная синхронная операция. При 202 конечный результат проверяется отдельно.')+`<button class="mini play-demo">Проследить запрос</button><output class="demo-output" aria-live="polite">Запрос ещё не отправлен.</output>`);
 if(type==='defect')return common('Исправление проходит проверку',flow(['New / triage','In progress','Fixed / retest','Closed'],'Провал retest возвращает дефект в Reopened. Duplicate/Deferred — отдельные решения.')+`<button class="mini play-demo">Пройти цикл</button><output class="demo-output" aria-live="polite">New: проблема воспроизводится.</output>`);
 if(type==='pipeline')return common('Тесты как последовательные фильтры риска',flow(['Build + unit','API / integration','Deploy + readiness','Smoke + решение'],'Регресс по расписанию/перед релизом дополняет эту цепочку. Reports сохраняются при любом исходе.')+`<button class="mini play-demo">Пройти pipeline</button><output class="demo-output" aria-live="polite">Готов к запуску учебной цепочки.</output>`);
 if(type==='broker')return common('Повтор доставки — один бизнес-эффект',flow(['Producer','Broker','Consumer','БД: eventId'],'Confirm/ack и сохранение результата — разные сигналы. Модель использует дедупликацию по eventId.')+`<div class="demo-controls"><button class="mini deliver">Доставить evt-42</button><button class="mini replay" disabled>Повторить evt-42</button><button class="mini reset-demo">Сбросить</button></div><output class="demo-output" aria-live="polite">Доставок: 0. Заказов в БД: 0.</output>`);
 return '';
};
const reduced=()=>matchMedia('(prefers-reduced-motion: reduce)').matches;
const highlight=(target)=>{if(window.gsap&&!reduced())gsap.fromTo(target,{backgroundColor:'#286a65'},{backgroundColor:'#10233a',duration:.7});};
window.bindLearning = () => {
 const menu=document.querySelector(".navigation-menu"); const narrow=matchMedia("(max-width:980px)"); menu.open=!narrow.matches; narrow.addEventListener("change",()=>menu.open=!narrow.matches);
 document.querySelectorAll('[data-demo=boundary]').forEach(d=>{
  const input=d.querySelector('input'),out=d.querySelector('output');
  function update(){const raw=input.value.trim(),n=Number(raw);out.textContent=raw===''?'Пусто: обязательное значение отсутствует.':!Number.isFinite(n)||!Number.isInteger(n)?`${raw}: ошибка типа — нужен целый возраст.`:n<18||n>65?`${n}: недопустимо — вне диапазона [18,65].`:`${n}: допустимо${n===18?' — нижняя граница':n===65?' — верхняя граница':''}.`;highlight(out);}
  input.addEventListener('input',update);d.querySelectorAll('[data-age]').forEach(b=>b.onclick=()=>{input.value=b.dataset.age;update();});
 });
 document.querySelectorAll('[data-demo=join]').forEach(d=>{
  function render(type){let rows=[['1 / Аня','101'],['1 / Аня','102'],['2 / Борис','103']];if(type==='LEFT')rows.push(['3 / Вера','NULL']);if(type==='RIGHT')rows.push(['NULL','104']);d.querySelector('.join-result').innerHTML=window.lessonTable({headers:['Клиент','Заказ'],rows});d.querySelectorAll('[data-join]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.join===type)));highlight(d.querySelector('.join-result'));}
  d.querySelectorAll('[data-join]').forEach(b=>b.onclick=()=>render(b.dataset.join));render('INNER');
 });
 const labels={wait:['DOM найден: ссылка ещё может устареть.','Элемент виден: операция ещё выполняется.','Enabled: UI готов, но результат ещё не подтверждён.','Заказ сохранён: целевое бизнес-условие выполнено.'],api:['Клиент отправил headers и body.','API проверил типы, права и ограничения.','Транзакция сохранения завершилась.','201 и id получены: дальше проверяем значения и побочные эффекты.'],defect:['New: подтверждаем и оцениваем риск.','In progress: исправление в работе.','Retest: фикс доступен в нужной сборке.','Closed: исходный сценарий и соседние риски проверены.'],pipeline:['Сборка и unit дали быстрый сигнал.','API проверил контракты и интеграции.','Среда развернута; readiness подтверждён.','Smoke пройден: решение о релизе по рискам, регресс дополняет проверку.']};
 document.querySelectorAll('.play-demo').forEach(b=>b.onclick=()=>{
  const d=b.closest('figure'),steps=[...d.querySelectorAll('.flow-step')],out=d.querySelector('output'),text=labels[d.dataset.demo];
  d._timeline?.kill();steps.forEach(s=>s.classList.remove('current-step'));out.textContent=text[0];
  if(!window.gsap||reduced()){steps.forEach(s=>s.classList.add('current-step'));out.textContent=text.join(' ');return;}
  const tl=gsap.timeline();d._timeline=tl;steps.forEach((s,i)=>{tl.call(()=>{steps.forEach(x=>x.classList.remove('current-step'));s.classList.add('current-step');out.textContent=text[i];},null,i*.85).fromTo(s,{y:4},{y:0,duration:.25},i*.85);});
 });
 document.querySelectorAll('[data-demo=broker]').forEach(d=>{
  let deliveries=0,orders=0;const out=d.querySelector('output'),replay=d.querySelector('.replay');
  function send(){deliveries++;orders=1;replay.disabled=false;out.textContent=`Доставок: ${deliveries}. Заказов в БД: ${orders}. ${deliveries===1?'Первый eventId сохранён.':'Дубль evt-42 распознан; второй заказ не создан.'}`;highlight(out);}
  d.querySelector('.deliver').onclick=send;replay.onclick=send;d.querySelector('.reset-demo').onclick=()=>{deliveries=orders=0;replay.disabled=true;out.textContent='Доставок: 0. Заказов в БД: 0.';};
 });
 const status=document.getElementById('searchStatus');document.getElementById('search').addEventListener('input',()=>{const n=document.querySelectorAll('#sections .card:not(.hide)').length;status.textContent=`Найдено карточек: ${n}`;});
};
})();
