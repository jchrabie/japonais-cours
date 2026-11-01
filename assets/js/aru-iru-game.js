(() => {
"use strict";
const $ = id => document.getElementById(id);
const questions = [
{fr:"Le livre est sur le bureau.",kana:"ほんは つくえの うえに ___。",kanji:"本は机の上に ___。",romaji:"Hon wa tsukue no ue ni ___。",a:"あります",p:"あります",n:"ある",why:"本 (hon) est une chose : on utilise ある. 上 (うえ) = au-dessus."},
{fr:"Le chat est sous la table.",kana:"ねこは テーブルの したに ___。",kanji:"猫はテーブルの下に ___。",romaji:"Neko wa teeburu no shita ni ___。",a:"います",p:"います",n:"いる",why:"猫 (neko) est un être vivant : on utilise いる. 下 (した) = dessous."},
{fr:"Il y a un chien devant la maison.",kana:"いえの まえに いぬが ___。",kanji:"家の前に犬が ___。",romaji:"Ie no mae ni inu ga ___。",a:"います",p:"います",n:"いる",why:"犬 (inu) est vivant : います. 前 (まえ) = devant / avant."},
{fr:"Il y a une voiture à gauche du magasin.",kana:"みせの ひだりに くるまが ___。",kanji:"店の左に車が ___。",romaji:"Mise no hidari ni kuruma ga ___。",a:"あります",p:"あります",n:"ある",why:"車 (kuruma) est une chose : あります. 左 (ひだり) = gauche."},
{fr:"Le réveil est à droite du lit.",kana:"めざましどけいは ベッドの みぎに ___。",kanji:"目覚まし時計はベッドの右に ___。",romaji:"Mezamashi-dokei wa beddo no migi ni ___。",a:"あります",p:"あります",n:"ある",why:"時計 est un objet : あります. 右 (みぎ) = droite."},
{fr:"Il y a un enfant dans la chambre.",kana:"へやの なかに こどもが ___。",kanji:"部屋の中に子供が ___。",romaji:"Heya no naka ni kodomo ga ___。",a:"います",p:"います",n:"いる",why:"子供 (kodomo) est une personne : います. 中 (なか) = à l'intérieur."},
{fr:"Le vélo est derrière la maison.",kana:"じてんしゃは いえの うしろに ___。",kanji:"自転車は家の後ろに ___。",romaji:"Jitensha wa ie no ushiro ni ___。",a:"あります",p:"あります",n:"ある",why:"自転車 est un objet : あります. 後ろ (うしろ) = derrière."},
{fr:"Il y a un chat à côté du bureau.",kana:"つくえの となりに ねこが ___。",kanji:"机の隣に猫が ___。",romaji:"Tsukue no tonari ni neko ga ___。",a:"います",p:"います",n:"いる",why:"猫 est vivant : います. 隣 (となり) = à côté."},
{fr:"Le livre n'est pas dans le sac.",kana:"ほんは かばんの なかに ___。",kanji:"本は鞄の中に ___。",romaji:"Hon wa kaban no naka ni ___。",a:"ありません",p:"ありません",n:"ない",why:"Livre = chose ; négatif poli de ある : ありません."},
{fr:"Le chien n'est pas devant l'école.",kana:"いぬは がっこうの まえに ___。",kanji:"犬は学校の前に ___。",romaji:"Inu wa gakkou no mae ni ___。",a:"いません",p:"いません",n:"いない",why:"Chien = être vivant ; négatif poli de いる : いません."}
];
let deck=[],index=0,score=0,mode="kana",form="polite",locked=false;
function shuffle(a){return [...a].sort(()=>Math.random()-.5)}
function render(){
 if(index>=deck.length){$("aruSession").hidden=true;$("aruResults").hidden=false;$("aruSummary").textContent=`${score} bonne(s) réponse(s) au premier essai sur ${deck.length}.`;return}
 const q=deck[index];locked=false;
 $("aruCounter").textContent=`Phrase ${index+1} / ${deck.length}`;$("aruScore").textContent=`Réussites : ${score}`;
 $("aruProgress").style.width=`${index/deck.length*100}%`;
 $("aruFrench").textContent=q.fr;
 const sentence=mode==="kanji"?q.kanji:mode==="romaji"?q.romaji:q.kana;
 $("aruSentence").textContent=sentence;
 $("aruFeedback").textContent="";$("aruNext").hidden=true;
 const correct=form==="plain"?q.n:q.p;
 const choices=shuffle([correct,...(correct==="あります"?["います","ありません","いません"]:correct==="います"?["あります","いません","ありません"]:correct==="ある"?["いる","ない","いない"]:["ある","いる","いない"])]);
 const root=$("aruChoices");root.replaceChildren();
 choices.forEach(choice=>{const b=document.createElement("button");b.type="button";b.className="kanji-qcm-choice";b.textContent=choice;b.addEventListener("click",()=>answer(choice,b,correct,q));root.append(b)});
}
function answer(choice,button,correct,q){
 if(locked)return;
 if(choice!==correct){button.classList.add("is-wrong");button.disabled=true;$("aruFeedback").textContent="Pas tout à fait. Essaie encore.";return}
 locked=true;score++;button.classList.add("is-correct");
 $("aruChoices").querySelectorAll("button").forEach(b=>{if(b!==button)b.disabled=true});
 $("aruFeedback").textContent="Bonne réponse ! "+q.why;$("aruNext").hidden=false;
}
function start(){mode=$("aruMode").value;form=$("aruForm").value;deck=shuffle(questions).slice(0,$("aruCount").value==="all"?questions.length:10);index=0;score=0;$("aruSetup").hidden=true;$("aruResults").hidden=true;$("aruSession").hidden=false;render()}
$("aruStart").addEventListener("click",start);$("aruNext").addEventListener("click",()=>{index++;render()});$("aruReplay").addEventListener("click",()=>{$("aruSetup").hidden=false;$("aruResults").hidden=true});
})();