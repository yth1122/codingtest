	// 
	function test() {
		console.log(solution());
	}

	function solution() {
		let input =
`5
RRRBB
GGBBB
BBBRR
BBRRR
RRRRR`.split('\n');
		let length = input.shift();
		input =  input.map(t=>t.split(''));
		let visit = Array.from({length:length},()=>Array.from({length:length}).fill(false));
		console.log(visit);
	}
		
	


module.exports = test;