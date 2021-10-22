// Sliding window problem.

function maxSubArraySum(arr, num) {
  if (arr.length < num) {
    return null;
  }

  let max = -Infinity;

  for (let i = 0; i < arr.length - num + 1; i++) {
    let temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}

maxSubArraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3);

function maxSubArraySumRF(arr, num) {
  let temSum = 0;
  let maxSum = 0;
  if (arr.length < num) {
    return null;
  }

  for (let i = 0; i < num; i++) {
    temSum += arr[i];
  }
  maxSum = temSum;

  for (let i = num; i < arr.length; i++) {
    temSum = temSum - arr[i - num] + arr[i];
    if (temSum > maxSum) {
      maxSum = temSum;
    }
  }
  return maxSum;
}
