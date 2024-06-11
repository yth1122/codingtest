// https://school.programmers.co.kr/learn/courses/30/lessons/12900

// 첫번째 접근 dp 시간초과 
function solution(n){
  var answer = 0;
  function dps(len,x){
   len += x;
   if(len>n){
     
   }else if(len==n){
     answer+=1;
   }else{
     dps(len,1);
     dps(len,2);
   }
 };
  dps(0,0);
  return answer%1000000007;
}


// 파보나치수로 접근 정답 
function solution(n) {
  let arr  = new Array(n).fill(0);
  arr[0] = 1;
  arr[1] = 2;
  for(let i=2; i<n;i++ ){
      arr[i] = (arr[i-2]+arr[i-1])%1000000007;
  }
  
  return arr[n-1];
}



