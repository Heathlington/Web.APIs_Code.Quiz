
var time = document.getElementById('time');
var startbtn = document.getElementById("start");
startbtn.addEventListener("click", function(event) {
    //console.log("Event: ", event);
    console.log("Target: ", event.target);
    // A timer to start 
    timer();
    // A question is presented
    showQuestion();
});

console.log(startbtn);

var startTime = 5;

function timer() {
    var timerInterval = setInterval(function() {
        // we are counting down
        startTime = startTime - 1;
        console.log("Time :", startTime);

        // how do we show the TIMER on the DOM(?)
        time.textContent = startTime;
        
        if(startTime == 0) {
            console.log("Times Up!");
            clearInterval(timerInterval);
            time.textContent = "Times Up!";
        }
    }, 1000)
}

function showQuestion() {

}