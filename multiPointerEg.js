/**
 * Write a function called averagePair.
 * Given a sorted array of integers and a target average, determine if there is
 * a pair of values in the array where the average of the pair equals the target average.
 * There may be more than one pair that matches the average target.
 */
function averagePair(arr, num) {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    const avg = (arr[start] + arr[end]) / 2;
    if (avg === num) return true;
    else if (avg < num) start++;
    else end--;
  }

  return false;
}

/**
 * Write a function called "isSubsequence" which takes in two strings and checks
 * whether the characters in the first string form a subsequence of the characters
 * in the second string. In other words, the function should check whether the characters
 * in the first string appear somewhere in the second string, without their order changing.
 */
function isSubsequence(str1, str2) {
  if (!str1.length) return false;

  let i = 0;
  let j = 0;

  while (j < str2.length) {
    if (str2[j] === str1[i]) i++;
    else if (i === str1.length) return true;
    j++;
  }

  return false;
}
