// 다익스트라 알고리즘 https://school.programmers.co.kr/learn/courses/30/lessons/12978
function solution(N, road, K) {
	const distances = Array.from({length:N+1}).fill(Infinity);
	const graph = Array.from({length: N + 1}, () => []);
	for (const [a, b, c] of road) {
			graph[a].push([b, c]);
			graph[b].push([a, c]);
	};
	// 시작 
	let pq = [[1,0]];
	// 1부터 진행됨으로 0으로 세팅
	distances[1]=0;

	while(pq.length){
		let [station,distance] = pq.pop();
		for(let [next,weight] of graph[station]){
			let sum = distance + weight;
			if(sum < distances[next]){
				distances[next] = sum;
				pq.push([next,sum])
			}
				
		}
	}

	return distances.filter((t)=> t <= K).length;
}