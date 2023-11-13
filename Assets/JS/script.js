var timerEl = document.getElementById("Timer");
var startQuiz = document.querySelector("startBtn");

startQuiz.addEventListener("click", function () {
    var questionOne =
    var questionTwo = [""]
    var questionThree = [""]
    var questionFour = [""]
    var questionOneAnswers = [""]
    var questionTwoAnswers = [""]
    var questionThreeAnswers = [""]
    var questionFourAnswers = [""]


  
    function timer() {
    var timerEl = 90;

    var timeInterval = setInterval(function () {
      timerEl--;
      timerEl.textContent = "Time: " + timerEl;

      if (timerEl === 0) {
        clearInterval(timeInterval);
      }
      if (answer !== correct) {
        timerEl - 10;
      }
    }, 1000);

  }
  function
});
startQuiz();
