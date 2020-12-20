var rlSync= require("readline-sync");
var chalk=require("chalk");

console.log(chalk.green("Let' start the game!"));
console.log("-------------------------------------------------");
var score=0;
var name = rlSync.question(chalk.bgYellow.underline("Enter your Name"));
console.log(chalk.blue("Hey," + chalk.cyan.underline.bold(name) + " Check your brooklyn nine nine knowledge"));

console.log("-------------------------------------------------");

ques1={
  ques:`Which emoji is Gina the human form of?
    A)Winky face

    B)Heart eyes

    C)100

    D)Yawning Face  \n`,ans:"c"
};

ques2={
  ques:`On which site was Holt banned from , because he was mistaken as a bot?
  A)Twitter

  B)Facebook

  C)Instagram

  D)Snapchat
  \n
  `,ans:"a"
}

ques3={
  ques:`What is Jake's favourite cake ? 
  A) Chocolate

  B)Vanilla

  C)Blue

  D)Strawberry
  \n
  `,ans:"c"
}


ques4={
  ques:`Complete the sentence : What kind of woman doesn't own a/an ______
  
  A)Perfume

  B)Hairdryer

  C)Purse

  D)Axe
  \n`,ans:"d"
}


ques5={
  ques:`Who is Terry's youngest daughter? 
  A)Cagney

  B)Lacey

  C)Ava

  D)Tia \n`,ans:"c"
}

ques6={
  ques:`Who is Amy's Friend? 
  A)Kylie

  B)Sophia

  C)Vivian

  D)Tina \n
  `,ans:"a"
}

var allQues=[ques1,ques2,ques3,ques4,ques5,ques6];

for(var i=0; i < allQues.length ; i++){
  var answer=rlSync.question(chalk.magentaBright(allQues[i].ques));
  if(answer === allQues[i].ans){
    console.log(chalk.green("yeah , you are right"));
    score+=1;
  }
  else{
    console.log(chalk.bgRed("Nope, You are wrong"));
  }
}
//highscore

var highScore = [{ name: "Simran", score: "6"}, {name: "Kittu", score: "5"}, {name: "Jugni", score: "4"}];

console.log(chalk.blue(" Your final score is: ") + chalk.blue.bold(score));
console.log("")
console.log(chalk.yellow("High-Scores List"))

for(var i=0; i<highScore.length; i++){
  console.log(chalk.yellow("Name: "+chalk.blue.bold(highScore[i].name)+"     Score: "+chalk.blue.bold(highScore[i].score)));
}
console.log("------------------------------------------------------------")
if (score >= highScore[0].score ){
  console.log(chalk.magenta(`CONGRATULATION!!!
## Send a screenshot you have created a High-Score.##`))
}
else{
  console.log(chalk.bgGray("## Unfortunately you haven't beaten the High-Score ##"))
  console.log(chalk.bgGreen("## Lets connect and know more about the topic ##"))
}
var str = "\nClick above to connect with me on LinkedIn ";
var result = str.link(chalk.blue("https://www.linkedin.com/in/simran-birla-31b3901a4/"));
console.log(result)
