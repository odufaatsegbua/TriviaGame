// Create an array of the game questions and answers\\

const gameQuestions = [
  {
    questions: "What is Southwest Airlines' vision?",
    choices: [
      "To party",
      "To serve others",
      "To be the world's most loved, most flown, and most profitable airline",
      "To never charge for checked bags"
    ],
    correctAnswer:
      "To be the world's most loved, most flown, and most profitable airline"
  },

  {
    questions: "What is the Southwest Airlines logo?",
    choices: [
      "An airplane",
      "A wing",
      "A Heart",
      "An arrow pointing both South and West"
    ],
    correctAnswer: "A Heart"
  },

  {
    questions: "Who is the CEO of Southwest Airlines?",
    choices: ["Gary Kelly", "Herb Kelleher", "Luke Stone", "Drake"],
    correctAnswer: "Gary Kelly"
  },

  {
    questions: "What does is mean to live the Southwest Way?",
    choices: [
      "To live in the Southwest",
      "To travel often",
      "To have a Warrior Spirit, A Servant's Heart, and a Fun-LUVing Attitude",
      "To attend every Deck Party"
    ],
    correctAnswer:
      "To have a Warrior Spirit, A Servant's Heart, and a Fun-LUVing Attitude"
  },

  {
    questions: "What are the top two holidays celebrated at Southwest?",
    choices: [
      "Christmas and Thanksgiving",
      "Halloween and Valentines Day",
      "July 4th and Memorial Day",
      "Christmas and New Years Eve"
    ],
    correctAnswer:
    "Halloween and Valentines Day"
  },

  {
    questions: "Is Southwest Airlines an Equal Opportunity Employer?",
    choices: ["Yes", "No", "What's that?", "I'm not sure"],
    correctAnswer: "Yes"
  }
];

// // game variables \\

// let counter = 30;
// let currentQuestion = 0;
// let score = 0;
// // let wins = 0;
// let loss = 0;
// let timer;

// // This function will display the questions and answers choices to the browser\\

// //  var loadQuestion =
// function loadQuestion() {
//     const question = gameQuestions[currentQuestion].questions;
//     const choices = gameQuestions[currentQuestion].choices;

//     $("#game").html("<h4>" + question + "</h4>");
// }

// loadQuestion();
