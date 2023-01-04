// https://school.programmers.co.kr/learn/courses/30/lessons/12902?language=javascript
function solution(n) {
  const dp = [0,3];
  const index = n/2;

  if (n % 2 ) {
    return 0;
  }
  for (let i = 2; i <= index; i++) {
    dp[i] = dp[i - 1] * 3 + 2;

    for (let j = 1; j < i - 1; j++) {
      dp[i] += dp[j] * 2;
    }

    dp[i] %= 1000000007;
  }

  return dp[index];
}



