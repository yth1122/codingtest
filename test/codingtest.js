	
	function test() {
		console.log(solution());
	}
	// 만약, 수빈이의 위치가 X일 때 걷는다면 1초 후에 X-1 또는 X+1로 이동하게 된다. 순간이동을 하는 경우에는 0초 후에 2*X의 위치로 이동하게 된다
	// 더하기 or 빼기 갯수찾기
	function solution() {
		let [start,end] ='5 17'.split(' ').map(Number);
		console.log(start, end);
	}	


module.exports = test;

