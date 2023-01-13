function solution(today, terms, privacies) {
  let obj = {};
  for (let i of terms){
      let [key,val] = i.split(' ');
      obj[key] = parseInt(val);
  }
  let z= privacies.map((t,i)=>{
      let [fullDate,key] =  t.split(' ');
      let [Year,Month,Day] = fullDate.split('.').map(t=>parseInt(t));
      let result;
      Month += obj[key];
    
        if(Month>12){
          if(Month%12==0){
              Year += (Month/12)-1;
              Month -= 12*(parseInt(Month/12)-1)
           }else{
              Year += parseInt(Month/12);
              Month -= 12*parseInt(Month/12);
          }
          }
  
      if(Day==1){
          Day = 28;
          if(Month==1){
              Month=12;
              Year-=1;  
          }
          else{
              Month-=1;
          }
      }else{
          Day-=1;
      }
      result = Year + '.' + Month+ '.' + Day;
      return new Date(today).getTime() > new Date(result).getTime() ? i+1 : null  
})
  return z.filter(t=>t!=null);
}