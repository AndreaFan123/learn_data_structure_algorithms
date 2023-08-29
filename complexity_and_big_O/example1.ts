// function 1 example
const fun1 = (n: number) => {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
};

// console.log("function 1 result:", fun1(10));

// function 2 example
const fun2 = (n: number) => {
  return (n * (n + 1)) / 2;
};

// console.log("function 2 result:", fun2(10));

// Use time.now() to measure the time
let t1 = window.performance.now();
fun1(1000000000);
let t2 = window.performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds to run func1.`);

let t3 = window.performance.now();
fun2(1000000000);
let t4 = window.performance.now();
console.log(`Time Elapsed: ${(t4 - t3) / 1000} seconds to run fun2.`);
