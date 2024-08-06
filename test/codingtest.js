	// 
	function test() {
		console.log(solution(3,4,17));
	}

// https://www.acmicpc.net/problem/1753 다익스트라 공부하기
	function solution(n,l,r) {
		class MinHeap {
			constructor() {
					this.heap = [];
			}
		
			getParentIndex(i) {
					return Math.floor((i - 1) / 2);
			}
		
			getLeftChildIndex(i) {
					return 2 * i + 1;
			}
		
			getRightChildIndex(i) {
					return 2 * i + 2;
			}
		
			swap(i1, i2) {
					[this.heap[i1], this.heap[i2]] = [this.heap[i2], this.heap[i1]];
			}
		
			insert(data) {
					this.heap.push(data);
					this.bubbleUp();
			}
		
			bubbleUp() {
					let index = this.heap.length - 1;
					while (this.getParentIndex(index) >= 0 && this.heap[this.getParentIndex(index)][1] > this.heap[index][1]) {
							this.swap(this.getParentIndex(index), index);
							index = this.getParentIndex(index);
					}
			}
		
			extractMin() {
					const min = this.heap[0];
					const end = this.heap.pop();
					if (this.heap.length > 0) {
							this.heap[0] = end;
							this.bubbleDown();
					}
					return min;
			}
		
			bubbleDown() {
					let index = 0;
					while (this.getLeftChildIndex(index) < this.heap.length) {
							let smallerChildIndex = this.getLeftChildIndex(index);
							if (this.getRightChildIndex(index) < this.heap.length && this.heap[this.getRightChildIndex(index)][1] < this.heap[smallerChildIndex][1]) {
									smallerChildIndex = this.getRightChildIndex(index);
							}
							if (this.heap[index][1] <= this.heap[smallerChildIndex][1]) {
									break;
							}
							this.swap(index, smallerChildIndex);
							index = smallerChildIndex;
					}
			}
		
			isEmpty() {
					return this.heap.length === 0;
			}
		}
		let input = 
`5
8
1 2 2
1 3 3
1 4 1
1 5 10
2 4 2
3 4 1
3 5 1
4 5 3
1 5`;
		let [N,M,...arr] = input.split('\n')
		arr = arr.map(t=>t.split(' ').map(Number));
		let [start , end] = arr.pop();
		N = +N;
		let graph = Array.from({length:N+1},()=>[]);
		let distance = Array.from({length:N+1}).fill(Infinity);
		for(let key of arr){
			let [start,end,val] = key;
			graph[start].push([end,val]);
		};
		distance[start] = 0;
		let queue = new MinHeap();
		queue.insert([start,0]);
		while(!queue.isEmpty()){
			let [station,value] = queue.extractMin();
			console.log(station,value);
			// if ( value > distance[station]) continue;

			for(let [next, nextVal] of graph[station]){
				let sum =  nextVal + value;
				if(sum < distance[next]){
					distance[next] = sum;
					queue.insert([next,sum]);
				}
			}
		}
		console.log(distance[end]);
	}


module.exports = test;