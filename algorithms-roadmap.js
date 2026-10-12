/* Six-week algorithms roadmap. Checkbox progress is local to this browser. */
(() => {
  "use strict";
  const root = document.getElementById("algorithmRoadmap");
  if (!root) return;
  const base = "https://cses.fi/problemset/task/";
  const url = (id) => id ? base + id : "";
  const weeks = [
    {
      title:"Неделя 1 · База Java и массивы",
      goal:"Big O, ArrayList, HashMap/HashSet, массивы, строки, частоты и in-place операции.",
      usaco:[["USACO Bronze","https://usaco.guide/bronze"]],
      tasks:[["Missing Number",1083],["Repetitions",1069],["Increasing Array",1094],["Distinct Numbers",1621],["Maximum Subarray Sum",1643],["In-place remove duplicates (Java)",null]]
    },
    {
      title:"Неделя 2 · Основные паттерны",
      goal:"Two pointers, sliding window, prefix sums, binary search; учись объяснять инварианты.",
      usaco:[["Two Pointers","https://usaco.guide/silver/two-pointers"],["Prefix Sums","https://usaco.guide/silver/prefix-sums"],["Binary Search","https://usaco.guide/silver/binary-search"]],
      tasks:[["Apartments",1084],["Ferris Wheel",1090],["Sum of Two Values",1640],["Playlist",1141],["Subarray Sums I",1660],["Factory Machines",1620],["Static Range Sum Queries",1646],["Array Division",1085]]
    },
    {
      title:"Неделя 3 · Структуры и деревья",
      goal:"Stack / Queue / Deque / Heap, linked list, дерево и обходы DFS/BFS.",
      usaco:[["USACO Silver","https://usaco.guide/silver"]],
      tasks:[["Nearest Smaller Values",1645],["Subordinates",1674],["Reverse linked list (Java)",null],["Detect linked-list cycle (Java)",null],["Tree: inorder + level order (Java)",null],["Top K через PriorityQueue (Java)",null]]
    },
    {
      title:"Неделя 4 · Графы",
      goal:"Adjacency list, DFS, BFS, flood fill, connected components и топологический порядок.",
      usaco:[["Graph Traversal","https://usaco.guide/silver/graph-traversal"]],
      tasks:[["Counting Rooms",1192],["Building Roads",1666],["Message Route",1667],["Labyrinth",1193],["Building Teams",1668],["Round Trip",1669],["Monsters",1194],["Course Schedule",1679]]
    },
    {
      title:"Неделя 5 · DP и дополнительные алгоритмы",
      goal:"Простейшая динамика, DSU и Dijkstra. Сложную олимпиадную DP пока пропусти.",
      usaco:[["Intro to DP","https://usaco.guide/gold/intro-dp"],["DSU","https://usaco.guide/gold/dsu"],["Shortest Paths","https://usaco.guide/gold/shortest-paths"]],
      tasks:[["Dice Combinations",1633],["Minimizing Coins",1634],["Removing Digits",1637],["Grid Paths I",1638],["Book Shop",1158],["Road Construction",1676],["Shortest Routes I",1671]]
    },
    {
      title:"Неделя 6 · Случайная практика",
      goal:"Решай без тегов и подсказок. 2–3 задачи за timed session; после каждой фиксируй ошибку и сложность.",
      usaco:[["AtCoder Problems","https://kenkoooo.com/atcoder/"]],
      tasks:[["AtCoder random #1 (difficulty 200–400)",null],["AtCoder random #2",null],["AtCoder random #3",null],["AtCoder random #4",null],["AtCoder random #5",null],["Timed session + анализ WA",null]]
    }
  ];
  const esc = s => String(s).replace(/[&<>"']/g, c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  const key="qa-cheatsheet-algorithms-weekly-v1";
  let completed=[];
  try {
    completed=JSON.parse(localStorage.getItem(key)||"[]");
    if (!Array.isArray(completed)) completed=[];
  } catch {completed=[];}
  const done = new Set(completed.filter(x=>typeof x==="string"));
  const total=weeks.reduce((n,w)=>n+w.tasks.length,0);
  root.innerHTML = '<div class="algo-progress"><div><strong>Практика по плану</strong> <span id="algoProgressText" aria-live="polite"></span></div><div class="meter" role="progressbar" aria-label="Прогресс по задачам" aria-valuemin="0" aria-valuemax="'+total+'" aria-valuenow="0" id="algoProgressBar"><i id="algoProgressFill"></i></div><small>Отметки сохраняются только в этом браузере. Это не синхронизация с USACO, CSES или AtCoder.</small></div>'
  + '<div class="algo-weeks">'
  + weeks.map((w,wi)=>'<details class="algo-week" '+(wi===0?'open':'')+'><summary><span class="algo-week-num">'+String(wi+1).padStart(2,"0")+'</span><span class="algo-week-name">'+esc(w.title)+'<small>'+esc(w.goal)+'</small></span><span class="algo-week-count" data-count="'+wi+'"></span></summary><div class="algo-week-body"><div class="algo-study-links"><span>Изучить:</span> '+w.usaco.map(s=>'<a target="_blank" rel="noopener noreferrer" href="'+esc(s[1])+'">'+esc(s[0])+' ↗</a>').join('')+'</div><ul class="algo-task-list">'+w.tasks.map((task,ti)=>{const id="w"+wi+"t"+ti;const href=url(task[1]);return '<li><label><input type="checkbox" data-algo-task="'+id+'" '+(done.has(id)?'checked':'')+'><span>'+(href?'<a href="'+href+'" target="_blank" rel="noopener noreferrer">'+esc(task[0])+' ↗</a>':esc(task[0]))+'</span></label></li>';}).join('')+'</ul></div></details>').join('')
  + '</div>';
  const text=document.getElementById("algoProgressText"),bar=document.getElementById("algoProgressBar"),fill=document.getElementById("algoProgressFill");
  function update(){
    let count=0;
    weeks.forEach((w,wi)=>{
      const n=w.tasks.filter((_,ti)=>done.has("w"+wi+"t"+ti)).length;
      count+=n;
      root.querySelector('[data-count="'+wi+'"]').textContent=n+" / "+w.tasks.length;
    });
    text.textContent=count+" / "+total+" задач";
    bar.setAttribute("aria-valuenow",String(count));
    fill.style.width=(count/total*100)+"%";
  }
  root.addEventListener("change",e=>{
    const input=e.target.closest("[data-algo-task]");
    if(!input)return;
    if(input.checked)done.add(input.dataset.algoTask);
    else done.delete(input.dataset.algoTask);
    try{localStorage.setItem(key,JSON.stringify([...done]));}catch{}
    update();
  });
  update();
})();
