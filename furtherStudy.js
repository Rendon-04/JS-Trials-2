'use strict';

function wordsInCommon(words1, words2) {
  const words1Set = new Set(words1);
  const words2Set = new Set(words2);

  const result = new Set();
  for(const word of words1Set){
    if(words2Set.has(word)){
      result.add(word)
    }
  }
  console.log(Array.from(result));

  return Array.from(result);

}
const words1 = ["apple", "banana", "cherry", "date"];
const words2 = ["banana", "date", "fig", "grape"];
console.log(wordsInCommon(words1, words2));


function kidsGame(names) {
//get the first word and remove it, add it to our output
const output = [names.shift()];
const firstLetterToWords = {};

// make a dictionary of {first-letter : []}
names.forEach(name => {
  const firstLetter = name[0];
  if (!firstLetterToWords[firstLetter]){
    firstLetterToWords[firstLetter] = [name];
  }
  else {
    firstLetterToWords[firstLetter].push(name);
  }
});

//chain together until we run out of words
while (true) {
  const startLetter = output[output.length - 1].slice(-1);

  //if there are no words, we are done
  if (!firstLetterToWords[startLetter] || firstLetterToWords[startLetter].length === 0) {
    break;
}
  const word = firstLetterToWords[startLetter].shift();
  output.push(word);
  }
return output;
}
console.log(kidsGame(["bagon", "baltoy", "yamask", "starly", "nosepass", "kalob", "nicky", "booger"])); 