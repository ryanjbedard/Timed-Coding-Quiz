var timerEl = document.getElementById('Timer');
var startQuiz =document.querySelector('startBtn') 

function startQuiz() {
    timerID = setInterval(clockTick, 1000);
    timerEl.textContent = 'Time';
    var landingScreenEl = document.getElementById("start-screen");
    landingScreenEl.setAttribute('class','hide');
    questionsEl.removeAttribute("class");
    getQuestion();
}
function getQuestion() {
    var currentQuestion = questions[currentQuestionIndex];
    var promptEl = document.getElementById("questions-words");
    promptEl.textContent = currentQuestion.prompt;
    choicesEl.innerHTML = "";
    currentQuestion.options.forEach(
        fucntion (choice, i) {
            var choiceBtn = document.createElement("button");
            choiceBtn.setAttribute("value", choice);
            choiceBtn.textContent = i + 1 + ". " + choice;
            choiceBtn.onclick = questionClick;
            ChoicesE1.appendChild(choiceBtn);

        }
    );
}


// function timer() {
//     var timeLeft = 90;

//     var timeInterval = setInterval(function(){
//         timeLeft--;
//         timerEl.textContent = "Time: " + timeLeft;

//         if (timeLeft === 0){
//             clearInterval(timeInterval);
//         }
//     }, 1000);
// }

// startQuiz.addEventListener("click", function() {

// })
// timer();