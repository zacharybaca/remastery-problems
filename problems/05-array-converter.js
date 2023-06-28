/***********************************************************************
Write a function `arrayConverter(array)` that will intake an
array as an argument and returns an object representing the count of each
value in the array. **Hint:** don't forget you can check if a key is present
in an object by using `obj[key] === undefined`.

Examples:

console.log(arrayConverter(["apple", "apple"])); // => {apple: 2}
console.log(arrayConverter(["mango", "pineapple"])); // => {mango: 1, pineapple: 1}
console.log(arrayConverter(["apple", "banana", "potato", "banana"])); // => {apple: 1, banana: 2, potato: 1}
***********************************************************************/

function arrayConverter(array) {
  // Your code here
  let fruitObj = {};
  let count = 1;
  for (let i = 0; i < array.length; i++) {
    //Store each element in a variable
    let key = array[i];
    //Check to see if key is already in object
    //If it is, increment its value by 1
    if (fruitObj[key]) {
      fruitObj[key] = count += 1
    } else {
      //If its not in the object, set the key equal to default count value, which is 1
      fruitObj[key] = count
    }
  }
  return fruitObj;
}

// console.log(arrayConverter(["apple", "apple"])); // => {apple: 2}
// console.log(arrayConverter(["mango", "pineapple"])); // => {mango: 1, pineapple: 1}
// console.log(arrayConverter(["apple", "banana", "potato", "banana"])); // => {apple: 1, banana: 2, potato: 1}
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = arrayConverter;
