// Problem Solving
// 1) understand problem
// 2) Explore concrete examples
// 3) Break it down
// 4) Solve/Simplify
// 5) Look back and refactor

// function charCount(str) {
//   let result = {};
//
//   for (let i = 0; i < str.length; i++) {
//     let char = str[i].toLowerCase();
//
//     if (!/[a-z0-9]/.test(char)) {
//       continue;
//     }
//
//     if (result[char]) {
//       result[char]++;
//     } else {
//       result[char] = 1;
//     }
//   }
//
//   return result;
// }

function charCount(str) {
  let result = {};

  for (let char of str) {
    char = char.toLowerCase();

    if (!/[a-z0-9]/.test(char)) {
      continue;
    }

    // if (result[char]) {
    //   result[char]++;
    // } else {
    //   result[char] = 1;
    // }

    result[char] = ++result[char] || 1;
  }

  return result;
}
