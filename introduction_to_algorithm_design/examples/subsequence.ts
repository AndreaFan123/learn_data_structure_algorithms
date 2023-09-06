function checkIsSubsequence(str1: string, str2: string) {
  // There' no point to execute when the length of string 1 is 0
  if (str1.length === 0) return true;

  let pointer1 = 0;
  let pointer2 = 0;

  while (pointer2 <= str2.length) {
    if (str1[pointer1] === str2[pointer2]) {
      pointer1++;
    }
    if (pointer1 >= str1.length) {
      console.log("Result is:", true);
      return true;
    }
    pointer2++;
  }
  console.log("Result is:", false);
  return false;
}

checkIsSubsequence("book", "brooklyn");
checkIsSubsequence("abbbbc", "bbbac");
