
function solution(s){
    // let s = "abracadabra";
    let result = 0;
    let fix = '';
    // 같은카운트
    let cnt1 = 0;
    // 다른카운트
    let cnt2 = 0;
    for(let i=0; i<s.length; i++){
      if(!fix){ fix = s[i] }
      if(fix == s[i]) cnt1++;
      else cnt2++;
      
      if(cnt1==cnt2){
        result++
        fix = '';
        cnt1 = 0;
        cnt2 = 0;
      }
    }
    return  cnt1 || cn2 ? result+1 : result
}
  
  
  