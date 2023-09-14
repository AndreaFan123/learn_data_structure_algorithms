const optBubbleSort = (arr: number[]) => {
  let steps = 0;
  for (let i = 0; i <= arr.length - 2; i++) {
    let isSwapped = false;
    for (let j = arr.length - 1; j >= i + 1; j--) {
      if (arr[j] < arr[j - 1]) {
        // swap
        let temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
        steps++;
        isSwapped = true;
      }
    }
    if (!isSwapped) {
      break;
    }
  }
  console.log(`It took ${steps} to complete sorting`);
  console.log(arr);
};

optBubbleSort([2, 5, 7, 9, 10, 12, 3]);
