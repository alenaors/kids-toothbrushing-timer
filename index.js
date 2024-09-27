const button = document.querySelector ('#myButton');

button.addEventListener ('click', function(){
    document.querySelector('#myAudio').play();
   timer();
   button.disabled = true;
})

function timer() {




let amountTime = 148;

function calculateTime() {
    const countdown = document.querySelector('#countdown');
    let minutes = Math.floor(amountTime/60);
    let seconds = amountTime%60;
    if (seconds<10){
        seconds= '0'+seconds;
    }

    countdown.textContent = `${minutes} : ${seconds}`;
    amountTime--;

    if (amountTime<0) {
        stopTimer();
        amountTime=0
    }

    function stopTimer() {
        clearInterval(timerId);
        tollGemacht();
    }

    function tollGemacht() {
        countdown.textContent = "Toll gemacht!!!";
    }
}
let timerId = setInterval(calculateTime, 1000);
}