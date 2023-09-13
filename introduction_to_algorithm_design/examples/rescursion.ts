function recursionSequence(n: number): number {
  console.log(`We have executed function recursionSequence(${n})`);
  if (n === 1) return 10;
  return recursionSequence(n - 1) + 15;
}

console.log(recursionSequence(2));
console.log(recursionSequence(3));
console.log(recursionSequence(4));
console.log(recursionSequence(5));
