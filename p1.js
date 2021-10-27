//window.addEventListener('load',init);
let time=5;
let score=0;
let isPlaying;

const seconds=document.querySelector('#timer');
const wordinput=document.querySelector('#guess');
const currentword=document.querySelector('#word');
const scoreDisplay=document.querySelector('#score-show');
const timeDisplay=document.querySelector('#timerr');
const message=document.querySelector('#msg');

const words = [
    'complexionally','unmeant','marchland','telephoto','transoceanic','creusot','contusive','fraternising','surfacing',
'pottering','heron','diplomatic','isochromatic','cockalorum','resolution','idealizing','stereotomy','nonconstructive','prerevelation',
'spectacularity'
];

function init(){
    //console.log('hello');
    showWords(words);
    setInterval(countdown,1000);
}
function showWords(words){
   const rand=Math.floor(Math.random()*words.length());
   currentword.innerHtml=words[rand];
}

function countdown(){
    if(time>0){
        time--;
    }
    else if(time==0) isPlaying=false;
    timeDisplay.innerHTML=time;
}