function countNumber(num) {
  if (num <= 0) {
    console.log("All Done");
    return;
  }
  num--;
  console.log("Num", num);
  countNumber(num);
}

// Factorial
function factorial(num) {
  if (num === 1 )
    return num;

  return num * factorial(num -1);
}

// Helper function - collect odd numbers from an array of items.
function collectOddValues(nums) {
  let result = [];

  function helper (inp) {
    if(!inp.length) {
      return;
    }

    if (inp[0] % 2 === 0) {
      result.push(inp[0]);
    }

    helper(inp.slice(1));
  }

  helper(nums);

  return result;
}

// Pure function - collect odd numbers from an array of items.
function collectOddValuesPure(nums) {
  let newArr = [];

  if(!nums.length) {
    return newArr;
  }

  if(nums[0] % 2 !== 0) {
    newArr.push(nums[0]);
  }

  newArr = [...newArr, ...collectOddValuesPure(nums.slice(1))]

  return newArr;
}

// Power
function power(base, expo) {
  if (!expo) return 1;

  return base * power(base, expo - 1);
}

// Product of every items in an array
function productOfArray(nums) {
  if (!nums.length) return 1;

  return nums[0] * productOfArray(nums.slice(1));
}

// Write a function called recursiveRange which accepts a number and adds up
// all the numbers from 0 to the number passed to the function
function recursiveRange (num) {
  if (!num) return 0;

  return num + recursiveRange(num -1);
}

// Fibonacci
function fib(n) {
  if (n <= 2) return 1;

  return fib(n-1) + fib(n-2);
}
