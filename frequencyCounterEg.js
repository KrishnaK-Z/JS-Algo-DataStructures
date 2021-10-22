/**
 * Write a function called "sameFrequency".
 * Given two positive integers, find out if the two numbers have the same frequency of digits.
 */

function sameFrequency(num1, num2) {
  num1 = num1.toString();
  num2 = num2.toString();

  if (num1.length !== num2.length) return null;

  let countNum1 = {};
  let countNum2 = {};

  for (let i = 0; i < num1.length; i++) {
    countNum1[num1[i]] = (countNum1[num1[i]] || 0) + 1;
  }

  for (let i = 0; i < num2.length; i++) {
    countNum2[num2[i]] = (countNum2[num2[i]] || 0) + 1;
  }

  for (let key in countNum1) {
    if (countNum1[key] !== countNum2[key]) return false;
  }

  return true;
}

/**
 * Implement a function called, "areThereDuplicates" which accepts a variable number of arguments,
 * and checks whether there are any duplicates among the arguments passed in.
 * You can solve this using the frequency counter pattern OR the multiple pointers pattern.
 */

function areThereDuplicates() {
  let freq = {};

  for (let val in arguments) {
    const index = arguments[val];
    freq[index] = (freq[index] || 0) + 1;
  }

  for (let key in freq) {
    if (freq[key] > 1) return false;
  }

  return true;
}
