// https://school.programmers.co.kr/learn/courses/30/lessons/136798;
function solution(number, limit, power){
  // number= 10;
  // limit = 3;
  // power = 2;
  let answer = 1;
  function find(v){
    let count =0;
    for(let i=1; i<=Math.sqrt(v); i++){
      if(v%i==0){
        let x = parseInt(v/i) == i ? 1 : 2;
        count+=x;
      }
    }
    return count;
  }
  // 1은 스킵하고 answer 에 1을 넣고 시작
  for(let i=2; i<=number; i++ ){
    let val = find(i);
    if(val>limit){
      answer+=power;
    }else{
      answer+=val;
    }
  }
  return answer;
}

 