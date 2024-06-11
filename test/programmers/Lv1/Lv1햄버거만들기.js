
// 링크 https://school.programmers.co.kr/learn/courses/30/lessons/133502


// 1차시도 시간초과 72.2점 접근방식 스트링으로 변환후 indexOf를 루프로 돌려 제거할 생각으로 접근
function solution1(ingredient){
  // let ingredient = [2, 1, 1, 2, 3, 1, 2, 3, 1];
  // 햄버거 순서 1231
  let str = ingredient.join('');
  let answer = 0;
  while(str.indexOf('1231')>-1){
    str = str.replace('1231','');
    answer++;
  }
  return answer;
}


// 2차시도 성공 
function solution(ingredient){
  // let ingredient = [2, 1, 1, 2, 3, 1, 2, 3, 1];
  // 햄버거 순서 1231
  let answer = 0 ;
  let stack = [];
  for(let i=0; i<ingredient.length; i++){
      stack.push(ingredient[i]);
      let len = stack.length
      if(len>=4){
          if(stack[len-1]==1 && stack[len-2]==3 && stack[len-3]==2 && stack[len-4]==1){
              stack.pop();
              stack.pop();
              stack.pop();
              stack.pop();
              answer++;
          }
      }
  }
  return answer
}

