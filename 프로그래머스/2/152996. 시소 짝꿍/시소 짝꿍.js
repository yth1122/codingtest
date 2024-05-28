function solution(weights) {
		let weightsArr = Array.from({length:4001}).fill(0);
		let result = 0;
		let obj = {};
		
		for(let i=0; i<weights.length; i++){
			if(!obj[weights[i]]) obj[weights[i]] =0;
			result += weightsArr[weights[i]*2];
			result += weightsArr[weights[i]*3];
			result += weightsArr[weights[i]*4];
			
			if(obj[weights[i]]>0 ){
				result -= obj[weights[i]]*2;
			}
			
			obj[weights[i]] +=1;
			weightsArr[weights[i]*2] += 1;
			weightsArr[weights[i]*3] += 1;
			weightsArr[weights[i]*4] += 1;
			
		}
		return result;
}
