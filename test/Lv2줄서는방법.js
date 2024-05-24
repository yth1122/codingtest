	function test() {
		
		console.log(solution(3,5))
	}
	// 1차 답 실패 런타임 
	// function permutation(arr, selectNum) {
	// 	let result = [];
	// 	if (selectNum === 1)  return arr.map((v) => [v]);
	// 	arr.forEach((v, idx, arr) => {
	// 		const fixer = v;
	// 		const restArr = arr.filter((_, index) => index !== idx);
	// 		const permuationArr = permutation(restArr, selectNum - 1);
	// 		const combineFixer = permuationArr.map((v) => [fixer, ...v]);
	// 		result.push(...combineFixer);
	// 	});
		
	// 	return result;
	// }
	
	// function solution(n, k) {
	// 	const nums = Array.from({ length: n }, (_,i) => i+1)
	// 	return permutation(nums,n)[k-1]
	// }
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
	// [1,2,3] [1,3,2] 
	// [2,1,3,] [2,3,1]    6
	// [3,1,2] [3,2,1]
	// [1,2,3,4] [1,2,4,3] [1,3,2,4] [1,3,4,2] [1,4,2,3] [1,4,3,2] 
	// [2,1,3,4] [2,1,4,3] [2,3,1,4] [2,3,4,1] [2,4,1,3] [2,4,3,1] 
	// [3,1,2,4] [3,1,4,2] [3,2,1,4] [3,2,4,1] [3,4,1,2] [3,4,2,1]  24
	// [4,1,2,3] [4,1,3,2] [4,2,1,3] [4,2,3,1] [4,3,1,2] [4,3,2,1]
module.exports = test;
