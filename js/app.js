'use strict';
// Answer Key
//
//Question 1: 'Am I 20 years old' 'yes'
//Question 2: 'Do I have 5 pets?' 'no'
//Question 3: 'Did I graduate in spring 2019?' 'no'
//Question 4: 'I took Code 102 immediately after Code 101' 'no'
//Question 5: 'I wish to live a quiet life' 'yes'
let counter = 0;
let userName = prompt('Who visits my site?');
let correctAnswer = 8675;
let question7Answers = ['weasley', 'snape', 'hogarth'];
let chances = 0;

function namePrompt() {
  if (userName === null || userName === '') {
    userName = prompt('Who visits my site?');
    namePrompt();
    return;
  }
  else {
    alert(`Welcome to the site ${userName}, enjoy the pictures!`);
    //console.log(`Welcome to the site ${userName}, enjoy the pictures!`)
  }
}

function ageQuestion() {
  let answer1 = prompt('Am I 20 years old?');
  if (answer1 === null || answer1 === '') {
    ageQuestion();
    return;
  }
  answer1 = answer1.toLowerCase();
  if (answer1 === 'yes' || answer1 === 'y') {
    alert('Correct');
    //console.log('Question 1 Correct')
    counter = counter + 1;
  } else if (answer1 === 'no' || answer1 === 'n') {
    alert('Incorrect');
    //console.log('Question 1 Incorrect')
  }
  else {
    alert('Please enter a valid answer');
    //console.log('Please enter a valid answer')
    ageQuestion();
    return;
  }
}

function petnQuestion() {
  let answer2 = prompt('Do I have 5 Pets?');
  if (answer2 === null || answer2 === '') {
    petnQuestion();
    return;
  }
  answer2 = answer2.toLowerCase();
  if (answer2 === 'yes' || answer2 === 'y') {
    alert('Incorrect');
    //console.log('Question 2 Incorrect')
  } else if (answer2 === 'no' || answer2 === 'n') {
    alert('Correct');
    //console.log('Question 2 Correct')
    counter = counter + 1;
  }
  else {
    alert('Please enter a valid answer');
    //console.log('Please enter a valid answer')
    petnQuestion();
  }
}

function gradQuestion() {
  let answer3 = prompt('Did I graduate in the spring of 2019?');
  if (answer3 === null || answer3 === '') {
    gradQuestion();
    return;
  }
  answer3 = answer3.toLowerCase();
  if (answer3 === 'yes' || answer3 === 'y') {
    alert('Incorrect');
    //console.log('Question 3 Incorrect')
  } else if (answer3 === 'no' || answer3 === 'n') {
    alert('Correct');
    //console.log('Question 3 Correct')
    counter = counter + 1;
  }
  else {
    alert('Please enter a valid answer');
    //console.log('Please enter a valid answer')
    gradQuestion();
  }
}

function timingQuestion() {
  let answer4 = prompt('Did I take Code 102 immediately after Code 101?');
  if (answer4 === null || answer4 === '') {
    timingQuestion();
    return;
  }
  answer4 = answer4.toLowerCase();
  if (answer4 === 'yes' || answer4 === 'y') {
    alert('Incorrect');
    //console.log('Question 4 Incorrect')
  } else if (answer4 === 'no' || answer4 === 'n') {
    alert('Correct');
    //console.log('Question 4 Correct')
    counter = counter + 1;
  }
  else {
    alert('Please enter a valid answer');
    //console.log('Please enter a valid answer')
    timingQuestion();
  }
}

function lifeQuestion() {
  let answer5 = prompt('Do I want to live a quiet life?');
  if (answer5 === null || answer5 === '') {
    lifeQuestion();
    return;
  }
  answer5 = answer5.toLowerCase();
  if (answer5 === 'yes' || answer5 === 'y') {
    alert('Correct');
    //console.log('Question 5 Correct')
    counter = counter + 1;
  } else if (answer5 === 'no' || answer5 === 'n') {
    alert('Incorrect');
    //console.log('Question 5 Incorrect')
  }
  else {
    alert('Please enter a valid answer');
    //console.log('Please enter a valid answer')
    lifeQuestion();
  }
}

function numberQuestion() {
  let answer6 = prompt('What number am I thinking of?');
  if (answer6 === null || answer6 === '') {
    numberQuestion();
    return;
  }
  answer6 = +answer6;
  while (answer6 !== correctAnswer) {
    if (answer6 > correctAnswer) {
      alert('Guess Lower');
      chances++;
      //console.log(chances);
      if (chances > 3) {
        break;
      }
      numberQuestion();
      return;
    } else if (answer6 < correctAnswer) {
      alert('Guess Higher');
      chances++;
      //console.log(chances);
      if (chances > 3) {
        break;
      }
      numberQuestion();
      return;
    } else {
      alert('Please enter a valid answer');
      //console.log('Please enter a valid answer')
      numberQuestion();
      return;
    }
  }
  if (answer6 === correctAnswer) {
    alert('You are Correct');
    counter++;
    chances = 0;
  }
  else {
    alert('You have run out of guesses, The correct answer was 8675');
    chances = 0;
  }
}

// eslint-disable-next-line no-unused-vars
function petQuestion() {
  let guesses = 6;
  let answeredCorrectly = false;

  while (guesses && !answeredCorrectly) {
    let guess = prompt('What is the name of one of my pets?');
    guess = guess.toLowerCase();
    guesses--;
    if (guess === question7Answers[0] || guess === question7Answers[1] || guess === question7Answers[2]) {
      answeredCorrectly = true;
      counter++;
    } else {
      alert('Try Again');
    }
    if (guesses === 0) {
      alert(`You have run out of guesses, the three possible answers were,  ${question7Answers[0]}, ${question7Answers[1]}, or ${question7Answers[2]}`);
    }
  }
}

function movieQuestion() {
  let favoiteMovives = ['20,000 leagues under the sea', '12 angry men', 'titanic', 'avengers infinity war', 'inherit the wind', 'trading places', 'the princess bride', 'three billboards outside ebbing, missouri', 'operation odessa', 'wall-e'];
  let guesses = 6;
  let answeredCorrectly = false;
  //console.log(guesses);
  while (guesses > 0 && answeredCorrectly === false) {
    guesses--;
    let answer8 = prompt('what is one of my favorite movies?');
    for (let i = 0; i <= favoiteMovives.length; i++) {
      let movieName = favoiteMovives[i];
      if (movieName === answer8) {
        alert('Correct, that is one of them');
        answeredCorrectly = true;
      }
    }
    //console.log(guesses);
    if (guesses === 0) {
      alert(`You have run out of attempts. The possible answers were ${favoiteMovives}`);
    }
  }
}

// eslint-disable-next-line no-unused-vars
function questionButton() {
  if (counter >= 7) {
    counter = 0;
  }
  chances = 0;
  ageQuestion();
  petnQuestion();
  gradQuestion();
  timingQuestion();
  lifeQuestion();
  numberQuestion();
  //petQuestion();
  movieQuestion();
  //console.log('Number of Correct Answers ' + counter)
  endResponse();
}

function endResponse() {
  alert(`Thank you for playing my game ${userName}, It was fun. By the way you got ${counter} out of 7 correct.`);
  //console.log(`Thank you for playing my game ${userName}, It was fun. By the way you got ${counter} out of 5 correct.`)
}
namePrompt();
