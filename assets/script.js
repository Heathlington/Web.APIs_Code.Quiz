var highScores = JSON.parse(localStorage.getItem("highScores")) || [];
var time = document.getElementById("time");
var startbtn = document.getElementById("start");
var questionsEl = document.getElementById("questions");
var answersEl = document.getElementById("answers");
var nameFormEl = document.getElementById("nameForm");
var inputEl = document.getElementById("input");
var submitBtnEl = document.getElementById("submitBtn");
startbtn.addEventListener("click", function (event) {
  //console.log("Event: ", event);
  console.log("Target: ", event.target);
  event.target.classList.add("hide");
  // A timer to start
  timer();
  // A question is presented
  showQuestion();
});

console.log(startbtn);
var questions = [
  {
    question: "what color is the sky?",
    answer: ["blue", "gray", "razzmatazz", "periwinkle"],
    correct: "blue",
  },
  {
    question: "what is 2 + 2",
    answer: ["4", "3", "periwinkle", "5"],
    correct: "4",
  },
];
var counter = 0;
var startTime = 60;
var timerInterval;
function timer() {
  timerInterval = setInterval(function () {
    // we are counting down
    startTime = startTime - 1;
    console.log("Time :", startTime);

    // how do we show the TIMER on the DOM(?)
    time.textContent = startTime;

    if (startTime == 0) {
      console.log("Times Up!");
      endGame();
      time.textContent = "Times Up!";
    }
  }, 1000);
}

function showQuestion() {
  questionsEl.innerHTML = "";
  answersEl.innerHTML = "";
  var questionH1 = document.createElement("h1");
  questionH1.textContent = questions[counter].question;
  questionsEl.append(questionH1);
  for (var i = 0; i < questions[counter].answer.length; i++) {
    var button = document.createElement("button");
    button.textContent = questions[counter].answer[i];
    answersEl.append(button);
  }
}
function answerHandler(event) {
  var element = event.target;
  console.log(element.textContent);
  if (element.textContent !== questions[counter].correct) {
    startTime = startTime - 10;
  }
  counter++;
  if (counter > questions.length - 1) {
    endGame();
  } else {
    showQuestion();
  }
}
function endGame() {
  clearInterval(timerInterval);
  answersEl.classList.add("hide")
  questionsEl.classList.add("hide")
  nameFormEl.classList.remove("hide")
}
function formHandler() {
   var initials = inputEl.value
   var user = {
    initials, 
    startTime
   }
   highScores.push(user)
   localStorage.setItem("highScores", JSON.stringify(highScores))
   window.location.href="highscore.html"
}
//On button click check to see if they're right or wrong. If wrong, subtract 10 seconds.
answersEl.addEventListener("click", answerHandler);
submitBtnEl.addEventListener("click", formHandler);
//Add 1 to our counter, and then rerun show question
//repeat this process until the time expires or we've reached the end of the questions // there's code within this script.js that is similar to what needs to be done for these three things

//Once the time expires, or the end of the questions we need to prompt for their initials, listen for a click event, and then add the time left and their initials to local storage // in class activities
