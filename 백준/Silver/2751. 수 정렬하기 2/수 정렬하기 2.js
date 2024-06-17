const input = require("fs")
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split("\n")
  .map((item) => Number(item));

const arr = input.slice(1);

arr.sort((a, b) => a - b); 
console.log(arr.join("\n"));