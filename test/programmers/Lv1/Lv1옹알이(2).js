// https://school.programmers.co.kr/learn/courses/30/lessons/133499
// 다시풀어보기

function solution(babbling){
  // babbling=["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"];
  let word = ["aya","ye","woo","ma"]; 

  return babbling.filter(t=>{
    word.map((j,index)=>{
      if(/(aya|ye|woo|ma)\1/.test(t)){
        
      }else{
        if(t.split(j).length>1){
          t = t.split(j).join(index+1);
        };
      };
    })
    if(!t.replace(/[1234]/g,''))return t;
  }).length;
}




 