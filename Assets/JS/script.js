var timerEl =document.getElementById('Timer')

function countdown() {
    var timeLeft = 90;

    var timeInterval = setInterval(function(){
        timeLeft--;
        timerEl.textContent = "Time: " + timeLeft;

        if (timeLeft === 0){
            clearInterval(timeInterval);
        }
    }, 1000);
}
countdown();