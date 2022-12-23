// https://school.programmers.co.kr/learn/courses/30/lessons/142086
function solution(){
  let s = "footbar"	
  // indexOf를 사용하여 가까운 위치를 구하기 위해 reverse 로 배열을 뒤집어 사용
  let answer = s.split('').reverse();
  let arr= [];
  for(let i=0; i<answer.length; i++){
    // indexOf(find값,index) 시 index뒤에있는 가장가까운값으로 찾을수 있음
    let index = answer.indexOf(answer[i],i+1);
    if(index>-1){
      // 배열을 뒤집었기때문에 push가 아닌 unshift사용 , 전부 push후 reverse도 가능
      arr.unshift(index-i);
    }else{
      arr.unshift(index);
    };
  }
  return arr
}

module.exports = solution;
