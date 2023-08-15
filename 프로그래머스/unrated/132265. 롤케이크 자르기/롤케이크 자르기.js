function solution(topping) {
     let count = 0;
    let a = new Map();
    topping.forEach(element=> a.set(element,(a.get(element)|0) +1) );
    let b = new Map();
    topping.forEach(item=>{
        b.set(item, (b.get(item) || 0) + 1);
        a.get(item) === 1
          ? a.delete(item)
          : a.set(item, a.get(item) - 1);
    
        if (a.size === b.size) count++;
    })
    return count
}