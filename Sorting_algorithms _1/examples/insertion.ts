const insertionSort = (arr: number[]) => {
  for (let j = 1; j <= arr.length - 1; j++) {
    let key = arr[j];
    let i = j - 1;
    while (i >= 0 && arr[i] > key) {
      arr[i + 1] = arr[i];
      i = i - 1;
    }
    arr[i + 1] = key;
    console.log(arr);
  }
  return arr;
};

console.log(insertionSort([14, -4, 17, 6, 22, 1, -5]));

/**
 * for i from index 1 to arr.length - 1:
    key = arr[j]
    // Insert arr[i] into the sorted sequence arr[0...i-1]
    i = j - 1
    while i >= 0 and arr[i] > key:
      arr[i + 1] = arr[i]
      i -= 1
    arr[i + 1] = key
 */
