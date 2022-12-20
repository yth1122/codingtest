
function solution(){
    let s = "abracadabra";
    let result = 0;
    let fix = '';
    let cnt1 = 0;
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
  
  
  module.exports = solution;
  