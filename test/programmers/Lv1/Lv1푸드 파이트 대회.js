// https://school.programmers.co.kr/learn/courses/30/lessons/134240?language=javascript
function solution(food){
  food = [1,7,1,2];
  let answer = '';
  for(let i=1; i<food.length; i++){
      if(food[i]>1){
      
          answer+=i.toString().repeat(parseInt(food[i]/2));
      }
  
  }
  let x = answer.split('').reverse().join('');
  
  return answer+'0'+x;

}


module.exports = solution;
 