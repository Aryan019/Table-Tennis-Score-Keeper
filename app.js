const p1Button = document.querySelector('#p1Button')
const p2Button = document.querySelector('#p2Button')
const ph1 = document.querySelector('#p1Score')
const ph2 = document.querySelector('#p2Score')
const WinningScoreSelect = document.querySelector('#playto')
const rButton = document.querySelector('#reset')

// Setting the winningscore initially at 3 
let winningScore = 3;
let p1Score = 0;
let p2Score = 0;
let isGameOver = false;

p1Button.addEventListener('click',function (){

    if(!isGameOver){
        p1Score ++;
    if(p1Score === winningScore){

        isGameOver = true
        ph1.innerText = p1Score;
        ph1.classList.add('winner')
        ph2.classList.add('loser')

        p1Button.disabled = true;
        p2Button.disabled = true;
   

    }
    ph1.innerText = p1Score;

    
    }

})

p2Button.addEventListener('click',function (){

    if(!isGameOver){
        p2Score ++;
    if(p2Score === winningScore){
        ph2.innerText = p2Score;
        isGameOver = true

        ph2.classList.add('winner')
        ph1.classList.add('loser')

        p1Button.disabled = true;
        p2Button.disabled = true;
   

    }

    ph2.innerText = p2Score;

    
    }

})

WinningScoreSelect.addEventListener('change',function(){
    // this.value
    // The above element will return a string 
    winningScore = parseInt(this.value);

    // The below statement is written here because 
    // if i change the winning score that i want to keep 
    // i want to reset the scores again to begin the match 
    reset();


})

rButton.addEventListener('click',reset)

function reset(){

    p1Score = 0;
    p2Score = 0;
    ph1.innerText = p1Score;
    ph2.innerText = p2Score;
    isGameOver = false;


    // Which ever class it finds from both of them it removes it 
    ph1.classList.remove('winner','loser')
    ph2.classList.remove('winner','loser')


    p1Button.disabled = false;
    p2Button.disabled = false;
   

}