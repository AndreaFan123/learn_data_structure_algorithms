# What is complexity?

There are two complexity we need to consider when we compare algorithms:
1. Time Complexity (Which one is faster?)
2. Space Complexity (Which one uses less memory?)

## How to measure complexity?

Generally, every `addition`, `subtraction`, `multiplication`, `division` and comparison (`<`, `>`, `<=`, `>=`, `==`, `!=`) is considered as `1 operation`.

Complexity means how many operations are required to complete the task.

We use funtion (`f(n)`) to represent the complexity of an algorithm. `n` is the size of the input.

```typescript
// example2.ts

function example(n: number) {
  let counter = 0;
  for (let i = 0; i < 3 * n; i++) {
    // console.log("Hello");
    counter++;
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      // console.log("Hello");
      counter++;
    }
  }
  // console.log("Hello");
  // console.log("Hello");
  // console.log("Hello");
  // console.log("Hello");
  counter += 4;

  return counter;
}

for (let i = 2; i < 10; i++) {
  console.log(`example${i} will print out ` + example(i) + " Hellos");
}
```

We can see that f(n) and n have a quadratic relationship.

![example2Result](./assets/result_2.png);

```
n = 2, f(n) = 14
n = 3, f(n) = 22
n = 4, f(n) = 32
n = 5, f(n) = 44
n = 6, f(n) = 58
n = 7, f(n) = 74
n = 8, f(n) = 92
n = 9, f(n) = 112
.
.
.
n = 100, f(n) = 10304
```

As you can see, when increases number of n, the value of f(n) increases quadratically.