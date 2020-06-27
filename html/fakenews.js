function buildQuiz(){

  // variable to store the HTML output
  const output = [];

  // for each question...
  myQuestions.forEach(
    (currentQuestion, questionNumber) => {

      // variable to store the list of possible answers
      const answers = [];

      // and for each available answer...
      for(letter in currentQuestion.answers){

        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} 
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output

      if (questionNumber < 4) {
        output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join('')} </div><br><br>`
        
        );
      } else {
        output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join('')} </div><br>`
        
        );
      }
      
    }
  );

  // finally combine our output list into one string of HTML and put it on the page
  quizContainer.innerHTML = output.join('');
}

function showResults(){
  // gather answer containers from our quiz

  const answerContainers = quizContainer.querySelectorAll('.answers');

  // keep track of user's answers
  let numCorrect = 0;
  let numWrong = 0;

  const actualAns = [];

  // for each question...
  myQuestions.forEach( (currentQuestion, questionNumber) => {

    // find selected answer
    const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    // if answer is correct
    if(userAnswer === currentQuestion.correctAnswer){
      // add to the number of correct answers
      numCorrect++;

      // color the answers green
      answerContainers[questionNumber].style.color = 'lightgreen';
    }
    // if answer is wrong or blank
    else{
      numWrong++;
      // color the answers red
      console.log(questionNumber);
      var realQuestionNumber = questionNumber+1;
      actualAns.push(`
        <div>
          ${realQuestionNumber}. ${currentQuestion.actualAnswer}
        </div>
      `)
      answerContainers[questionNumber].style.color = '#ee6c4d';
    }
  });

  // show number of correct answers out of total
  // resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;

  const resultsOut = [];

  resultsOut.push(`
    <div>
      <p>You answered ${numCorrect} out of ${myQuestions.length} questions correctly.
    </div>`
  );


  //console.log(numWrong);
  
  if (numWrong > 0) {
    resultsOut.push(
      `<div>
        Review your wrong answers below:
      </div>`
    );

    var actualString = actualAns.join('');
    resultsOut.push(`
      <div>
        ${actualString}
      </div>
      <br>`

    )
  } else {

  }

  resultsContainer.innerHTML = resultsOut.join('');


}


function startOver() {
  resultsContainer.innerHTML = "";
  quizContainer.innerHTML = "";
  buildQuiz();
  
}


const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
const resetButton = document.getElementById('reset-btn');

const myQuestions = [
  {
    question: "Covid-19 has been classified as a pandemic and has affected a significant portion of countries in the world",
    answers: {
      "Fact": "",
      "Opinion": "",
    },
    correctAnswer: "Fact",
    actualAnswer: "This is true!"
  },
  {
    question: "Illegal immigrants are not needed because they’re worsening the economy",
    answers: {
      "Fact": "",
      "Opinion": "",
    },
    correctAnswer: "Opinion",
    actualAnswer: "Determining whether these immigrants are needed or not is completely opinion-based."
  },
  {
    question: "Health care costs per person in the U.S. are the highest in the developed world",
    answers: {
      "Fact": "",
      "Opinion": "",
    },
    correctAnswer: "Fact",
    actualAnswer: "This is a true fact."
  },
  {
    question: "President Barack Obama was born in the United States",
    answers: {
      "Fact": "",
      "Opinion": "",
    },
    correctAnswer: "Fact",
    actualAnswer: "This is true!"
  },
  {
    question: "Masks should not be required to wear in a public setting",
    answers: {
      "Fact": "",
      "Opinion": "",
    },
    correctAnswer: "Opinion",
    actualAnswer: "Deciding what should and shouldn't be done is opinion-based."
  }
];



// display quiz right away
buildQuiz();


// on submit, show results
submitButton.addEventListener('click', showResults);
resetButton.addEventListener('click', startOver);




//Get the button:
var mybutton = document.getElementById("fake-news-scroll-btn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}