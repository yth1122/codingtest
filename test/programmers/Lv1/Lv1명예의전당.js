// https://school.programmers.co.kr/learn/courses/30/lessons/138477

function solution(k, score) {
  var answer = [];
  var stack = [];
  for(let i=0; i<score.length;i++){
      stack.push(score[i]);
      stack.sort((a,b)=>b-a);
      if(i<k){
          answer.push(stack[stack.length-1])
      }else{
          answer.push(stack[k-1]);
      }
  }
  return answer;
}

