// http://websamuraj.pl/examples/js/projekt11/

let startTime = false;
let hr = 0;
let min = 0;
let sec = 0;
// const seconds = time.getSeconds() < 10 ? "0" + time.getSeconds() : time.getSeconds();
// spanM.textContent = minutes < 10 ? "0" + minutes: minutes;

function startTimer() {
    if (startTime == false) {
        startTime = true;
        stopwatchMechanism();
        document.querySelector('.main').textContent = "Stop";
    } else if (startTime == true) {
        startTime = false;
        document.querySelector('.main').textContent = "Start";
        //flaga jest tu niepotrzebna bo klikając pierwszy raz startTime jest false, wchodzi w if i zmienia startTime na true. Klikając drugi raz wchodzi w startTime == true, zmienia startTime na false i zatrzymuje się stopwatchMechanism. ITD.

        //nieszczęsna flaga:
        // flagButton = !flagButton;
        // if(flagButton == true) {
        //     startTime = false;
        //     document.querySelector('.main').textContent = "Start";
        // }
    }
}

function stopwatchMechanism() {
    if (startTime === true) {
        sec = parseInt(sec);
        min = parseInt(min);
        hr = parseInt(hr);

        sec = sec + 1;
        if (sec < 10 || sec == 0) {
            sec = "0" + sec;
        }
        if (min < 10 || min == 0) {
            min = '0' + min;
        }
        if (hr < 10 || hr == 0) {
            hr = '0' + hr;
        }

        if (sec == 60) {
            min += 1;
            sec = 0;
        }
        if (min == 60) {
            hr += 1;
            min = 0;
            sec = 0;
        }
        displayTime.textContent = `${hr}:${min}:${sec}`;
        let stopwatchInterval = setTimeout(stopwatchMechanism, 1000);
    }
}

function reset() {
    hr = 0;
    min = 0;
    sec = 0;
    startTime = false;
    displayTime.textContent = "---";
    document.querySelector('.main').textContent = "Start";
}

document.querySelector('.main').addEventListener('click', startTimer);
document.querySelector('.reset').addEventListener('click', reset);
let displayTime = document.querySelector('.time div');