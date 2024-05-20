'use strict';

// // 1. printIndices
function printIndices(items) {
  for (const i in items) {
    console.log(`${items[i]} ${i}`); 
    }
  }
printIndices(['apple', 'berry', 'cherry']);


// 2. everyOtherItem
function everyOtherItem(items) {
  // initialize an empty array to store the result
  const result = []; 
// loop through the items array
  for (const i in items) {
//check if the index is even 
  if(i % 2 ===0) { 
    result.push(items[i]); // append the iten to the result array
  }
}
// print the result array 
console.log(result);
}
everyOtherItem(['apple', 'berry', 'cherry', 'date', 'elderberry']);


// 3. smallestNItems
function smallestNItems(items, n) {
  // sort the itens of the array in ascending order 
  const sortedItems = items.sort((a,b) => a - b);
  //take the first n items
  const sortedNItems = sortedItems.slice(0, n);
  // reverse the order of the n smallest items 
  sortedNItems.reverse();
  //print the result
  console.log(sortedNItems)
}
smallestNItems([5, 3, 1, 4, 2], 3); 