// Write a recursive function called <strong>reverse</strong>
// which accepts a string and returns a new string in reverse.
function reverse(str) {
  if (str.length === 1) return str;

  const str2 = str.split('');
  str2.splice(str2.length -1, 1);

  return str[str.length - 1] + reverse(str2.join(''))
}

function reverse2(str) {
  if(str.length <= 1) return str;

  return str.slice(1) + str[0];
}

function reverse3(str) {
  if (str.length === 1) return str;

  return str[str.length - 1] + reverse(str.slice(0, -1))
}

reverse('awesome');

// Write a recursive function called <strong>isPalindrome</strong> which returns true
// if the string passed to it is a palindrome (reads the same forward and backward).
// Otherwise it returns false.
function isPalindrome(str) {
  if (str.length <= 1) return true;
  if (str.length === 2) return str[0] === str[1];
  if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1));

  return false;
}

isPalindrome('tacocat')

// Write a recursive function called <strong>someRecursive</strong> which accepts
// an array and a callback. The function returns true if a single value in the array
// returns true when passed to the callback. Otherwise it returns false.
// const isOdd = val => val % 2 !== 0;
function someRecursive(arr, callBack) {
  if (!arr.length) return false;
  if (callBack(arr[0])) return true;
  return someRecursive(arr.slice(1), callBack);
}

// Write a recursive function called <strong>flatten</strong> which accepts
// an array of arrays and returns a new array with all values flattened.
// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
function flatten(arr) {
  let newArr = [];

  for(let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      newArr = [...newArr, ...flatten(arr[i])];
    } else {
      newArr.push(arr[i]);
    }
  }

  return newArr;
}

flatten([[1],[2],[3]])

// Write a recursive function called <strong>capitalizeFirst</strong>.
// Given an array of strings, capitalize the first letter of each string in the array.
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}


function capitalizeFirstWord (array) {
  if (array.length === 1) {
    return [capitalize(array[0])];
  }

  let res = capitalizeFirstWord(array.slice(0, -1));
  res.push(capitalize(array.slice(-1)[0]));
  return res;
}

function capitalizeFirstWord2(arr) {
  let newArr = [];

  if (arr.length === 1) return [capitalize(arr[0])];

  newArr.push(capitalize(arr[0]));
  newArr = [...newArr, ...capitalizeFirstWord2(arr.slice(1))];

  return newArr;
}

capitalizeFirstWord(['car','taco','banana']);

// Write a recursive function called <strong>nestedEvenSum</strong>.
// Return the sum of all even numbers in an object which may contain nested objects.
let obj2 = {
  a: 2,
  b: {b: 2, bb: {b: 3, bb: {b: 2}}},
  c: {c: {c: 2}, cc: 'ball', ccc: 5},
  d: 1,
  e: {e: {e: 2}, ee: 'car'}
};

function nestedEvenSum (obj, sum = 0) {
  for(let key in obj) {
    if (typeof obj[key] === 'object') {
      sum+=nestedEvenSum(obj[key]);
    } else if (typeof obj[key] === 'number' && obj[key] % 2 === 0) {
      sum+=obj[key];
    }
  }

  return sum;
}

nestedEvenSum(obj2); // 10


// Write a recursive function called <strong>capitalizeWords</strong>.
// Given an array of words, return a new array containing each word capitalized.
function capitalizeWords (strs) {
  if (strs.length === 1) {
    return [strs[0].toUpperCase()];
  }

  let res = capitalizeWords(strs.slice(0, -1));
  res = [...res, strs.slice(-1)[0].toUpperCase()];

  return res;
}

capitalizeWords(['i', 'am', 'learning', 'recursion'])

// Write a function called <code>stringifyNumbers</code> which takes in an object
// and finds all of the values which are numbers and converts them to strings.
// Recursion would be a great way to solve this!
let obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66
    }
  }
}

function stringifyNumbers (obj) {
  const newObj = {};

  for (let key in obj) {
    if (typeof obj[key] === 'number') {
      newObj[key] = obj[key].toString();
    } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
      newObj[key] = stringifyNumbers(obj[key]);
    } else {
      newObj[key] = obj[key]
    }
  }

  return newObj;
}

// Write a function called <code>collectStrings</code> which accepts an object
// and returns an array of all the values in the object that have a typeof string.
function collectStrings(obj) {
  let arr = [];

  for (let key in obj) {
    if (typeof obj[key] === 'string') {
      arr = [...arr, obj[key]]
    } else {
      arr = [...arr, ...collectStrings(obj[key])];
    }
  }

  return arr;
}

const obj4 = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz"
          }
        }
      }
    }
  }
}

collectStrings(obj4)

