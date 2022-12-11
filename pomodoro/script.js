// global vars
const timeDisplay = document.querySelector('.container .time');
const startBtn = document.getElementById('start');
const pauseBtn = document.getElementById('pause');
const endBtn = document.getElementById('end');

let seconds = 0;
let interval = null;

//Event listeners

startBtn.addEventListener('click', start);
pauseBtn.addEventListener('click', pauseTime);
endBtn.addEventListener('click', endTimer);
endBtn.addEventListener('click', pauseTime);


// update the timer
function timer() {
    seconds++;


        //format time
    let hours = Math.floor(seconds / 3600);
    let mins = Math.floor((seconds - (hours * 3600)) / 60);
    let secs = Math.floor(seconds % 60);


    if (secs < 10) secs = '0' + secs;
    if (mins < 10) mins = '0' + mins;
    if (hours < 10) hours = '0' + hours;

    timeDisplay.innerHTML = `${hours}:${mins}:${secs}`;
}

// timer functions

function start () {
    if (interval) {
        return
    }
    interval = setInterval(timer, 1000);
}

function pauseTime (){
    clearInterval(interval);
    interval = null;
}

function endTimer (){
    stop();
    seconds = 0;
    timeDisplay.innerHTML = '00:00:00';

    
    console.clear()
}