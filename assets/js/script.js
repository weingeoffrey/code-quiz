// Start Box Elements
var btnStartEl = document.getElementById('start_btn');
var startBoxEl = document.getElementById('start_box');
var btnContinueEl = document.getElementById('continue');
var btnExitEl = document.getElementById('exit');

// Quiz Box Elements
var quizBoxEl = document.getElementById('#quizBox');
var timerEl = document.getElementById('#timer');
var questionEl = document.getElementById('#question');
var btnOptOneEl = document.getElementById('#btnOptionOne');
var btnOptTwoEl = document.getElementById('#btnOptionTwo');
var btnOptThreeEl = document.getElementById('#btnOptionThree');
var btnOptFourEl = document.getElementById('#btnOptionFour');
var btnExit = document.getElementById('#exit');
var btnNext = document.getElementById('#next');
var btnAnswers = document.getElementsByClassName('answer');

// Highscore Box Elements
var userScoreEl = document.getElementById('userScore');
var initialsEl = document.getElementById('initials');
var highscorelistEl = document.getElementById('highscores');
var highscoreBoxEl = document.getElementById('#highscoreBox');
var btnSaveEl = document.getElementById('btnSave')
var scoreListEl = document.getElementById('score_list')

// Object array containing quiz questions
var quizQuestions = [
    { q: "What does HTML stand for?", a: "Hyper Text Markup Language", optionOne: "Hyper Text Markup Language", optionTwo: "Hyper Text Modul Language", optionThree: "Hyper Test Markup Language", optionFour: "Hyperlink Markup Language" },
    { q: "What does CSS stand for?", a: "Cascading Style Sheets", optionOne: "Customized Style Sheets", optionTwo: "Creative Styled Sheets", optionThree: "Cascading Style Sheets", optionFour: "Cascading Sheet Styles"},
    { q: "How do you leave a comment in HTML?", a: "<!-- -->", optionOne: "/* */", optionTwo: "<!-- -->", optionThree: "//", optionFour: "#"},
    { q: "How do you leave a comment in CSS?", a: "/* */", optionOne: "/* */", optionTwo: "<!-- -->", optionThree: "//", optionFour: "#"},
    { q: "How do you leave a comment in JS?", a: "//", optionOne: "/* */", optionTwo: "<!-- -->", optionThree: "//", optionFour: "#"}
]

// Starting index for questions
var questionIndex = 0;

// Starting player score
var playerScore = 0;

// Starting timer
var timer = 60;

// Function to load the question into DOM
function loadQuestion() {
    questionEl.textContent = quizQuestions[questionIndex].q;
    btnOptOneEl.textContent = quizQuestions[questionIndex].optionOne;
    btnOptTwoEl.textContent = quizQuestions[questionIndex].optionTwo;
    btnOptThreeEl.textContent = quizQuestions[questionIndex].optionThree;
    btnOptFourEl.textContent = quizQuestions[questionIndex].optionFour;
}

// Function to display next question on Next button click
function nextQuestion() {
    btnNext.addEventListener("click", function() {
        // When clicked, enable all the buttons and return their style to original parameters
        for (var j = 0; j < btnAnswers.length; j++) {
            btnAnswers[j].disabled = false;
            btnAnswers[j].setAttribute('style', 'border-color: var(--secondary-color), color: var(--secondary-color)');
        }
        // Index the questionIndex up one
        questionIndex++;
        // Check to see if the questionIndex is less than the length of quizQuestions
        if (questionIndex < quizQuestions.length) {
            // Load the next Question
            loadQuestion(questionIndex);
        }
        // Reached the end of questions, hide the quizbox and display the highscorebox
        else {
            quizBoxEl.style.display = "none";
            highscoreBoxEl.style.display = "block";
            userScoreEl.textContent = playerScore;
        }
    });
}

