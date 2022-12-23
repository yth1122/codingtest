// https://school.programmers.co.kr/learn/courses/30/lessons/147355


// 단순하게 for loop으로 맨첫글자부터 p의 길이와 맞추어 비교후 조건 충족식 answer값 ++
function solution(t,p){
  // t = "3141592"
  // p = "271"

  let len = p.length;
  let result = 0;
  for (let i=0; i<t.length; i++){
    let sum='';
    
    if(i+len>t.length) break;
    
    for(let j=i; j<i+len; j++){
      sum+=t[j];
      if(sum.length == len){
        if(Number(sum)<=Number(p)){result++}
      }
    }
  }
  return result

}

