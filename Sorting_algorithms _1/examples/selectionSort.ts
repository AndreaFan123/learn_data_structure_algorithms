const selectionSort = (arr: number[]) => {
  // Loop through the array to the last second element
  for (let i = 0; i <= arr.length - 2; i++) {
    // Set the minIndex to the current index in the first loop
    let minIndex = i;
    // Loop through the array from the current index to the last element
    for (let j = i; j <= arr.length - 1; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    let temp = arr[minIndex];
    arr[minIndex] = arr[i];
    arr[i] = temp;
  }
  console.log(arr);
  return arr;
};

selectionSort([-2, 3, 7, 10, -9, 9, 1]);
