	// 
	function test() {
		console.log(solution(3,4,17));
	}

// https://www.acmicpc.net/problem/1753 다익스트라 공부하기
	function solution(n,l,r) {
		let input = 
`5 6
1
5 1 1
1 2 2
1 3 3
2 3 4
2 4 5
3 4 6`;

		input =input.split('\n');
		let [size , start] = input.splice(0,2);
		console.log(Number(size[0]));
		let list = input.map(t=>t.split(' '));
		let graph = Array.from({length:+size[0]+1},() => []);
		let arr = Array.from({length:+size[0] +1 }).fill(Infinity);
		let pq = [[+start,0]];
		for(let key of list){
			let [start,end,val] = key;
			graph[start].push([+end,+val]);
			// graph[end].push([+start,+val]);
		}
		arr[start]=0;
		while(pq.length){
			let [station, value] = pq.pop();
			if ( value > arr[station]) continue;

			for(let [next,weight] of graph[station]){
				let sum = weight + value;
				if(sum < arr[next]){
					arr[next] = sum;
					pq.push([next,sum]);
				}
			}
		}
		for(let i = 1; i<arr.length; i++){
			console.log(arr[i]== Infinity ? 'INF' : arr[i])
		}
	}


module.exports = test;