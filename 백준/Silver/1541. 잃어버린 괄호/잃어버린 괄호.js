const fs = require('fs');
let input = fs.readFileSync("/dev/stdin").toString().trim();
console.log(input.split('-').map(t=>t.split('+').reduce((acc,t)=>Number(acc) + Number(t),0)).reduce((acc,t)=>acc-t));