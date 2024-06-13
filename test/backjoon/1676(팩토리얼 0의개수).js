const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim();

let fac = 1;
let count = 0;
for(let i=2; i<= +input; i++){
	fac*=i;
    while(fac %10 ==0){ fac /=10; count+=1};
    fac %= 1000000000000;
};
console.log(count)