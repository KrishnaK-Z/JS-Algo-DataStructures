// Time complexity and space complexity
function addUpTo(n) {
  let total = 0;
  for (let i = 0; i <= n; i++) {
    total += i;
  }
  return total;
}

console.log(addUpTo(3));

function addUpTo2(n) {
  return (n * (n + 1)) / 2;
}

console.log(addUpTo2(3));

let t1 = performance.now();
console.log(addUpTo(10000));
let t2 = performance.now();
console.log("Time", (t2 - t1) / 1000);

// let t1 = performance.now();
// console.log(addUpTo2(3));
// let t2 = performance.now();
// console.log("Time2", (t2-t1)/1000);
