function solution(n, k) {
		let nums = Array.from({ length: n }, (_,i) => i+1);
		let answer = [];
		let fac = nums.reduce((acc,t)=> acc*t,1);
		
		for(let i=0; i < n; i++){
			fac /= nums.length;
			let index = Math.floor((k-1)/fac);
			answer.push(...nums.splice(index,1));
			k = k % fac;
		}
		return answer
}