	// 숫자 카드 나누기 https://school.programmers.co.kr/learn/courses/30/lessons/135807
	function solution(arrayA, arrayB) {
		let arr = [];
		let getGCD = (num1, num2) => (num2 > 0 ? getGCD(num2, num1 % num2) : num1);
		let gcdA; 
		let gcdB;
		for(let i=0; i<arrayA.length; i++){
			gcdA = getGCD(gcdA,arrayA[i]);
			gcdB = getGCD(gcdB,arrayB[i]) 
		}
		let checkA = arrayA.every(value=> value % gcdA == 0);
		let checkB = arrayB.every(value=> value % gcdB == 0);
	
		if(checkA && gcdA!=1){ 
			if(!arrayB.some(value=> value % gcdA ==0 ))  arr.push(gcdA)
		};
	
		if(checkB && gcdB!=1 ){ 
			if(!arrayA.some(value=> value % gcdB ==0 ))  arr.push(gcdB)
		};
		
	
	
		return arr.length?  arr.sort((a,b)=>b-a)[0] :0 ;
	}



