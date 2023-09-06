function checkIsPalindrome(str: string) {
  // create two pointers
  let leftPointer = 0;
  let rightPointer = str.length - 1;

  // loop thr and check if they are equal.
  while (leftPointer <= rightPointer) {
    if (str[leftPointer] === str[rightPointer]) {
      leftPointer++;
      rightPointer--;
    } else {
      console.log(`${str} is not a palindrome`, false);
      return false;
    }
    console.log(`${str} is a palindrome`, true);
    return true;
  }
}
checkIsPalindrome("tacocat");
checkIsPalindrome("tenet");
checkIsPalindrome("absolute");
