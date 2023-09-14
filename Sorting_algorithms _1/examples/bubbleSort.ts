const bubbleSort = (arr: number[]) => {
  let step = 0;
  for (let i = 0; i <= arr.length - 2; i++) {
    for (let j = arr.length - 1; j >= i + 1; j--) {
      if (arr[j] < arr[j - 1]) {
        // swap
        let temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
        step++;
      }
    }
  }
  console.log(`It took ${step} to complete this bubble sort.`);
  console.log(arr);
};

// Make a large array
let largeArr: number[] = [];

for (let i = 0; i < 100; i++) {
  largeArr.push(Math.floor(Math.random() * 100));
}

bubbleSort(largeArr);

// bubbleSort([2, 9, 12, 3, 5, 7, 10]);
