// ### Task - Done by Sahil
//  i have added comment for better understanding and it is properly working.

// ### Task Description
// Write a function that will correct the errors in given string.

// #### input
// correct_it("John have an apple The sky is blue. they get a coin")
// #### output
// "John have an apple. The sky is blue. They get a coin.

function correctsentence(inptxt) {
  const regex = /(?<=[^.!?])\s+(?=\p{Lu})/gu; // // i added a regex for checking capital letter in sentence
  const fullstopaddedtext = inptxt.replace(regex, ". "); // // when capital letter found then fullstop added at its preivous char

  const finalsentence = fullstopaddedtext
    .split(/[.]/)
    .map((sentence) => sentence.trim(" ")); // // this trim the space

  let correctedsentence = "";

  for (let i = 0; i < finalsentence.length; i++) {
    let sentence = finalsentence[i];
    // console.log(sentence.length);
    if (sentence.length > 0) {
      sentence = sentence.charAt(0).toUpperCase() + sentence.slice(1);
      //   console.log(sentence);
    }
    if (i > 0) {
      correctedsentence += ". "; // // it join the splited sentence
    }
    correctedsentence += sentence; // // this makes a correct sentence by joining properly
  }
  console.log(correctedsentence);
}

const inptxt = "John have an apple The sky is blue. they get a coin";
correctsentence(inptxt);
