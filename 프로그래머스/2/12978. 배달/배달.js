function solution(N, road, K) {
    const distances = Array.from({length:N+1}).fill(Infinity);
    const graph = Array.from({length: N + 1}, () => []);
    for (const [a, b, c] of road) {
        graph[a].push([b, c]);
        graph[b].push([a, c]);
    };
	let pq = [[1,0]];
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