console.log("Connected");
var timerEl = document.getElementById("Timer");
var startBtn = document.querySelector("#startBtn");
var questionsScreenElm = document.querySelector("#questions");
var choicesElm = document.querySelector("#choices");
var questionsArray = [
  {
    questionText: "This is the first question.",
    choices: ["1", "2", "3", "4"],
    answer: "1",
  },
  {
    questionText: "This is the second question.",
    choices: ["1", "2", "3", "4"],
    answer: "2",
  },
];
var currentQuestionIndex = 0;

// function startQuiz() {
//   var answerA = document.createElement("button");
//   answerA.innerHTML = A;
//   document.body.appendChild(answerA);
//   var answerB = document.createElement("button");
//   answerB.innerHTML = B;
//   document.body.appendChild(answerB);
//   var answerC = document.createElement("button");
//   answerC.innerHTML = C;
//   document.body.appendChild(answerC);
//   var answerD = document.createElement("button");
//   answerD.innerHTML = D;
//   document.body.appendChild(answerD);
//   var questionOne = {
//     Question: "Inside which HTML elment do we put the JavaScript?",
//     A: "<script>",
//     B: "<javascript>",
//     C: "<js>",
//     D: "<scripting>",
//     Answer: "<script>",
//   };
//   var questionTwo = {
//     Question:
//       "What is the correct syntax for referring to an external script called 'xxx.js'?",
//     A: "<script href='xxx.js'>",
//     B: "<script name='xxx.js'>",
//     C: "<script src='xxx.js'>",
//     Answer: "<script src='xxx.js'>",
//   };
//   var questionThree = {
//     Question: "How do you write 'Hello World' in an alert box?",
//     A: "alert('Hello World');",
//     B: "alertBox('Hello World');",
//     C: "msgBox('Hello World');",
//     D: "msg('Hello World');",
//     Answer: "alert('Hello World');",
//   };
//   var questionFour = {
//     Question: "How do you create a function in JavaScript?",
//     A: "function myFunction()",
//     B: "function = myFunction()",
//     C: "function:myFunction()",
//     Answer: "function myFunction()",
//   };

function startQuiz() {
  var startScreenElm = document.querySelector("#start-screen");
  startScreenElm.setAttribute("class", "hide");
  questionsScreenElm.removeAttribute("class");
  getQuestion();
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
    choicesElm.appendChild(choiceBtn);
  }
}

//   function questionOneDisplay(questionOne) {
//     questionOne.A.textContent = answerA;
//     questionOne.B.textContent = answerB;
//     questionOne.C.textContent = answerC;
//     questionOne.D.textContent = answerD;
//     if (answerA.addEventListener("click", questionTwoDisplay)) {
//       answer = true;
//     } else false;
//   }

//   function timer() {
//     var timerValue = 90;

//     var timeInterval = setInterval(function () {
//       timerValue--;
//       timerEl.textContent = "Time: " + timerValue;

//       if (timerValue === 0) {
//         clearInterval(timeInterval);
//       } else if (timerValue < 0) {
//         clearInterval(timeInterval);
//         timerValue = 0;
//       }
//       if (answer !== true) {
//         timerValue - 10000;
//       }
//     }, 1000);
//   }
//   timer();
//   questionOneDisplay();
// }
startBtn.addEventListener("click", startQuiz);
