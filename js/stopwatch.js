document.querySelector('#start').addEventListener('click', function (){
    setInterval (startTimer, 100);
} );
colors()

var stopwatch = document.querySelector('#timer');
var startButton = document.querySelector('#start')
var minutes = 0
var seconds = 0
var tenths = 0
var counter;


function startTimer (){
    tenths++
    stopwatch.innerText = `${minutes}: ${seconds}: ${tenths}`
    if (tenths >= 60) {
        tenths = 0;
        seconds++;  
    }

    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        colors
       
    }

    // if (minutes >= 60) {
    //     minutes = 5;
    // //    minutes.style.color = 'green'
    //      window.location.href = 'https://google.com';
    // }  
}   

function colors() {
    document.addEventListener('click', function(e) {
    var red = Math.round(Math.random()*255);
    var green = Math.round(Math.random()*255);
    var blue = Math.round(Math.random()*255);
    style.color = `rgb(${red} ${green} ${blue})`;
}); 
}
// button
function timerButton(){
    document.addEventListener('click', function(e){
    startButton.innerHTML = 'Start'
    if (e.target.innerHTML === 'Start') {
        e.target.innerHTML = 'Pause'
        // counter = setInterval (startTimer, 10)
        counter = setInterval (startTimer, 100)
        
    }
    else if (e.target.innerHTML === 'Resume') {
        e.target.innerHTML = 'Pause'
        // counter = setInterval (startTimer, 10)
        counter = setInterval (startTimer, 100)
     }
    })
 }












