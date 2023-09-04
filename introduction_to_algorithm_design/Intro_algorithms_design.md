# Introduction to Algorithm Design

This chapter is about the introduction to algorithm design.

<details>
<summary>Linear Search(Sequential Search)</summary>

# Linear Seacch Description

An algorithm that sequentially **iterates** each element of the list **from left to right** **until a match is found or the whole list has been searched**.

## Pseudocode

This is a for loop, we loop through the array and check if the number of `[i]` from the array is equal to `n`, if it is, we return 1, if not, we return `-1`.

```
LINEARN-SEARCH(array, n):
    for i from 0 to array.length - 1:
        if (array[i] == n):
          return i;
    return -1;
```

## Overview of Linear Search

- Worst-case performance: O(n).
  - The target that we are looking for in the array is at the end of the array.
- Best-case performance: O(1).
  - The target that we are looking for in the array is at the beginning of the array.
- Average performance: O(n/2).
  - Means that you need to at least search half of the array to find the target.

[Linear Search - CS50 Shorts](https://www.youtube.com/watch?v=TwsgCHYmbbA)

</details>

<details>
<summary>Binary Search</summary>

# Binary Search Description

An algorithm that finds the position of a target value within a **sorted array**.

More efficient than linear search, but **ONLY** works on sorted arrays.

## Pseudocode

```
binarySearch(arr, n)
   min = 0
   max = arr.length - 1
   while (min <= max) / 2
         middle = (min + max) / 2
         if (n > arr[middle]):
             min = mid + 1
         else if (n < arr[middle]):
             max = middle - 1
         else:
               return middle
   return -1
```

## Example

```typescript
let numOfArr: number[] = [
  9, 12, 15, 18, 19, 20, 22, 25, 26, 26, 33, 37, 38, 41, 47, 47, 50, 55, 57, 60,
  68, 80, 87, 90, 98, 100, 103, 108, 109, 109, 116, 120, 120, 124, 127, 128,
  131, 135, 135, 139, 143, 145, 151, 155, 156, 158, 163, 164, 165, 169, 169,
  173, 174, 176, 177, 178, 181, 182, 182, 183, 184, 189, 192, 195, 200, 201,
  203, 204, 207, 213, 217, 222, 222, 222, 227, 228, 233, 235, 237, 239, 239,
  243, 248, 251, 252, 257, 260, 260, 263, 268, 270, 271, 271, 276, 281, 284,
  285, 295, 297, 298,
];

function binarySearch(arr: number[], n: number) {
  let min = 0;
  let max = arr.length - 1;
  let step = 0;

  while (min <= max) {
    // step++;
    let middle = Math.floor((max + min) / 2);
    if (n > arr[middle]) {
      min = middle + 1;
    } else if (n < arr[middle]) {
      max = middle - 1;
    } else if (n === arr[middle]) {
      console.log("Found number " + n + " at position " + middle);
      console.log("Found it after " + step + " steps.");
      return middle;
    }
  }

  console.log("Cannot find number " + n);
  return -1;
}

binarySearch(numOfArr, 213);
```

After running the code, here is the result:

![result_of_running_binary_search](./assets/binarySearch.png)

## Explaination

You can try to run code with different numbers, and you will find that the number of steps is at most 6 to 7 steps in this case.

Here is the graph to help us understand the time complexity of binary search:

![explain](./assets/explain.png)

Let assume that the length of the array is `n`, then the result would be:

```
n => n/2 => n/4 => n/8 ... => 1
log2ⁿ (O(log2ⁿ) => O(log n))
```

## Overview of Binary Search

- Worst-case performance: O(log n).
  - If the target is at the end of the array.
- Best-case performance: O(1).
  - If the target is at the beginning of the array.
- Average performance: O(log n).
  - Means that you need to at least search half of the array to find the target.

## Resources

[Introduction to Binary Search by CS Dojo](https://www.youtube.com/watch?v=6ysjqCUv3K4)

</details>

<details>
  <summary>Intersaction Problems</summary>

# Intersaction Problems

Let's say we want to find the intersaction of two arrays, i.e. arr1 is `[1, 2, 3, 4, 5]` and arr2 is `[2, 4, 6, 8, 10]`, then the intersaction of arr1 and arr2 is `[2, 4]`, usually we would compare each element of arr1 with each element of arr2, and if they are the same, we would push the element into a new array, and return the new array.

```typescript
function findIntersaction(arr1: number[], arr2: number[]) {
  let result = [];
  for (let i = 0; i <= arr1.length; i++) {
    for (let j = 0; j <= arr2.length; j++) {
      console.log(arr1[i], arr2[j]);
      if (arr1[i] === arr2[i]) {
        result.push(arr1[i]);
      }
    }
  }
  console.log(result);
  return result;
}

findIntersaction([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]);
```

The result would be:
![intersaction](./assets/intersaction.png)

But let's dive into this function and see how many steps it takes to find the intersaction of two arrays.

![compareArrays](./assets/compareTwoArrays.png)

![loopToFindInteraction](./assets/loopTofindIntersaction.png)

As you can see we need to compare each element of arr1 with each element of arr2, so the time complexity of this function is `O(n^2)` which is not good.

## Counter

"counter" is a variable that is used to count something, e.g. the number of times a loop iterates which we will be using this concept to solve the intersaction problem.

```typescript
function counter(arr1: number[], arr2: number[]) {
  let result: number[] = [];
  let counter: { [key: number]: number } = {};
  // Concantenate the two arrays
  let arr3: number[] = arr1.concat(arr2);

  // loop through the array and count the number of times each element appears
  for (let i = 0; i < arr3.length; i++) {
    // If the element is not in the counter object, add it and set the value to 1
    if (!counter[arr3[i]]) {
      counter[arr3[i]] = 1;
    }
    // If the element is already in the counter object, increment the value by 1
    counter[arr3[i]]++;
  }
  console.log(counter);

  // loop through the counter object and push the elements that appear more than once into the result array
  for (let property in counter) {
    if (counter[property] >= 3) {
      result.push(parseInt(property));
    }
  }
  console.log(result);
}

counter([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]);
```

first `console.log(counter)` shows that the counter object is:

![counter](./assets/counter.png)

We can see that only `3`, `4`, and `5` appear more than others, so we push them into the result array.

Second `console.log(result)` shows that the result array is:

![result](./assets/counterResult.png)

</details>
