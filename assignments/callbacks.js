// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back

  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 

  firstItem(items, function(first) {
    console.log(first)
  });

*/

// Challenge 1
length = (arr) => arr.length;
getLength = (arr, cb) => cb(arr) // passing array into the cb function.
console.log(getLength(items, length)); // calling the length function and passing the items array into it the get the items array length.

// Challenge 2
lastItem = (arr) =>  arr[arr.length - 1]
last = (arr, cb) => cb(arr); // last passes the last item of the array into the callback.
console.log(last(items, lastItem));

// Challenge 3
add = (x, y) =>  x + y;
sumNums = (x, y, cb) => cb(x,y); // sumNums adds two numbers (x, y) and passes the result to the callback.
console.log(sumNums(2,5, add));

//Challenge 4 
multiply = (x,y) =>  x * y;
multiplyNums = (x, y, cb) => cb(x,y); // multiplyNums multiplies two numbers and passes the result to the callback.
console.log(multiplyNums(3, 4, multiply));

//challenge 5
function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  for(i = 0; i < list.length; i++) {
    if(list[i] === item) {
      return cb(true);
    } 
  } return cb(false) // outside of the for loop, otherwise the loop will end early and you won't get the desired outcome.
}

console.log(contains('Pencil', items, (isHiding) => {
  console.log(isHiding);
}));

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
