function maxSum(arr: number[], size: number) {
  let maxValue = -Infinity;

  if (size > arr.length) {
    return null;
  }

  for (let i = 0; i <= arr.length - size; i++) {
    let attempt = 0;
    for (let j = i; j < i + size; j++) {
      attempt += arr[j];
    }
    if (attempt > maxValue) {
      maxValue = attempt;
    }
  }

  console.log(maxValue);
  return maxValue;
}

// maxSum([2, 7, 3, 0, 6, 1, -5, -12, -11], 3);

function maxSumImproved(arr: number[], size: number) {
  if (size > arr.length) return null;

  // calculate the value of first group [2, 7, 3]
  let maxValue = 0;
  for (let i = 0; i < size; i++) {
    maxValue += arr[i];
  }

  let tempValue = maxValue;
  for (let j = size; j < arr.length; j++) {
    //console.log("j", j); // index of the rest of number
    tempValue = maxValue + arr[j] - arr[j - size];
    if (tempValue > maxValue) maxValue = tempValue;
  }
  return maxValue;
}
maxSumImproved([2, 7, 3, 0, 6, 1, -5, -12, -11], 3);
