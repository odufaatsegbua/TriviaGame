// game variables \\

let counter = 120;
let currentQuestion = 0;
let score = 0;
// let wins = 0;
let loss = 0;
let timer;

// This function will display the questions and answers choices to the browser\\

//  var loadQuestion = 
function loadQuestion() {

    for(var i = 0; i < gameQuestions.length; i++) {

    
    const question = gameQuestions[i].questions;
    const choices = gameQuestions[i].choices;

    // This function will pull each question to the screen\\ 
    // we used append instead of html because html will clear the div id, append will add to it\\ 
    $("#game").append("<h4>" + question + "</h4>");

    // this div is what holds all the answer choices\\
    var answerContainer = $("<div>");

    // this creates the input tag to display answers to screen and appends them to the div above that holds answers\\
    answerContainer.append("<input type='radio' name='question-" + i + "'value='" + choices[0] + "'>" + choices[0]);
    // this name attribute is what assigns the possible answers to the questions, we used i to make it unique to this question
    // used value to grab each possible asnwer choice and assign to value attribute, 
    // we wrote choice twice - one in sinside the quotes (value attribute) other is outside of input tag to display to screen
    answerContainer.append("<input type='radio' name='question-" + i + "'value='" + choices[1] + "'>" + choices[1]);
    answerContainer.append("<input type='radio' name='question-" + i + "'value='" + choices[2] + "'>" + choices[2]);
    answerContainer.append("<input type='radio' name='question-" + i + "'value='" + choices[3] + "'>" + choices[3]);
        
    // This is the function that appends the answers to the screen\\
    $("#game").append(answerContainer);
    }

    // this will run the countdown function every second\\
    // we is how we will clear the interval later\\
    timer=setInterval(countdown, 1000);
}

loadQuestion();

function countdown() {
    // every time this runs the time will decrease by 1 sec\\
    counter = counter-1;
    $("#time").html(counter);
    // This calls a function to calculate the scores
    if(counter === 0) {
        console.log("counter = 0");
        clearInterval(timer)
        
    // we will call another function that we will create after this one
    // This function will capture users answers and compare them to the correct answers in questions.js
    // then we will give users a score based on correct answers 
    // and display users score to user\\
    }


}