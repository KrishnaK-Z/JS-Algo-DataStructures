/**
 * frequency counter pattern
 */
function hasSqrOfNum(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    const index = arr2.indexOf(arr1[i] ** 2);
    if (index === -1) {
      return false;
    }
    arr2.splice(index, 1);
  }

  return true;
}

function sameRf(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  const fq1 = {};
  const fq2 = {};

  for (let i of arr1) {
    fq1[i] = (fq1[i] || 0) + 1;
  }

  for (let i of arr2) {
    fq2[i] = (fq2[i] || 0) + 1;
  }

  for (let key in fq1) {
    if (!(key ** 2 in fq2)) {
      return false;
    }

    if (fq1[key] !== fq2[key ** 2]) {
      return false;
    }
  }

  return true;
}

// same([1, 4, 3, 1], [1, 16, 1, 9]);

// Given two strings, write a function to determine if the second string is an anagram of the
// first. An anagram is a word, phrase, or name formed by rearranging the letters of another,
// such as <i>cinema</i>, formed from <i>iceman</i>
function frequencyCounter(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  const lookUp = {};

  for (let i = 0; i < str1.length; i++) {
    let letter = str1[i];

    lookUp[letter] ? lookUp[letter]++ : (lookUp[letter] = 1);
  }

  for (let i = 0; i < str2.length; i++) {
    const letter = str2[i];

    if (!lookUp[letter]) {
      return false;
    } else {
      lookUp[letter]--;
    }
  }

  return true;
}

// Implement a function called <b>countUniqueValues, </b>which accepts a sorted array,
// and counts the unique values in the array. There can be negative numbers in the array,
// but it will always be sorted.
function countUniqueValues(arr){
  if(arr.length === 0) return 0;
  var i = 0;
  for(var j = 1; j < arr.length; j++){
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j]
    }
  }
  return i + 1;
}

function countUniqueItems(arr){
  if(arr.length === 0) return 0;

  const freq = {};
  for (let i = 0; i < arr.length ; i++) {
    freq[arr[i]] = (freq[arr[i]] || 0) + 1;
  }

  return Object.keys(freq).length;
}


countUniqueValues([1,2,2,5,7,7,99])
countUniqueItems([1,2,2,5,7,7,99])
