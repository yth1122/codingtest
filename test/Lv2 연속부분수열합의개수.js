function solution(elements) {
  //최초 1개씩 set에 추가    
  let set = new Set(elements);
  // cursor 배열의 index, check elements      
  let cursor = 1,check = 0,num=elements[0];
  //배열의 전체를 더해서 추가     
  set.add(elements.reduce((a,b) => a+b ,0))
  while(elements.length != check){
    num += elements[cursor];
    set.add(num);
    cursor+=1;
    if(cursor == elements.length-1){
      
      cursor = 1;
      elements.push(elements.shift());
      num = elements[0];
      check+=1;
    }
  }
  return set.size;
}