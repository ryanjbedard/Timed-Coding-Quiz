var timerEl = document.getElementById("Timer");
var startBtn = document.querySelector("startBtn");

function startQuiz() {
  var questionOne = "Inside which HTML elment do we put the JavaScript?";
  var questionTwo =
    "What is the correct syntax for referring to an external script called 'xxx.js'?";
  var questionThree = "How do you write 'Hello World' in an alert box?";
  var questionFour = "How do you create a function in JavaScript?";
  var questions = [questionOne, questionTwo, questionThree, questionFour];
  var questionOneAnswers = ["<script>", "<javascript>", "<js>", "<scripting>"];
  var questionTwoAnswers = [
    "<script href='xxx.js'>",
    "<script name='xxx.js'>",
    "<script src='xxx.js'>",
  ];
  var questionThreeAnswers = [
    "alert('Hello World');",
    "alertBox('Hello World');",
    "msgBox('Hello World');",
    "msg('Hello World');",
  ];
  var questionFourAnswers = [
    "function myFunction()",
    "function = myFunction()",
    "function:myFunction()",
  ];
  var answers = [
    questionOneAnswers,
    questionTwoAnswers,
    questionThreeAnswers,
    questionFourAnswers,
  ];

  function timer() {
    var timerEl = 90;

    var timeInterval = setInterval(function () {
      timerEl--;
      timerEl.textContent = "Time: " + timerEl;

      if (timerEl === 0) {
        clearInterval(timeInterval);
      }
      if (answer !== correct) {
        timerEl - 10000;
      }
    }, 1000);
  }
  //   function
}
startQuiz;
starBtn.addEventListener("click", startQuiz);
