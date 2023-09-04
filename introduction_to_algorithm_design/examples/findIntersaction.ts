function findIntersaction(arr1: number[], arr2: number[]) {
  let result: number[] = [];
  for (let i = 0; i <= arr1.length; i++) {
    for (let j = 0; j <= arr2.length; j++) {
      console.log(arr1[i], arr2[j]);
      if (arr1[i] === arr2[i]) {
        result.push(arr1[i]);
      }
    }
  }
  console.log(result);
  return result;
}

findIntersaction([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]);
