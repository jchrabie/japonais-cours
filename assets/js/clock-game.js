(() => {
  "use strict";
  const $ = id => document.getElementById(id);
  const TOTAL = 10;
  const state = { deck: [], original: [], index: 0, firstTry: 0, attempts: new Map(), answered: new Set(), skipped: new Set(), selected: new Set(), current: null, locked: false, mode: "romaji" };

  const hKana = ["", "いち", "に", "さん", "よ", "ご", "ろく", "しち", "はち", "く", "じゅう", "じゅういち", "じゅうに"];
  const hRoma = ["", "ichi", "ni", "san", "yo", "go", "roku", "shichi", "hachi", "ku", "juu", "juuichi", "juuni"];
  const min = {1:["いっぷん","ippun"],2:["にふん","nifun"],3:["さんぷん","sanpun"],4:["よんぷん","yonpun"],5:["ごふん","gofun"],6:["ろっぷん","roppun"],7:["ななふん","nanafun"],8:["はっぷん","happun"],9:["きゅうふん","kyuufun"],10:["じゅっぷん","juppun"]};
  const tensK = {2:"にじゅう",3:"さんじゅう",4:"よんじゅう",5:"ごじゅう"};
  const tensR = {2:"nijuu",3:"sanjuu",4:"yonjuu",5:"gojuu"};

  function hour(h) {
    return [({4:"よじ",7:"しちじ",9:"くじ"})[h] || hKana[h]+"じ",
            ({4:"yoji",7:"shichiji",9:"kuji"})[h] || hRoma[h]+"ji"];
  }
  function minute(m) {
    if (!m) return ["",""];
    if (m <= 10) return min[m];
    if (m % 10 === 0) return [{20:"にじゅっぷん",30:"さんじゅっぷん",40:"よんじゅっぷん",50:"ごじゅっぷん"}[m],
      {20:"nijuppun",30:"sanjuppun",40:"yonjuppun",50:"gojuppun"}[m]];
    const unit = min[m % 10], ten = Math.floor(m/10);
    return [tensK[ten]+unit[0], tensR[ten]+unit[1]];
  }
  function kanjiNumber(n) {
    const d=["零","一","二","三","四","五","六","七","八","九"];
    if (n < 10) return d[n];
    if (n < 20) return "十"+(n%10?d[n%10]:"");
    return ({2:"二十",3:"三十",4:"四十",5:"五十"})[Math.floor(n/10)]+(n%10?d[n%10]:"");
  }
  function makeTime(h,m,p) {
    const [hk,hr]=hour(h), [mk,mr]=minute(m);
    const pk=p==="am"?"午前":p==="pm"?"午後":"";
    const pr=p==="am"?"gozen ":p==="pm"?"gogo ":"";
    return {h,m,p,label:`${String(h).padStart(2,"0")}:${String(m).padStart(2,"0")}`,
      kanji:pk+kanjiNumber(h)+"時"+(m===30?"半":m?kanjiNumber(m)+"分":""),
      kana:(p==="am"?"ごぜん":p==="pm"?"ごご":"")+hk+(m===30?"はん":mk),
      romaji:(pr+hr+(m===30?"han":mr)).trim()};
  }
  function randomTime(level) {
    const h=1+Math.floor(Math.random()*12);
    const m=level==="easy"?0:level==="medium"?Math.floor(Math.random()*12)*5:Math.floor(Math.random()*60);
    const p=level==="hard"?(Math.random()<.5?"am":"pm"):"";
    return makeTime(h,m,p);
  }
  function shuffle(a) { for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];} return a; }
  function question(level) {
    const correct=randomTime(level), options=[correct], used=new Set([correct.label+correct.p]);
    while(options.length<4){const t=randomTime(level),k=t.label+t.p;if(!used.has(k)){used.add(k);options.push(t);}}
    return {...correct,options:shuffle(options),key:correct.label+correct.p+"-"+Math.random().toString(36).slice(2)};
  }
  function shown(t){return t[state.mode];}
  function draw(t) {
    $("clockHourHand").setAttribute("transform",`rotate(${((t.h%12)+t.m/60)*30} 120 120)`);
    $("clockMinuteHand").setAttribute("transform",`rotate(${t.m*6} 120 120)`);
    $("clockDigital").textContent=t.label+(t.p==="am"?" · matin":t.p==="pm"?" · après-midi / soir":"");
    $("clockFace").setAttribute("aria-label","Horloge indiquant "+t.label);
  }
  function buildFace() {
    const ns="http://www.w3.org/2000/svg";
    for(let i=0;i<60;i++){
      const a=i*Math.PI/30, major=i%5===0, r1=major?94:99, r2=105, l=document.createElementNS(ns,"line");
      l.setAttribute("x1",120+Math.sin(a)*r1);l.setAttribute("y1",120-Math.cos(a)*r1);
      l.setAttribute("x2",120+Math.sin(a)*r2);l.setAttribute("y2",120-Math.cos(a)*r2);
      l.setAttribute("class","clock-tick"+(major?" major":""));$("clockTicks").append(l);
    }
    for(let i=1;i<=12;i++){
      const a=i*Math.PI/6,n=document.createElementNS(ns,"text");
      n.setAttribute("x",120+Math.sin(a)*79);n.setAttribute("y",120-Math.cos(a)*79);
      n.setAttribute("class","clock-number");n.textContent=i;$("clockNumbers").append(n);
    }
  }
  function start(items) {
    state.deck=[...items];state.original=[...items];state.index=0;state.firstTry=0;
    state.attempts.clear();state.answered.clear();state.skipped.clear();state.selected.clear();state.locked=false;
    $("clockSetup").style.display="none";$("clockResults").style.display="none";$("clockPlay").style.display="block";show();
    $("clockPlay").scrollIntoView({behavior:"smooth",block:"start"});
  }
  function begin() {
    state.mode=document.querySelector('input[name="clockMode"]:checked').value;
    const level=document.querySelector('input[name="clockDifficulty"]:checked').value;
    start(Array.from({length:TOTAL},()=>question(level)));
  }
  function show() {
    if(state.index>=state.deck.length){finish();return;}
    state.current=state.deck[state.index];state.locked=false;
    $("clockCounter").textContent=`Question ${state.index+1}/${state.deck.length}`;
    $("clockScore").textContent=`Réussites au premier essai : ${state.firstTry}`;
    $("clockProgress").style.width=`${state.index/state.deck.length*100}%`;
    $("clockMessage").textContent="";$("clockMessage").className="message";draw(state.current);
    const root=$("clockChoices");root.replaceChildren();
    state.current.options.forEach((t,i)=>{
      const b=document.createElement("button");b.type="button";b.className="kanji-qcm-choice clock-choice";
      const letter=document.createElement("span");letter.className="kanji-qcm-letter";letter.textContent=String.fromCharCode(65+i);
      const label=document.createElement("span");label.className="kanji-qcm-label";label.textContent=shown(t);
      b.append(letter,label);b.addEventListener("click",()=>answer(t,b));root.append(b);
    });
  }
  function answer(t,b) {
    if(state.locked)return;
    const good=t.label===state.current.label&&t.p===state.current.p,key=state.current.key;
    state.attempts.set(key,(state.attempts.get(key)||0)+1);
    if(!good){b.classList.add("is-wrong");b.disabled=true;$("clockMessage").textContent="Pas tout à fait. Essaie encore."; $("clockMessage").className="message bad";return;}
    state.locked=true;if(state.attempts.get(key)===1)state.firstTry++;state.answered.add(key);
    $("clockChoices").querySelectorAll("button").forEach(x=>{x.disabled=true;if(x.querySelector(".kanji-qcm-label").textContent===shown(state.current))x.classList.add("is-correct");});
    const q=state.current;
    $("clockMessage").textContent=`Bonne réponse ! ${q.kanji} · ${q.romaji}. ${q.m===30?"半 (はん) signifie « et demie ».":q.m===0?"時 (じ) indique l'heure.":"Attention aux prononciations particulières des minutes."}`;
    $("clockMessage").className="message good";
    window.setTimeout(()=>{state.index++;show();},950);
  }
  function finish() {
    state.locked=true;$("clockPlay").style.display="none";$("clockResults").style.display="block";
    const missed=state.original.filter(q=>!state.answered.has(q.key));
    $("clockSummary").textContent=`${state.original.length} questions · ${state.firstTry} réussite(s) au premier essai · ${missed.length} à revoir.`;
    state.selected=new Set(missed.map(q=>q.key));renderResults();$("clockProgress").style.width="100%";
    $("clockResults").scrollIntoView({behavior:"smooth",block:"start"});
  }
  function renderResults() {
    const sort=$("clockResultSort").value,rows=state.original.map((q,i)=>({q,i,ok:state.answered.has(q.key)}));
    if(sort==="errors")rows.sort((a,b)=>Number(a.ok)-Number(b.ok)||a.i-b.i);
    if(sort==="success")rows.sort((a,b)=>Number(b.ok)-Number(a.ok)||a.i-b.i);
    const root=$("clockResultRows");root.replaceChildren();
    rows.forEach(({q,ok})=>{
      const row=document.createElement("div");row.className="result-row"+(ok?"":" needs-review");
      const label=document.createElement("label");label.className="result-pick";
      const cb=document.createElement("input");cb.type="checkbox";cb.checked=state.selected.has(q.key);
      cb.addEventListener("change",()=>{cb.checked?state.selected.add(q.key):state.selected.delete(q.key);updateSelection();});
      const word=document.createElement("span");word.className="result-word";
      const strong=document.createElement("strong");strong.textContent=q.label;
      const reading=document.createElement("span");reading.className="muted";reading.textContent=q.kanji+" · "+q.romaji;
      word.append(strong,reading);label.append(cb,word);
      const tag=document.createElement("span");tag.className="tag "+(ok?"review-good":"review-bad");tag.textContent=ok?"Réussi":"À revoir";
      row.append(label,tag);root.append(row);
    });updateSelection();
  }
  function updateSelection(){
    const n=state.original.filter(q=>!state.answered.has(q.key)).length;
    $("clockSelectionCount").textContent=`${n} question(s) à revoir · ${state.selected.size} sélectionnée(s).`;
    $("clockReplayMissed").disabled=!n;$("clockReplaySelected").disabled=!state.selected.size;
  }
  function replay(items){if(items.length)start(items.map(q=>({...q,options:shuffle([...q.options])})));}
  $("startClockGame").addEventListener("click",begin);
  $("clockSkip").addEventListener("click",()=>{if(!state.locked){state.skipped.add(state.current.key);state.index++;show();}});
  $("clockFinish").addEventListener("click",finish);
  $("clockResultSort").addEventListener("change",renderResults);
  $("clockReplayMissed").addEventListener("click",()=>replay(state.original.filter(q=>!state.answered.has(q.key))));
  $("clockReplaySelected").addEventListener("click",()=>replay(state.original.filter(q=>state.selected.has(q.key))));
  $("clockReplayAll").addEventListener("click",()=>replay(state.original));
  $("clockBack").addEventListener("click",()=>{$("clockResults").style.display="none";$("clockSetup").style.display="block";});
  buildFace();
})();