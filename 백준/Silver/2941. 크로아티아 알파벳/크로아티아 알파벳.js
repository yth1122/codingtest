const fs = require('fs');
let input = fs.readFileSync("/dev/stdin").toString().trim();

let cro = ['c=','c-','dz=','d-','lj','nj','s=','z='];

for(let value of cro){
    input = input.split(value).join('T');    
}
console.log(input.length);