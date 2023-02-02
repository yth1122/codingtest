//https://school.programmers.co.kr/learn/courses/30/lessons/148652 시간초과 66.7점
function solution(n, l, r) {
    n=2;
    l=4;
    r=17;
    let result = '1';
    let answer = 0;
    for(let i=2; i > 0; i--){
        if(result.indexOf('0')>-1){
            result = result.split('0').join('00000').split('1').join('11011');
        }else{
            result = result.split('1').join('11011');
        }
    }
    // while(0 < n){
    //     result = result.replace(/0/gi,'0000').replace(/1/gi,'11011');
    //     n--;
    // }
    for(let i=l-1; i<r; i++){
        if(result[i]=='1'){
            answer+=1;
        }
    }
    console.log(answer);
    // result.substring(l-1,r).split('').reduce((acc,t)=>parseInt(acc)+parseInt(t),0)
}




module.exports = solution;
