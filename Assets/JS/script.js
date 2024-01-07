console.log("Connected");
var highScoreElm = document.querySelector("#view-high-score")
var backBtnElm = document.querySelector("#backBtn")
var timerEl = document.getElementById("Timer");
var startBtn = document.querySelector("#startBtn");
var questionsScreenElm = document.querySelector("#questions");
var choicesElm = document.querySelector("#choices");
const initialsElm = document.querySelector('#initialField')


var questionsArray = [
  {
    questionText: "Inside which HTML element do we put the JavaScript?",
    choices: ["<script>", "<javascript>", "<js>", "<scripting>"],
    answer: "<script>",
  },
  {
    questionText:
      "What is the correct syntax for referring to an external script called 'xxx.js'",
    choices: [
      "<script href='xxx.js'>",
      "<script name='xxx.js'>",
      "<script src='xxx.js'>",
    ],
    answer: "<script name='xxx.js'>",
  },
  {
    questionText: "How do you write 'Hello World' in an alert box?",
    choices: [
      "alert('Hello World');",
      "alertBox('Hello World');",
      "msgBox('Hello World');",
      "msg('Hello World');",
    ],
    answer: "alert('Hello World')",
  },
  {
    questionText: "How do you create a function in JavaScript?",
    choices: [
      "function myFunction()",
      "function = myFunction()",
      "function:myFunction()",
    ],
    answer: "function myFunction()",
  },
];
var currentQuestionIndex = 0;
var timerValue = 90;

var timeInterval;

backBtnElm.classList.add('hide');
highScoreElm.classList.add('hide');

// starts the quiz
function startQuiz() {
  var startScreenElm = document.querySelector("#start-screen");
  highScoreElm.classList.add('hide');
  backBtnElm.classList.add('hide');
  startScreenElm.classList.add('hide');
  questionsScreenElm.classList.remove("hide");
  getQuestion();
  timer();
}

function displayMessage(type,message){
  msgDiv.textContent = message;
  msgDiv.setAttribute("class", type);
}

function timer() {
  timerEl.textContent = "Time: " + timerValue;

  timeInterval = setInterval(function () {
    timerValue--;
    timerEl.textContent = "Time: " + timerValue;

    if (timerValue <= 0 || questionsArray.length === currentQuestionIndex) {
      clearInterval(timeInterval);
    } 

  }, 1000);
}
function getQuestion() {
  var currentQuestionObj = questionsArray[currentQuestionIndex];
  console.log(currentQuestionObj);
  var questionTitleElm = document.querySelector("#question-title");
  questionTitleElm.textContent = currentQuestionObj.questionText;
  choicesElm.innerHTML = "";
  for (var i = 0; i < currentQuestionObj.choices.length; i++) {

    var choiceBtn = document.createElement("button");

    var currentChoice = currentQuestionObj.choices[i];
    choiceBtn.textContent = currentChoice;
    choiceBtn.setAttribute("value", currentChoice);

    choiceBtn.addEventListener('click', function(){
      console.log(this.textContent);
      currentQuestionIndex++;
     
      // if(currentChoice !== currentQuestionObj.answer){
      //   return timerValue -10;
      // }

      if(questionsArray.length === currentQuestionIndex){
    gameOver()
        // run game over function
      }else{
        getQuestion()
      }
    })

    choicesElm.appendChild(choiceBtn);
  }
}

// create function to check answer:


// create function called gameover

function gameOver(){

  // display the user input screen
  document.querySelector('#end-screen').classList.remove('hide')
  // hide question screen
  questionsScreenElm.classList.add("hide");

}

// create a function that will save the initials and score in localStorage
function saveInitials(){
  backBtnElm.classList.remove('hide');
  const initials = initialsElm.value;

// hide the user input
document.querySelector('#end-screen').classList.add('hide')
// display high score screen.
document.querySelector('#scores').classList.remove('hide')

localStorage.setItem('initials', initials)
localStorage.setItem('time', timerValue)

}
// take user input for initials and save the score to localStorage.
// 

startBtn.addEventListener("click", startQuiz);
document.querySelector('#submit').addEventListener("click",saveInitials)