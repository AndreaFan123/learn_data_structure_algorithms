// Define merge function

function merge(arr1: number[], arr2: number[]) {
  let result: number[] = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] > arr2[j]) {
      result.push(arr2[j]);
      j++;
    } else {
      result.push(arr1[i]);
      i++;
    }
  }
  // Dealing with the left elements, loop them and add the to the arr
  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }
  return result;
}
// console.log(merge([1, 5, 9], [-3, 2, 7]));

function mergeSort(arr: number[]): number[] {
  if (arr.length <= 1) {
    return arr;
  } else {
    let middle = Math.floor(arr.length / 2);
    let left = arr.slice(0, middle);
    let right = arr.slice(middle, arr.length);
    return merge(mergeSort(left), mergeSort(right));
  }
}

console.log(mergeSort([13, 9, 10, 4, 7, 2, 11, 5, 19, 1]));

/**
 * Result
[
  1,  2,  4,  5,  7,
  9, 10, 11, 13, 19
]
 * 
*/
