/***********************************************************************
Write a function `appleCounter(appleObj)` that takes in an object containing a
number of keys that have the word 'apple' contained within them. The `appleCounter`
function will be in charge of returning the number of keys that contain the word
"apple".

**Hint**: you may want to take all the keys and lower case them for easier
searching.


Example:
let obj = { banana: "yay!" };
appleCounter(obj); // => 0

let obj1 = { crabapple: "yum!" };
appleCounter(obj1); // => 1

let obj2 = { crabapple: "yum!", honeyapple: "super yum", banana: "yay" };
appleCounter(obj2); // => 2


let obj3 = {
  crabApple: "yum!",
  honeyApple: "super yum",
  banana: "yay",
  bigapple: "NYC"
};
appleCounter(obj3); // => 3
***********************************************************************/

function appleCounter(appleObj) {
  // Your code here
  //Set variable equal to array of keys in appleObj
  let objKeys = Object.keys(appleObj);
  //Initialize counter variable to count number of times "apple" is in key
  let counter = 0;

  for (let i = 0; i < objKeys.length; i++) {
    //Store each key element in variable, and convert to lowercase
      let key = objKeys[i].toLowerCase();
      //If key contains a sequential stream of characters of "apple", increment counter variable
      if (key.indexOf("apple") !== -1) {
          counter++;
      }
  }
  return counter;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = appleCounter;
