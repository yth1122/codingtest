const fs = require('fs');
let input = fs.readFileSync("/dev/stdin").toString().trim();
input = +input;
let dp = Array.from({length:input+1}).fill(0);
dp[2] = 1;
dp[3] = 1;
// math.min 안에 undefind가 들어갈시 NaN발생 무한대값인 Infinity를 넣고 min을 넣을시 사실상 무시됨
for(let i= 4; i<input+1 ; i++){
    dp[i] = Math.min(dp[i/3]? dp[i/3]:Infinity ,dp[i/2]? dp[i/2]: Infinity ,dp[i-1])+1;
}
console.log(dp[input]);