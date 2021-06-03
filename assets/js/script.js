var timerEl = document.getElementById('#timer');
var questionEl = document.getElementById('#question');
var btnOptOneEl = document.getElementById('#btnOptionOne');
var btnOptTwoEl = document.getElementById('#btnOptionTwo');
var btnOptThreeEl = document.getElementById('#btnOptionThree');
var btnOptFourEl = document.getElementById('#btnOptionFour');
var btnExit = document.getElementById('#exit');
var btnNext = document.getElementById('#next');
var btnAnswers = document.getElementsByClassName('answer');
var btnStartEl = document.getElementById('start_btn');
var startBoxEl = document.getElementById('start_box');
var btnContinueEl = document.getElementById('continue');
var btnExitEl = document.getElementById('exit');
var quizBoxEl = document.getElementById('#quizBox');
var highscoreBoxEl = document.getElementById('#highscoreBox');
var userScoreEl = document.getElementById('userScore');
var initialsEl = document.getElementById('initials');
var highscorelistEl = document.getElementById('highscores');

var quizQuestions = [
    { q: "What does HTML stand for?", a: "Hyper Text Markup Language", optionOne: "Hyper Text Markup Language", optionTwo: "Hyper Text Modul Language", optionThree: "Hyper Test Markup Language", optionFour: "Hyperlink Markup Language" },
    { q: "What does CSS stand for?", a: "Cascading Style Sheets", optionOne: "Customized Style Sheets", optionTwo: "Creative Styled Sheets", optionThree: "Cascading Style Sheets", optionFour: "Cascading Sheet Styles"},
    { q: "How do you leave a comment in HTML?", a: "<!-- -->", optionOne: "/* */", optionTwo: "<!-- -->", optionThree: "//", optionFour: "#"},
    { q: "How do you leave a comment in CSS?", a: "/* */", optionOne: "/* */", optionTwo: "<!-- -->", optionThree: "//", optionFour: "#"},
    { q: "How do you leave a comment in JS?", a: "//", optionOne: "/* */", optionTwo: "<!-- -->", optionThree: "//", optionFour: "#"}
]

var questionIndex = 0;
var playerScore = 0;
var timer = 60;


function loadQuestion() {
    if (questionIndex < quizQuestions.length) {
        console.log("going");
        questionEl.textContent = quizQuestions[questionIndex].q;
        btnOptOneEl.textContent = quizQuestions[questionIndex].optionOne;
        btnOptTwoEl.textContent = quizQuestions[questionIndex].optionTwo;
        btnOptThreeEl.textContent = quizQuestions[questionIndex].optionThree;
        btnOptFourEl.textContent = quizQuestions[questionIndex].optionFour;
    }
    else {
        console.log("end");
    }
    
}

function nextQuestion() {
    btnNext.addEventListener("click", function() {
        for (var j = 0; j < btnAnswers.length; j++) {
            btnAnswers[j].disabled = false;
            btnAnswers[j].setAttribute('style', 'border-color: var(--secondary-color), color: var(--secondary-color)');
        }
        questionIndex++;
        if (questionIndex < quizQuestions.length) {
            loadQuestion(questionIndex);
            console.log(questionIndex);
        }
        else {
            quizBoxEl = document.getElementById('#quizBox');
            quizBoxEl.style.display = "none";
            highscoreBoxEl.style.display = "block";
            userScoreEl.textContent = playerScore;
        }
    });
}