// Function to answer the question based off of which button the user selected and perform logic
function answerQuestion(i) {
    btnOptOneEl.addEventListener("click", function(){
        if (questionIndex < quizQuestions.length) {
            // If answer is correct
            if (checkAnswer(btnOptOneEl)) {
                // add 10 points to the user's score
                playerScore = playerScore + 10;
                // style the button to show correct answer
                btnOptOneEl.setAttribute('style', 'border-color: green; color: green; opacity: 1');
                // disable all subsequent answer buttons to stop user from making multiple selections
                for (var j = 0; j < btnAnswers.length; j++) {
                    btnAnswers[j].disabled = true;
                }
            }
            // If answer is incorrect
            else {
                // decrement 10 seconds from the timer
                timer = timer - 10;
                // decrement 10 points fromt he user's score
                playerScore = playerScore - 10;
                // style the button to show incorrect answer
                btnOptOneEl.setAttribute('style', 'border-color: red; color: red; opacity: 1');
                // disable all subsequent answer buttons to stop user from making multiple selections
                for (var j = 0; j < btnAnswers.length; j++) {
                    btnAnswers[j].disabled = true;
                }
            }
        }
        else {
            btnNext.disabled = true;
        }
    });
    btnOptTwoEl.addEventListener("click", function(){
        if (questionIndex < quizQuestions.length) {
            if (checkAnswer(btnOptTwoEl)) {
                playerScore = playerScore + 10;
                btnOptTwoEl.setAttribute('style', 'border-color: green; color: green; opacity: 1');
                for (var j = 0; j < btnAnswers.length; j++) {
                    btnAnswers[j].disabled = true;
                }
            }
            else {
                timer = timer - 10;
                playerScore = playerScore - 10;
                btnOptTwoEl.setAttribute('style', 'border-color: red; color: red; opacity: 1');
                for (var j = 0; j < btnAnswers.length; j++) {
                    btnAnswers[j].disabled = true;
                }
            }
        }
        else {
            btnNext.disabled = true;
        }
    });
    btnOptThreeEl.addEventListener("click", function(){
        if (questionIndex < quizQuestions.length) {
            if (checkAnswer(btnOptThreeEl)) {
                playerScore = playerScore + 10;
                btnOptThreeEl.setAttribute('style', 'border-color: green; color: green; opacity: 1');
                for (var j = 0; j < btnAnswers.length; j++) {
                    btnAnswers[j].disabled = true;
                }
            }
            else {
                timer = timer - 10;
                playerScore = playerScore - 10;
                btnOptThreeEl.setAttribute('style', 'border-color: red; color: red; opacity: 1');
                for (var j = 0; j < btnAnswers.length; j++) {
                    btnAnswers[j].disabled = true;
                }
            }
        }
        else {
            btnNext.disabled = true;
        }
    });
    btnOptFourEl.addEventListener("click", function(){
        if (questionIndex < quizQuestions.length) {
            if (checkAnswer(btnOptFourEl)) {
                playerScore = playerScore + 10;
                btnOptFourEl.setAttribute('style', 'border-color: green; color: green; opacity: 1');
                for (var j = 0; j < btnAnswers.length; j++) {
                    btnAnswers[j].disabled = true;
                }
            }
            else {
                timer = timer - 10;
                playerScore = playerScore - 10;
                btnOptFourEl.setAttribute('style', 'border-color: red; color: red; opacity: 1');
                for (var j = 0; j < btnAnswers.length; j++) {
                    btnAnswers[j].disabled = true;
                }
            }
        }
        else {
            btnNext.disabled = true;
        }
    });
}

// Function to verify the answer
function checkAnswer(btnOption) {
    var quizAnswer = quizQuestions[questionIndex].a;
    var selection = btnOption.textContent;
    // If the textContent of the selected button matches the quizQuestions answer, return true
    if (selection === quizAnswer) {
        return true;
    }
    // If the textContent of the selected button does not match the quizQuestions answer, return false
    else {
        return false;
    }
}

// Function to countdown timer 60 seconds
function countdown() {
    var timeInterval = setInterval(function() {
        // Decrement 1 second
        if (timer >= 1){
            timerEl.textContent = timer;
            timer--;
        }
        // If timer hits 0, clear the timer, hide the quiz box and display the highscore box
        else {
            timerEl.textContent = "";
            clearInterval(timeInterval);
            quizBoxEl.style.display = "none";
            highscoreBoxEl.style.display = "block";
            userScoreEl.textContent = playerScore;
        }
    }, 1000);
}

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

    // Start Countdown
    countdown();
})

// Load initial question
loadQuestion();

// Answer inital question
answerQuestion();

// Load next question and loop through remaining questions until end
nextQuestion();

// Get localStorage array for highscores
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

// Wait for Save button click
btnSaveEl.addEventListener("click", function() {
    // Create object array for player's score
    const score = {
        score: playerScore,
        name: initialsEl.value
    };
    // Add player's score to highscores object variable
    highScores.push(score);
    // Sort high score object variable from high to low
    highScores.sort((a, b) => b.score - a.score);
    // Only show top 5 high scores
    highScores.splice(5);
    // Clear highscorelistEl
    highscorelistEl.innerHTML = "";
    // Output the high scores
    for (var i = 0; i < highScores.length; i++) {
        highscorelistEl.innerHTML += '<h4 style="text-align: center">' + highScores[i].name + " " + highScores[i].score + '</h4>'
    }
})







