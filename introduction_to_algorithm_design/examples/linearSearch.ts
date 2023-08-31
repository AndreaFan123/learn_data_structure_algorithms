const arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function linearSearch(arr: number[], n: number) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === n) {
      console.log(`Found number of ${n} at index ${i}`);
      return i;
    }
  }
  console.log(`Did not find ${n}`);
  return -1;
}

linearSearch(arr, 5);
