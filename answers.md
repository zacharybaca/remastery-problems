# Problem 1
```
const myForEach = (arr, cb) => {
  for (let i = 0; i < arr.length; i++) {
    cb(arr[i], i, arr)
  }
}
```

# Problem 2
```
function myMap(array, cb) {
    // Your code here
    let newArr = [];
    for (let i = 0; i < array.length; i++) {
      newArr.push(cb(array[i]))
    }
    return newArr;
}
```
# Problem 3
```
function myFilter(array, cb) {
    // Your code here
    let newArr = [];

    for (let i = 0; i < array.length; i++) {
      if (cb(array[i])) {
        newArr.push(array[i])
      }
    }
    return newArr;
}
```
# Problem 4
```
function appleCounter(appleObj) {
  // Your code here
  let objKeys = Object.keys(appleObj);
  let counter = 0;
  
  for (let i = 0; i < objKeys.length; i++) {
      let key = objKeys[i];
      if (key.indexOf("apple") !== -1) {
          counter++;
      }
  }
  return counter;
}
```
