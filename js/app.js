'use strict'
// Answer Key
//
//Question 1: 'Am I 20 years old' 'yes'
//Question 2: 'Do I have 5 pets?' 'no'
//Question 3: 'Did I graduate in spring 2019?' 'no'
//Question 4: 'I took Code 102 immedietly after Code 101' 'no'
//Question 5: 'I wish to live a quiet life' 'yes'
function question1() {
  let answer1 = prompt('Am I 20 years old?');
  if (answer1 === null || answer1 === '') {
    question1();
    return
  }
  answer1 = answer1.toLowerCase();
  if (answer1 === 'yes' || answer1 === 'y') {
    // alert('Correct');
    console.log('Question 1 Correct')
  } else if (answer1 === 'no' || answer1 === 'n') {
    // alert('Incorrect');
    console.log('Question 1 Incorrect')
  }
  else {
    console.log('Please enter a valid answer')
    question1()
    return
  }
}
function question2() {
  let answer2 = prompt('Do I have 5 Pets?');
  if (answer2 == null || answer2 === '') {
    question2();
    return
  }
  answer2 = answer2.toLowerCase();
  if (answer2 === 'yes' || answer2 === 'y') {
    // alert('Incorrect');
    console.log('Question 2 Incorrect')
  } else if (answer2 === 'no' || answer2 === 'n') {
    // alert('Correct');
    console.log('Question 2 Correct')
  }
  else {
    console.log('Please enter a valid answer')
    question2()
  }
}
function question3() {
  let answer3 = prompt('Did I graduate in the spring of 2019?');
  if (answer3 === null || answer3 === '') {
    question3();
    return
  }
  answer3 = answer3.toLowerCase();
  if (answer3 === 'yes' || answer3 === 'y') {
    // alert('Incorrect');
    console.log('Question 3 Incorrect')
  } else if (answer3 === 'no' || answer3 === 'n') {
    // alert('Incorrect');
    console.log('Question 3 Correct')
  }
  else {
    console.log('Please enter a valid answer')
    question3()
  }
}
function question4() {
  let answer4 = prompt('Did I take Code 102 immedietly after Code 101?');
  if (answer4 === null || answer4 === '') {
    question4();
    return
  }
  answer4 = answer4.toLowerCase();
  if (answer4 === 'yes' || answer4 === 'y') {
    // alert('Incorrect');
    console.log('Question 4 Incorrect')
  } else if (answer4 === 'no' || answer4 === 'n') {
    // alert('Correct');
    console.log('Question 4 Correct')
  }
  else {
    console.log('Please enter a valid answer')
    question4()
  }
}
function question5() {
  let answer5 = prompt('Do I want to live a quiet life?')
  if (answer5 === null || answer5 === '') {
    question5();
    return
  }
  answer5 = answer5.toLowerCase();
  if (answer5 === 'yes' || answer5 === 'n') {
    // alert('Correct');
    console.log('Question 5 Correct')
  } else if (answer5 === 'no') {
    // alert('Incorrect');
    console.log('Question 5 Incorrect')
  }
  else {
    console.log('Please enter a valid answer')
    question5()
  }
}
question1()
question2()
question3()
question4()
question5()