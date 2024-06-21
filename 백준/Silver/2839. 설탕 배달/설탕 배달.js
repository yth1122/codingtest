const fs = require('fs');
let input= fs.readFileSync("/dev/stdin").toString().trim();
let N = +input;
let dp = Array.from({length:5001}).fill(Infinity);
dp[3] = 1;
dp[5] = 1;
for(let i = 6; i< N+1; i++){
	dp[i] = Math.min(dp[i-5],dp[i-3])+1;
}
console.log(`${dp[N] == Infinity ? -1 : dp[N]}`);