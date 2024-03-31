document.addEventListener('DOMContentLoaded', function(){
    gameOpener();
    attachEventListeners();
})
const firstMove = ['Attempt Takedown', 'Pull guard'];
const moveTop = ['Pass Guard', 'Attempt Leglock'];
const moveBottom = ['Attempt Sweep', 'Attempt Submission'];
const block = 'Blocked move';
const guardPassed = ['Attempt side control', 'Attempt for mount']

const gameStart = document.querySelector('#main-game').innerHtml(``)

var difficulty = '';

function gameOpener(){
    document.querySelector('#main-game').innerHTML = `<div class="start-menu" id="start-match">
    <p>Start Match</p>
</div>
<div class="start-menu" id="difficulty">
    <p>Choose your belt</p>
</div>
<div class="start-menu" id="rules">
    <p>Tutorial</p>
</div>`
}

function attachEventListeners(){

    const difficultyDiv = document.querySelector('#difficulty');
    
    if (difficultyDiv){
        difficultyDiv.addEventListener('click', function(){
            difficultyPage();
        })
        
}}

function difficultyPage(){
    document.querySelector('#main-game').innerHTML = `<div class="start-menu belts" id="white-belt">
        <p>White Belt</p>
        <img src='/assets/images/-BJJ_White_Belt.png' alt='White belt'>
        </div>
        <div class="start-menu belts" id="purple-belt">
        <p>Purple Belt</p>
        <img src='/assets/images/-BJJ_Purple_Belt.png' alt='Purple belt'>
        </div>
        <div class="start-menu belts" id="black-belt">
        <p>Black Belt</p>
        <img src='/assets/images/-BJJ_Black_Belt.png' alt='Black belt'>
        </div>`;
        attachBeltListener()
}
function attachBeltListener(){
    document.querySelector('#white-belt').addEventListener('click', function(){
        difficulty = 'easy';
        console.log('Difficulty set to easy')
    });
    document.querySelector('#purple-belt').addEventListener('click', function(){
        difficulty = 'medium';
        console.log('Difficulty set to medium')
    });
    document.querySelector('#black-belt').addEventListener('click', function(){
        difficulty = 'hard';
        console.log('Difficulty set to hard')
    });
}

