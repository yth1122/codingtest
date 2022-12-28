
// https://school.programmers.co.kr/learn/courses/30/lessons/135808?language=javascript

function solution(k,m,score){
  // k=4;
  // m=3;
  // score = [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2];
  let count = parseInt(score.length/m);
  let slice = score.length%m;
  let answer=0;
  score.sort((a,b)=>a-b);
  score.splice(0,slice);
  
  for(let i=0; i<count; i++){
    let compare;
    if(k<score[i*m]){
      compare =k;
    }else{
      compare = score[i*m];
    }
    answer += (compare*m) ;
  }

  return answer;

}




module.exports = solution;
 