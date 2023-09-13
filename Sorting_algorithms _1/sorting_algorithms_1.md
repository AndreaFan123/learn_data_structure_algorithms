
# Sorting Algorithms Part 1

In this section, we will be looking at the following sorting algorithms which may not have the best performance but in some cases, they are still useful.

<details>
  <summary> Bubble Sort </summary>
  
  # Bubble Sort

- It compares adjacent elements and swaps them if they are not in the intended order.
- "Bubble Sort" is not a good sorting algorithm, in modern programming languages its primarily used for educational purposes.

```text
Original order is : [5, 2, 6, 1, 4]

First round: Push the smallest number 1 to the left.
- 1    5 2 6 4

Second round: Push the second smallest number 2 to the left.
- 1 2   5 6 4

Third round: Push the third smallest number 4 to the left.
- 1 2 4   5 6

Fourth round: Push the fourth smallest number 5 to the left.
- 1 2 4 5   6

Fifth round: Completed sorting.
- 1 2 4 5 6
```

## Pseduo Code

```text
bubbleSort(a):
  for i from 0 to a.length - 2(inclusive):
    for j from a.length - 1 to i + 1(inclusive):
      if a[j] < a[j - 1]:
        exchange a[j] with a[j - 1]
```

The outer loop runs from index 0 to the length of the array - 2, i.e. [5, 2, 6, 1, 4], the outer loop will run from **index 0 (5) to index 3 (1)**, since we don't need to execute the last one, therefore we need to subtract 2 from the length of the array.

The inner loop runs from the last index of the array (j), and it has to compare with the previous index (array - 1) all the way to the index of i + 1

> Resource
> [Javascript Freecodecamp Algorithm #31: Implement Bubble Sort](https://www.youtube.com/watch?v=IAeLoGzU4RE)

</details>
```
