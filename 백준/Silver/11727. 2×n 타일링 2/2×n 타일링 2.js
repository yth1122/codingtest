const fs = require('fs');
let input = fs.readFileSync("/dev/stdin").toString().trim();
input = Number(input);

let dp = Array.from({length:input+1}).fill(0);

dp[1]= 1;
dp[2] = 3;

for(let i=3; i<= input; i++){
	dp[i] = (dp[i-2]*2 + dp[i-1]) % 10007;
}
console.log(dp[input]);