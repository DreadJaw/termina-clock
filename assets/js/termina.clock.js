let thisMoment = new Date();

let thisHour = thisMoment.getHours();
let thisMinute = thisMoment.getMinutes();
let thisSecond = thisMoment.getSeconds();
let thisMethod = (thisHour >= 13) ? 'PM' : 'AM';

function setElemValue(elem, value) {
    if(elem !== 'hours' && value.toString().length == 1) {
        value = value.toString().padStart(2, '0');
    }
    if(elem == 'hours' && value >= 13) {
        value = (value - 12);
    }
    document.getElementById(elem).innerHTML = value;
}

function parseHour() {
    let temp = new Date().getHours();
    if(temp !== thisHour) {
        if(temp >= 13) {
            let toneCount = (temp - 12);
            actualHour = toneCount;
            playBells(toneCount);
            thisMethod = String('PM');
        } else {
            actualHour = temp;
            playBells(temp);
            thisMethod = String('AM');
        }
    }
    thisHour = temp;
    setElemValue('hours', thisHour);
    setElemValue('method', thisMethod);
}

function parseMinute() {
    thisMinute = new Date().getMinutes();
    setElemValue('minutes', thisMinute);
}

function parseSeconds() {
    let temp = new Date().getSeconds();
    if((temp % 10) == 0) {
        clockTick.play();
    }
    thisSecond = temp;
    setElemValue('seconds', thisSecond);
}

function randomMoonRumble() {
    let randValue = Math.floor(Math.random() * 1000);
    if(randValue == 666 || randValue == 72) {
        moonRumble.play();
    }
}

setInterval(function() {
    parseHour();
    parseMinute();
    parseSeconds();
    randomMoonRumble();
}, 1000)