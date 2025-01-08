const fs = require('fs');
let [start, end] = fs.readFileSync("/dev/stdin").toString().trim().split(' ').map(Number);
for(let i = start; i <= end; i++) {
    if(i <= 1) continue; 
        
    let isPrime = true;
        
    for(let j = 2; j <= Math.sqrt(i); j++) {
        if(i % j === 0) {
            isPrime = false;
            break;
        }
     }
        
     if(isPrime) {
        console.log(i);
     }
}