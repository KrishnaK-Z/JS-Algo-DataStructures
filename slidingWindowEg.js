/**
 * Given an array of integers and a number, write a function called "maxSubarraySum",
 * which finds the maximum sum of a subarray with the length of the number passed to the function.
 */
function maxSubarraySum(arr, num) {
  if (arr.length < num) return false;

  let total = 0;
  for (let i = 0; i < num; i++) {
    total += arr[i];
  }

  let maxTotal = total;

  for (let i = num; i < arr.length; i++) {
    total = total - arr[i - num] + arr[i];
    if (maxTotal < total) {
      maxTotal = total;
    }
  }

  return total;
}

/**
 * Write a function called "minSubArrayLen" which accepts two parameters
 * - an array of positive integers and a positive integer.
 *
 * This function should return the minimal length of a contiguous subarray of which
 * the sum is greater than or equal to the integer passed to the function.
 * If there isn't one, return 0 instead.
 *
 * minSubArrayLen([2,3,1,2,4,3], 7) // 2 -> because [4,3] is the smallest subarray
 */
function minSubArrayLen(nums, sum) {
  // start index of the sub array
  let start = 0;
  // end index of the sub array
  let end = 0;
  let minLen = Infinity;
  let total = 0;

  while (start < nums.length) {
    // if current window doesn't add up to the given sum then
    // move the window to right
    if (total < sum && end < nums.length) {
      total += nums[end];
      end++;
    }
    // if current window adds up to at least the sum given then
    // we can shrink the window
    else if (total >= sum) {
      minLen = Math.min(minLen, end - start);
      total -= nums[start];
      start++;
    }
    // current total less than required total but we reach the end, need this or else we'll be in an infinite loop
    else {
      break;
    }
  }

  return minLen === Infinity ? 0 : minLen;
}

/**
 * Write a function called "findLongestSubstring",
 * which accepts a string and returns the length of the longest substring
 * with all distinct characters.
 */
// rithmschool- 7
// thisisawesome - 6
// thecatinthehat - 7
function findLongestSubstring(str) {
  let longest = 0;
  let seen = {};
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1);
    // store the index of the next char so as to not double count
    seen[char] = i + 1;
  }
  return longest;
}
