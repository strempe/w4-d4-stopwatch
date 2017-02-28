
var startButton = document.querySelector('#start') //thrown to the top to be used as a shared variable //click 
var timeDisplay = document.querySelector('#timeDisplay') //timer display 
var tenths = 0
var seconds = 0 
var minutes = 0
var interval;

//LOGIC
makeStartButtonClickable();
makeStartButtonDoubleClickable();

//FUNCTIONS
// Clicking when the button says "Start" should...
//start button is defined in this function 
function makeStartButtonClickable(){  
    startButton.addEventListener('click', startWatch) 
}

//dbl click defined in this function 
function makeStartButtonDoubleClickable(){  
    startButton.addEventListener('dblclick', resetWatch) 
}

// e - is used to call an e.target 
// Trim was added to get rid of extra space
// Every 'something' does something - use SET INTERVAL      

function startWatch() {
    if (startButton.innerHTML.trim() === "Start") { 
    //everything is operating on the thing to the left of it
    // start a group of things at the same time
    //set interval returns a number
        startUpdatingTimer(); 
    
        //Chnage button to say pause
        changeButtonToSayPause();                
    }   
    else if (startButton.innerHTML.trim()==='Pause') {
        pauseTimerFromCountingUp();
        setTimeout(resetTimerAfter15Seconds, 15000);
        changeButtonToSayResume();
    }    

    //clicking when the button says resume should...
    else if (startButton.innerHTML.trim() === 'Resume') {
        startUpdatingTimer();
        changeButtonToSayPause();
    }                                                                   
}                     

function resetWatch() {
    if (startButton.innerHTML.trim() === 'Pause') {
        pauseTimerFromCountingUp();
        resetTimersBackToZero(); 
        updateTimerDisplay();
        changeButtonToSayStart();
    }
}

function updateTimer() {
    startCountingUpEveryTenth();
    updateTimerDisplay();
    if (tenths === 0){
        changeColorOfTimerEachSecond();
    }
} 

  //two IF's because both things can happen at the same time - else if is conditional and cant run at the same time
function startCountingUpEveryTenth(){
    tenths++;
    if (tenths === 9) {
        seconds++
        tenths = 0  
    }
    if (seconds === 59) { 
        minutes++ 
        seconds = 0 
    }
}

function updateTimerDisplay() {
    timeDisplay.innerHTML = `${minutes}:${seconds}:${tenths}`
}

function changeColorOfTimerEachSecond () {
    var red = _randomNumber(255);
    var green = _randomNumber(255);
    var blue = _randomNumber(255);
    timeDisplay.style.color = `rgb(${red}, ${green}, ${blue})`;
}

function changeButtonToSayPause() {
    startButton.innerHTML = 'Pause';
}
function pauseTimerFromCountingUp() {
    clearInterval(interval);
}
function startUpdatingTimer() {
    interval = setInterval(updateTimer, 100);
}
function changeButtonToSayResume() {
    startButton.innerHTML = 'Resume'
}

function changeButtonToSayStart() {
    startButton.innerHTML = 'Start'
}

function resetTimersBackToZero(){
    tenths = 0;
    minutes = 0;
    seconds = 0;
}

function resetTimerAfter15Seconds() {
    if (startButton.innerHTML.trim() === 'Resume') {
        pauseTimerFromCountingUp();
        resetTimersBackToZero();
        updateTimerDisplay();
        changeButtonToSayStart();
    }
}

//underscore is used for private - utility things - HELPER
function _randomNumber(max) {  
    return Math.round(Math.random() * max);
}
