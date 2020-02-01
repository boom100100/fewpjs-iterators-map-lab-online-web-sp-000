const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

/*const titleCased = (e) => {
  return tutorials;
  
}*/
  
  
const titleCased = () => {
  tutorials.map(titlecaseSentence);
  return tutorials;
}

function titlecaseSentence(sentence) {
  
  console.log("Testing log for result.");
  let wordsArray = sentence.split(" ");
  console.log(wordsArray);
  
  return wordsArray.map(x => {
    console.log(x);
    console.log(x.substring(0,1).toUpperCase() + x.substring(1));
    return x.substring(0,1).toUpperCase() + x.substring(1);
    
  }
  
}



/* let mapped = ;*/