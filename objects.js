'use strict';

// 1. countWords
function countWords(phrase) {
  const wordCounts = {}; //empty object to store the word counts
  // split the phrase into an array of words 
  const words = phrase.split(' ');
  //loop through each word in the array 
  for (const word of words) {
    //if the word is already in the object, increase the count
    if (wordCounts[word]) {
      wordCounts[word] += 1;
    } else {
      wordCounts[word] = 1; //otherwise, add the word to the object with a count of 1
    }
  }

  return wordCounts;
}
console.log(countWords("hello world hello"));

// 2. getMelonsAtPrice
function getMelonsAtPrice(price) {
  //melon prices 
  const melonPrices = {
    2.50: ['Cantaloupe', 'Honeydew'],
    2.95: ['Watermelon'],
    3.25: ['Musk', 'Crenshaw'],
    14.25: ['Christmas']
  }; 
// check id the price is no in the melon proces 
  if (!melonPrices.hasOwnProperty(price)) {
    return null;
  }
  //return the sorted list of melons at a specific price 
  return melonPrices[price].slice().sort();
}

console.log(getMelonsAtPrice(2.50)); 
console.log(getMelonsAtPrice(2.95)); 
console.log(getMelonsAtPrice(3.25)); 
console.log(getMelonsAtPrice(1.00)); 