const startingMinutes = 5;
let time = startingMinutes * 60;

const timerEl = document.getElementById('timer');

setInterval(uptdatetimer, 1000);

function uptdatetimer() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 5 ? '0' + seconds : seconds;

    timerEl.innerHTML = `${minutes}:${seconds}`;
    time--;
}