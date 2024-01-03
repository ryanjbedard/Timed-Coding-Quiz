console.log("Connected");
var timerEl = document.getElementById("Timer");
var startBtn = document.querySelector("#startBtn");
var questionsScreenElm = document.querySelector("#questions");
var choicesElm = document.querySelector("#choices");
var questionsArray = [
  {
    questionText: "Inside which HTML element do we put the JavaScript?",
    choices: ["<script>", "<javascript>", "<js>", "<scripting>"],
    answer: "<script>",
  },
  {
    questionText: "What is the correct syntax for referring to an external script called 'xxx.js'",
    choices: ["<script href='xxx.js'>", "<script name='xxx.js'>", "<script src='xxx.js'>"],
    answer: "<script name='xxx.js'>",
  },
  {
    questionText: "How do you write 'Hello World' in an alert box?",
    choices: ["alert('Hello World');", "alertBox('Hello World');", "msgBox('Hello World');", "msg('Hello World');"],
    answer: "alert('Hello World')",
  },
  {
    questionText: "How do you create a function in JavaScript?",
    choices: ["function myFunction()", "function = myFunction()", "function:myFunction()"],
    answer: "function myFunction()",
  }
];
var currentQuestionIndex = 0;

// starts the quiz
function startQuiz() {
  var startScreenElm = document.querySelector("#start-screen");
  startScreenElm.setAttribute("class", "hide");
  questionsScreenElm.removeAttribute("class");
  getQuestion();
  function timer() {
    var timerValue = 90;

    var timeInterval = setInterval(function () {
      timerValue--;
      timerEl.textContent = "Time: " + timerValue;

      if (timerValue === 0) {
        clearInterval(timeInterval);
      } else if (timerValue < 0) {
        clearInterval(timeInterval);
        timerValue = 0;
      }
      if (answer !== true) {
        timerValue - 10000;
      }
    }, 1000);
  }
  timer();
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


  // function questionOneDisplay(questionOne) {
  //   questionOne.A.textContent = answerA;
  //   questionOne.B.textContent = answerB;
  //   questionOne.C.textContent = answerC;
  //   questionOne.D.textContent = answerD;
  //   if (answerA.addEventListener("click", questionTwoDisplay)) {
  //     answer = true;
  //   } else false;
  // }

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
