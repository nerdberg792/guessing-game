'use strict'
let secretNumber = Math.trunc(Math.random()*20)+1 ;
let score =20 ; 
let highscore=0 ; 
document.querySelector('.number').textContent='?' ;
document.querySelector('.check').addEventListener('click', function(){
  const guess = Number(document.querySelector('.guess').value) ;
  if(!guess){
    document.querySelector('.message').textContent='Please enter a number' ;
  }
  else if(guess===secretNumber){
    document.querySelector('.message').textContent='Correct Number' ;
    document.querySelector('body').style.backgroundColor = '#60b347' ;
    document.querySelector('.number').style.width='30rem';
    document.querySelector('.number').textContent=secretNumber ;

    if(score>highscore){
      highscore=score ; 
    }
    document.querySelector('.highscore').textContent=highscore ;
  }
  else{
    document.querySelector('.message').textContent=guess>secretNumber?'Too high':'Too low' ;
    score-- ; 
    document.querySelector('.scoreNumber').textContent=score ;
  }
 document.querySelector('.guess').value='';
  

})
document.querySelector('.again').addEventListener('click',function(){
 document.querySelector('.message').textContent='Start guesdding....' ;
 secretNumber = Math.trunc(Math.random()*20)+1 ;
 document.querySelector('body').style.backgroundColor = '#222' ;
 document.querySelector('.number').style.width='15rem';
 score=20 ;
 document.querySelector('.scoreNumber').textContent=score ;
 document.querySelector('.number').textContent='?' ;
 document.querySelector('.guess').value='';
 
})