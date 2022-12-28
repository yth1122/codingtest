
// https://school.programmers.co.kr/learn/courses/30/lessons/132267
function solution(a,b,n){
  // a=3;
  // b=1;
  // n=20;
  var answer = 0;
  let x=0;
  
  while(n/a>=1){
      x = n%a;    
      n = parseInt(n/a)*b;
      answer += n
      n +=x ;
  }
  
  return answer;
}




module.exports = solution;
 