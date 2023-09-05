function averagePair(arr: number[], avg: number) {
  let result: number[] = [];
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if ((arr[i] + arr[j]) / 2 === avg) {
        result.push(arr[i], arr[j]);
      }
    }
  }
  console.log("Checking average pari result:", result);
}

averagePair([-11, 0, 1, 2, 3, 5, 8, 20], 1.5);
