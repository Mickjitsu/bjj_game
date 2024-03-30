document.addEventListener('DOMContentLoaded', gameOpener)
const firstMove = ['Attempt Takedown', 'Pull guard'];
const moveTop = ['Pass Guard', 'Attempt Leglock'];
const moveBottom = ['Attempt Sweep', 'Attempt Submission'];
const block = 'Blocked move';
const guardPassed = ['Attempt side control', 'Attempt for mount']

const gameStart = document.querySelector('#main-game').innerHtml(``)

function gameOpener(){
    document.querySelector('#main-game').innerHTML = `<div class="start-menu">
    <p>Start Match</p>
</div>
<div class="start-menu">
    <p>Choose your belt</p>
</div>
<div class="start-menu">
    <p>Tutorial</p>
</div>`
}


