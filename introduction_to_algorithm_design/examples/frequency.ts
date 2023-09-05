// Check two strings if they have same characters, order doesn't matter

type Counter = { [key: string]: number };

function checkFrequency(str1: string, str2: string) {
  // make them to be arrays
  let arr1 = str1.split("");
  let arr2 = str2.split("");

  // Check if they have same length,
  // If not, then return false immidiately

  if (arr1.length !== arr2.length) return false;

  // Set two counters
  let counter1: Counter = {};
  let counter2: Counter = {};

  // Loop through arrays
  for (let i = 0; i < arr1.length; i++) {
    // If i exists in arr1 of counter 1
    if (counter1[arr1[i]]) {
      counter1[arr1[i]]++;
    } else {
      counter1[arr1[i]] = 1;
    }
  }

  for (let j = 0; j < arr2.length; j++) {
    if (counter2[arr2[j]]) {
      counter2[arr2[j]]++;
    } else {
      counter2[arr2[j]] = 1;
    }
  }

  // Check value in counter
  for (let property in counter1) {
    if (!counter1[property]) return false;

    if (counter2[property] !== counter1[property]) return false;

    return true;
  }
}

console.log("Result of checking:", checkFrequency("abba", "aabb"));
