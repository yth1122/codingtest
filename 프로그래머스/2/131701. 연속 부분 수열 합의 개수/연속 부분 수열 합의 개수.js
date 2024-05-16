function solution(elements) {
    
    let set = new Set(elements);
	let cursor = 0,check = 0,num=elements[0];
	while(elements.length != check){
		cursor+=1;
		num += elements[cursor];
		set.add(num);
		
		if(cursor == elements.length-1){
			
			cursor = 0;
			elements.push(elements.shift());
		 	num = elements[0];
			check+=1;
		}
	}
    return set.size;
}