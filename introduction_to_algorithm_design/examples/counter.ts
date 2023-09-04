function counter(arr1: number[], arr2: number[]) {
  let result: number[] = [];
  let counter: { [key: number]: number } = {};
  // Concantenate the two arrays
  let arr3: number[] = arr1.concat(arr2);

  // loop through the array and count the number of times each element appears
  for (let i = 0; i < arr3.length; i++) {
    // If the element is not in the counter object, add it and set the value to 1
    if (!counter[arr3[i]]) {
      counter[arr3[i]] = 1;
    }
    // If the element is already in the counter object, increment the value by 1
    counter[arr3[i]]++;
  }
  console.log(counter);

  // loop through the counter object and push the elements that appear more than once into the result array
  for (let property in counter) {
    if (counter[property] >= 3) {
      result.push(parseInt(property));
    }
  }
  console.log(result);
}

counter([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]);
