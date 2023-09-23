# Sorting Algorithms Part 2

In this section we will be looking at the following sorting algorithms which have the better performance then we have seen in the previous section.

<details>
  <summary> Merge Sort </summary>

# What is Merge Sort?

- Merge sort is a divide and conquer algorithm.
- It divides input array in two halves, calls itself for the two halves and then merges the two sorted halves.

![mergr sort](./assets/merge_sort_concept.png)

## How does it work?

Let's take the example from the image above and see how merge sort works.

```text
arr = [ 3,8 ,1 ,9 ,4, 0, 5, 7]

Divid the array into two halves:
[ 3, 8, 1, 9 ] [ 4, 0, 5, 7 ]

Divid the array into two halves:
[ 3, 8 ] [ 1, 9 ] [ 4, 0 ] [ 5, 7 ]

Divid the array into two halves - Step 1:
[ 3 ] [ 8 ] [ 1 ] [ 9 ] [ 4 ] [ 0 ] [ 5 ] [ 7 ]

Merge the array - Step 2:
[ 3, 8 ] [ 1, 9 ] [ 0, 4 ] [ 5, 7 ]

Merge the array - Step 3:
[ 1, 3, 8, 9 ] [ 0, 4, 5, 7 ]

Merge the array - Step 4:
[ 0, 1, 3, 4, 5, 7, 8, 9 ]
```

From step 1 to step 2, we need to move pointer eight times, same as from step 2 to step 3 and from step 3 to step 4, so the complexity is `8*3 = 24`.

## Complexity

Let's take a dive into the complexity of merge sort.

```text
Step 1:
[ ] [ ] [ ] [ ] [ ] [ ] [ ] [ ]

Step 2:
[ ] [ ] [ ] [ ]

Step 3:
[ ][ ]

Step 4
[ ]
```

Length of an array = `8`, `8/2 = 4, 8/4 = 2, 8/8 = 1`, let's assume the length of an array is `n` and follow the same pattern, it would be like `n/2`, `n/4`, `n/8` and `1`, 1 = `n/2^k`, `2^k = n`, and `log2^n = k`(k means the total number of merging ), we have merged log2^n times, and each time we need to move pointer `n` times, so the complexity is `n*log2^n`, which is `O(nlogn)`.

```text
length = 8

8*log2^8 = 8*3 = 24(just like the graph below)
```

![complexity](./assets/complexity.png)

</details>
