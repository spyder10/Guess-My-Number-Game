'use strict';

let number = Math.floor(Math.random()*20)+1;
let highscore = 0; 
let score = 20;
console.log(document);
document.querySelector('.check').addEventListener('click',
    function(){
        let guessValue = Number(document.querySelector('.guess').value) ;
        if(guessValue == 0){
            document.querySelector('.message').textContent = 'No number';
        }
        if(guessValue == number){
            document.querySelector('.message').textContent = 'Correct Guess, Hit Play Again';
            document.querySelector('.number').textContent = String(number);
            document.querySelector('body').style.backgroundColor = 'green';
            if(score > highscore){
                highscore = score;
                document.querySelector('.highscore').textContent = highscore;
            }
        }
        else if(guessValue < number){
            document.querySelector('.message').textContent = 'Too Low';
            score--;
            document.querySelector('.score').textContent = score;
            if(score == 0){
                document.querySelector('.message').textContent = 'You Lost the Game';
            }
        }
        else if(guessValue > number){
            document.querySelector('.message').textContent = 'Too High';
            score--;
            document.querySelector('.score').textContent = score;
            if(score == 0){
                document.querySelector('.message').textContent = 'You Lost the Game';
            }
        }
    
    }
);
document.querySelector('.again').addEventListener(
    'click',function(){
        number = Math.floor(Math.random()*20)+1;
        document.querySelector('.message').textContent = 'Start guessing...';
        score = 20;
        document.querySelector('.score').textContent = score;
        document.querySelector('.number').textContent = '?';
        document.querySelector('.guess').value = " ";
        document.querySelector('body').style.backgroundColor = '#222';
    }
);
let helpButton = document.querySelector('.help');
let modal = document.querySelector('.modal');
let overlay = document.querySelector('.overlay');
let closeModalButton = document.querySelector('.close');
helpButton.addEventListener('click',
    function(){
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
});
document.addEventListener('keydown',function(e){
    if(e.key == 'Escape'){
        modal.classList.add('hidden');
        overlay.classList.add('hidden');
    }
    
});
overlay.addEventListener('click',function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
});
closeModalButton.addEventListener('click',function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
});
