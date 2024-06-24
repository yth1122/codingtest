const fs = require('fs');
let input = fs.readFileSync("/dev/stdin").toString().trim();
input = +input;
let dp = Array.from({length:input+1}).fill(0);
dp[1] = 0;
dp[2] = 1;
dp[3] = 1;
for(let i= 4; i<input+1 ; i++){
    dp[i] = dp[i-1]+1; 
    if(i%3 ==0 ){ dp[i] = Math.min(dp[i/3]+1,dp[i])};
    if(i%2 ==0){ dp[i] = Math.min(dp[i/2]+1,dp[i])};
}
console.log(dp[input]);