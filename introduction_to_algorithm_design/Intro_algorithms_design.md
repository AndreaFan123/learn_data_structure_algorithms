
# Introduction to Algorithm Design

<details>
<summary>Linear Search(Sequential Search)</summary>

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

An algorithm that finds the position of a target value within a **sorted array**.

More efficient than linear search, but **ONLY** works on sorted arrays.

</details>

