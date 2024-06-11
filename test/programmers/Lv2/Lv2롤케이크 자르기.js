//https://school.programmers.co.kr/learn/courses/30/lessons/132265


// 1차 풀이 시간초과 shift , b에 새로운 셋으로 설정 하는것이 오래걸리는것 같음
function solution(topping) {
  topping = [1,2,1,3,1,4,1,2];
  let count = 0;
  let a = new Set();
  // a.add(topping.shift());
  let b;
  while(a.size<topping.length){
      a.add(topping.shift());
      b = new Set(topping);
      if(a.size == b.size){
          count++;
      }
  }
  console.log(count);
}

// 2차풀이
function solution(topping) {
    topping = [1,2,1,3,1,4,1,2];
    let count = 0;
    let a = new Map();
    topping.forEach(element=> a.set(element,(a.get(element)|0) +1) );
    let b = new Map();
    topping.forEach(item=>{
        b.set(item, (b.get(item) || 0) + 1);
        a.get(item) === 1
          ? a.delete(item)
          : a.set(item, allTopping.get(item) - 1);
    
        if (a.size === b.size) count++;
    })
    return count;
}


