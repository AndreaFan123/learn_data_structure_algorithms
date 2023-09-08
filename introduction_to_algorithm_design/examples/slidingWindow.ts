function maxSum(arr: number[], size: number) {
  let max_value = -Infinity;

  if (size > arr.length) {
    return null;
  }

  for (let i = 0; i <= arr.length - size; i++) {
    let attempt = 0;
    for (let j = i; j < i + size; j++) {
      attempt += arr[j];
    }
    if (attempt > max_value) {
      max_value = attempt;
    }
  }

  console.log(max_value);
  return max_value;
}

maxSum([2, 7, 3, 0, 6, 1, -5, -12, -11], 3);
