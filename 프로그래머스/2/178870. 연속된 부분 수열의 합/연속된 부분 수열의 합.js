function solution(sequence, k) {
     	let result = [];
		let fix = 0; 
		let next = 0;
		let sum = sequence[fix];
		let match = sequence.findIndex(v=> v==k);
        
        if(match>-1) return [match,match]; 
			while(next < sequence.length ){
			if(sum == k ){ 
				result.push([fix,next]);
				next ++;
				sum += sequence[next];
			}else if(sum > k ){
				sum -= sequence[fix];
				fix++;
			}else {
				next++;
				sum += sequence[next];
			}
		}
    result.sort((a,b)=> {
    if(a[1]-a[0] == b[1]-b[0]) return a[0] - b[0]
       return (a[1]-a[0]) - (b[1]-b[0])
    });
    return result[0];
}