/**
 * Common Sound Effects for the Project
 */
const clockTick = new Howl({
    src: ['./assets/audio/clock_tick.wav'],
    volume: 0.7,
    html5: false,
    rate: 1.0,
    onload: function() { 
        console.log(`[TerminaClock] Clock Tick Loaded...`) 
    }
})
const clockBell = new Howl({
    src: ['./assets/audio/clock_bell.wav'],
    volume: 0.7,
    html5: false,
    rate: 1.0,
    onload: function() { 
        console.log(`[TerminaClock] Clock Bell Loaded...`) 
    }
})
const moonRumble = new Howl({
    src: ['./assets/audio/moon_rumble.wav'],
    volume: 0.7,
    html5: false,
    rate: 1.0,
    onload: function() { 
        console.log(`[TerminaClock] Moon Rumble Loaded...`) 
    }
})
const playBells = function(amount) {
    let bellsPlayed = 1;
    clockBell.play();

    let interval = setInterval(function() {
        if(bellsPlayed < amount) {
            clockBell.play();
            bellsPlayed = bellsPlayed + 1;
        } else {
            clearInterval(interval);
            interval = null;
        }
    }, 4000)
}