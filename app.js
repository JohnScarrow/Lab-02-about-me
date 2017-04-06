'use strict';

function mainQuestion(){
console.log('best page ever');
var answer1 = prompt('Do you know me? Do I Like to Drive for fun?');
var score1;
var answer2 = prompt('Do I like to Snowboard?');
var score2;
var answer3 = prompt('Is there CSS on my webpage');
var score3;
var answer4 = prompt('Can I breath under water');
var score4;
var answer5 = prompt('You think you know me?');
var score5;
var message;
var forClient;

answer1.toLowerCase.trim;
answer2.toLowerCase.trim;
answer3.toLowerCase.trim;
answer4.toLowerCase.trim;
answer5.toLowerCase.trim;

if (answer1=='yes'){
  score1="OK";
}
else {
  score1=="Naw";
};
if (answer2=='yes'){
  score2="OK";
}
else {
  score2="Naw";
};
if (answer3=='yes'){
  score3="OK";
}
else {
  score3="Naw";
};
if (answer4=='no'){
  score4="OK";
}
else {
  score4="Naw";
};
if (answer5=='yes'){
  score5="OK";
}
else {
  score5="Naw";
};

message = (score1+score2+ score3+ score4+ score5);

  if (message=='OKOKOKOKOK'){
    forClient="Wow, you do know things about me";
  }
  else {
    forClient="You ain't know me";
};
alert(forClient);
}

function numberQuestion(){
var favNumber;
var completeGame = false;
var clientGuess;

var clientAttempt;
for (clientAttempt = 0; clientAttempt < 4 && completeGame == false; clientAttempt++) {
  // Runs 5 times, with values of step 0 through 4.
  clientGuess = prompt('whats my favorite number')
  if (clientGuess ==2){
    completeGame = true;
    alert('you got it')
  }
  else if (clientGuess < 2){
    alert("guess is to low");
  }
  else{
    alert("guess is to high");
  }
}
}

function planetsQuestion(){
var planets=["mercury", "venus", "earth", "mars"];
var planetCount=0;
var planetGuess;
var planetAttempt;
var planetDone=false;

for (planetAttempt = 0; planetAttempt < 6; planetAttempt++) {
    planetGuess = prompt('Closest 4 planets?');
    console.log('planet guess ' + planetGuess);
    if (planets.includes(planetGuess)) {
        alert('You got one right!');
        planetCount++;
        alert('You got ' + planetCount + ' out of 4!')
    }
}
}

mainQuestion();
numberQuestion();
planetsQuestion();

console.log(answer1);
console.log(score1);
console.log(answer2);
console.log(score2);
console.log(answer3);
console.log(score3);
console.log(answer4);
console.log(score4);
console.log(answer5);
console.log(score5);
console.log(message);
console.log(forClient);
