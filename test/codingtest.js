// https://school.programmers.co.kr/learn/courses/30/lessons/134240?language=javascript
function solution(n){
  var answer = 0;
  n=14;
  let arr = [3,11];

  for(let i=3; i <= n/2; i++){
    let sum=0;
    for(let j=i-1; 0 <= j; j--){
      if(j==i-1){ sum+= 3*arr[j] }else{ sum+= 2*arr[j]}
      if(j==0){arr[i]=sum}
    }
  } 
  console.log(arr[n/2]);
}



module.exports = solution;