function answerQuestion(i) {
    btnOptOneEl.addEventListener("click", function(){
        if (questionIndex < quizQuestions.length) {
            if (checkAnswer(btnOptOneEl)) {
                console.log("Correct");
                playerScore = playerScore + 10;
                console.log("adding 10 to player score:" + playerScore);
                btnOptOneEl.setAttribute('style', 'border-color: green; color: green; opacity: 1');
                for (var j = 0; j < btnAnswers.length; j++) {
                    btnAnswers[j].disabled = true;
                }
                console.log("Next question");
            }
            else {
                timer = timer - 10;
                console.log("Wrong");
                playerScore = playerScore - 10;
                console.log("removing 10 to player score:" + playerScore);
                btnOptOneEl.setAttribute('style', 'border-color: red; color: red; opacity: 1');
                for (var j = 0; j < btnAnswers.length; j++) {
                    btnAnswers[j].disabled = true;
                }
                console.log("Next question");
            }
        }
        else {
            btnNext.disabled = true;
        }
    });
    btnOptTwoEl.addEventListener("click", function(){
        if (questionIndex < quizQuestions.length) {
            if (checkAnswer(btnOptTwoEl)) {
                console.log("Correct");
                playerScore = playerScore + 10;
                console.log("adding 10 to player score:" + playerScore);
                btnOptTwoEl.setAttribute('style', 'border-color: green; color: green; opacity: 1');
                for (var j = 0; j < btnAnswers.length; j++) {
                    btnAnswers[j].disabled = true;
                }
                console.log("Next question");
            }
            else {
                timer = timer - 10;
                console.log("Wrong");
                playerScore = playerScore - 10;
                console.log("removing 10 to player score:" + playerScore);
                btnOptTwoEl.setAttribute('style', 'border-color: red; color: red; opacity: 1');
                for (var j = 0; j < btnAnswers.length; j++) {
                    btnAnswers[j].disabled = true;
                }
                console.log("Next question");
            }
        }
        else {
            btnNext.disabled = true;
        }
    });
    btnOptThreeEl.addEventListener("click", function(){
        if (questionIndex < quizQuestions.length) {
            if (checkAnswer(btnOptThreeEl)) {
                console.log("Correct");
                playerScore = playerScore + 10;
                console.log("adding 10 to player score:" + playerScore);
                btnOptThreeEl.setAttribute('style', 'border-color: green; color: green; opacity: 1');
                for (var j = 0; j < btnAnswers.length; j++) {
                    btnAnswers[j].disabled = true;
                }
                console.log("Next question");
            }
            else {
                timer = timer - 10;
                console.log("Wrong");
                playerScore = playerScore - 10;
                console.log("removing 10 to player score:" + playerScore);
                btnOptThreeEl.setAttribute('style', 'border-color: red; color: red; opacity: 1');
                for (var j = 0; j < btnAnswers.length; j++) {
                    btnAnswers[j].disabled = true;
                }
                console.log("Next question");
            }
        }
        else {
            btnNext.disabled = true;
        }
    });
    btnOptFourEl.addEventListener("click", function(){
        if (questionIndex < quizQuestions.length) {
            if (checkAnswer(btnOptFourEl)) {
                console.log("Correct");
                playerScore = playerScore + 10;
                console.log("adding 10 to player score:" + playerScore);
                btnOptFourEl.setAttribute('style', 'border-color: green; color: green; opacity: 1');
                for (var j = 0; j < btnAnswers.length; j++) {
                    btnAnswers[j].disabled = true;
                }
                console.log("Next question");
            }
            else {
                timer = timer - 10;
                console.log("Wrong");
                playerScore = playerScore - 10;
                console.log("removing 10 to player score:" + playerScore);
                btnOptFourEl.setAttribute('style', 'border-color: red; color: red; opacity: 1');
                for (var j = 0; j < btnAnswers.length; j++) {
                    btnAnswers[j].disabled = true;
                }
                console.log("Next question");
            }
        }
        else {
            btnNext.disabled = true;
        }
    });
}

function checkAnswer(btnOption) {
    var quizAnswer = quizQuestions[questionIndex].a;
    var selection = btnOption.textContent;
    if (selection === quizAnswer) {
        return true;
    }
    else {
        return false;
    }
}

var btnSaveEl = document.getElementById('btnSave')
var scoreListEl = document.getElementById('score_list')

// Checks to see if Start Button is clicked
btnStartEl.addEventListener("click", function(){
    // Hides Start Button
    btnStartEl.style.display = "none";
    // Displays the Start Quiz Box
    startBoxEl.style.display = "block";
});

// Checks to see if the Continue button is clicked
btnContinueEl.addEventListener("click", function(){
    // Hides Start Quiz Box
    startBoxEl.style.display = "none";

    // Displays the Quiz Box
    quizBoxEl.style.display = "block";
})


loadQuestion();
answerQuestion();
nextQuestion();

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
console.log(highScores)

btnSaveEl.addEventListener("click", function() {
    const score = {
        score: playerScore,
        name: initialsEl.value
    };
    highScores.push(score);
    highScores.sort((a, b) => b.score - a.score);
    highScores.splice(5);
    console.log(highScores);
    highscorelistEl.innerHTML = "";
    for (var i = 0; i < highScores.length; i++) {
        highscorelistEl.innerHTML += '<h4>' + highScores[i].name + " " + highScores[i].score + '</h4>'
    }
    
})







