function pointer(arr: number[], avg: number) {
  // create right and left pointer and an empty array

  let result: number[] = [];
  let leftPointer = 0;
  let rightPointer = arr.length - 1;

  while (rightPointer > leftPointer) {
    // create a temporary avg
    let tempoAvg = (arr[rightPointer] + arr[leftPointer]) / 2;

    if (tempoAvg > avg) {
      rightPointer--;
    } else if (tempoAvg < avg) {
      leftPointer++;
    } else if (tempoAvg === avg) {
      result.push(arr[leftPointer], arr[rightPointer]);
      rightPointer--;
      leftPointer++;
    }
  }
  console.log("Result of average pair", result);
  return result;
}

pointer([-11, 0, 1, 2, 3, 5, 8, 20], 1.5);
