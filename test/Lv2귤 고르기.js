//https://school.programmers.co.kr/learn/courses/30/lessons/138476 귤고르기

function solution(k, tangerine) {
    let obj ={};
    let arr = [];
    let answer =0;
    for(let val in tangerine){
       obj[tangerine[val]] = (obj[tangerine[val]] | 0) + 1;  
    }
    for(let val in obj){
       arr.push(obj[val]);
    }
    arr.sort((a,b)=>b-a);
    for(let i=0; i<arr.length;i++){
        k-=arr[i];
        answer +=1;
       if(k<=0){
           break;
       }
    }
   return answer;
}
