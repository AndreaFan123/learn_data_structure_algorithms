// function 1 example
var fun1 = function (n) {
    var sum = 0;
    for (var i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
};
// console.log("function 1 result:", fun1(10));
// function 2 example
var fun2 = function (n) {
    return (n * (n + 1)) / 2;
};
// console.log("function 2 result:", fun2(10));
// Use time.now() to measure the time
var t1 = window.performance.now();
fun1(1000000000);
var t2 = window.performance.now();
console.log("Time Elapsed: ".concat((t2 - t1) / 1000, " seconds to run func1."));
var t3 = window.performance.now();
fun2(1000000000);
var t4 = window.performance.now();
console.log("Time Elapsed: ".concat((t4 - t3) / 1000, " seconds to run fun2."));
