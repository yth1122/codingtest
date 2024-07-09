const fs = require('fs');
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n').map(t=>t.split(' ').map(Number));
let first = input[0];
let second = input[1];
let getGCD = (num1, num2) => (num2 > 0 ? getGCD(num2, num1 % num2) : num1);
let parent =first[1]*second[1] ;
let child = (first[0]*second[1])+(first[1]*second[0]) 
let gcd = getGCD(child,parent);

console.log(`${child/gcd} ${parent/gcd}`);