var initials = document.getElementById("initials");
var highScores = JSON.parse(localStorage.getItem("highScores")) || [];
for (var i = 0; i < highScores.length; i++) {
    var li = document.createElement("li")
    li.textContent = `initials: ${highScores[i].initials} score: ${highScores[i].startTime}`
    initials.append(li) 
}
console.log("high") 