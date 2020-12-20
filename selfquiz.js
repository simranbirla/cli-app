var readLine=require("readline-sync");
console.log("Okay!, Let's start the game");
console.log("--------------------------------");
var score=0;

var name = readLine.question("Enter your name? ")
console.log("")
console.log("Welcome "+name+", Lets see how well you know Me")
console.log("------------------------------------------------------------");

function check(ques,ans){
  var answer=readLine.question(ques);
  if(answer === ans){
    console.log("Wohoo!,You are correct");
    score+=1;
  }
  else{
    console.log("Oops,wrong answer");
  }
}


var Questions=[{ques : "What username do I have on discord?" , ans :"simc"},{ques :"What brand sneakers do I own?" , ans :"skechers"} , {ques:"What is my favourite color?" , ans:"black"} ,{ques:"What is my favourite ice-candy flavour?" , ans:"orange"},{ques:"Where do I live",ans:"kalyan"}];

for(let i=0; i < 5 ; i++ ){
  check(Questions[i].ques, Questions[i].ans);
}

console.log("Your total score is", + score);
