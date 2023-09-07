function maxSum(arr: number[], size: number) {
  // Why -infinity? It's a way to ensure that any real number it is compared to later will be greater.
  let maxValue = -Infinity;

  // Check if size is bigger then the length of an array
  if (size < arr.length) return null;

  for (let i = 0; i <= arr.length - size; i++) {
    for (let j = i; j < i + size; j++) {
      console.log(i, j);
    }
  }
}

maxSum([2, 7, 3, 0, 6, 1, -5, -12, -11], 3);
