const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n').map(Number);
input.shift();
let dp = Array.from({length:41}).map(t=>[0,0]);
dp[0]= [1,0];
dp[1] = [0,1];
for(let i=2; i<dp.length; i++){
	dp[i] = [dp[i-2][0]+dp[i-1][0],dp[i-2][1]+dp[i-1][1]];
}
for(let result of input){
	console.log(dp[result].join(' '));
}