// https://school.programmers.co.kr/learn/courses/30/lessons/131128


// 1차 제출 점수 73.7  시간초과 숫자짝꿍
function solution1(X, Y) {
  let ar = Y.split('');
  let result = [];
  for(let i =0; i<X.length; i++){
    let index = ar.indexOf(X[i]); 
    if(index > -1){
      result.push(ar.splice(index,1)[0]);
    }
  }
  if(!result.length){return "-1"}
  result.sort((a,b)=>b-a);
  return  result[0] =='0' ? '0' : result.join('')
}



function solution(X,Y){
  X = "12321";
  Y = "42531";
  let obj = {};
  let result = [];
  for(let i of X){
    obj[i] = (obj[i] | 0) +1;
  }
  for(let j of Y){
    if(obj[j]){
      obj[j] -= 1;
      result.push(j);
    }
  }
  if(!result.length){return "-1"}
  result.sort((a,b)=>b-a);
  return  result[0] =='0' ? '0' : result.join('')
}

module.exports = solution;
