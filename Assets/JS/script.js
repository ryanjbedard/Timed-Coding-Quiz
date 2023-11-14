var timerEl = document.getElementById("Timer");
var startBtn = document.querySelector("#startBtn");

function startQuiz() {
  var questionOne = {
    Question: "Inside which HTML elment do we put the JavaScript?",
    A: "<script>",
    B: "<javascript>",
    C: "<js>",
    D: "<scripting>",
    Answer: "<script>",
  };
  var questionTwo = {
    Question:
      "What is the correct syntax for referring to an external script called 'xxx.js'?",
    A: "<script href='xxx.js'>",
    B: "<script name='xxx.js'>",
    C: "<script src='xxx.js'>",
    Answer: "<script src='xxx.js'>",
  };
  var questionThree = {
    Question: "How do you write 'Hello World' in an alert box?",
    A: "alert('Hello World');",
    B: "alertBox('Hello World');",
    C: "msgBox('Hello World');",
    D: "msg('Hello World');",
    Answer: "alert('Hello World');",
  };
  var questionFour = {
    Question: "How do you create a function in JavaScript?",
    A: "function myFunction()",
    B: "function = myFunction()",
    C: "function:myFunction()",
    Answer: "function myFunction()",
  };

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
// startQuiz;
startBtn.addEventListener("click", startQuiz);
