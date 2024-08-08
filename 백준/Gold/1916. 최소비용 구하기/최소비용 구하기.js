const fs = require('fs');
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
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
let [N, M, ...arr] = input;
let [start, end] = arr.pop().split(' ').map(Number);
N = +N;

let graph = Array.from({length: N+1}, () => []);
let distance = Array.from({length: N+1}, () => Infinity);

for (let key of arr) {
    let [s, e, v] = key.split(' ').map(Number);
    graph[s].push([e, v]);
}

distance[start] = 0;
let queue = new MinHeap();
queue.insert([start,0]);
while(!queue.isEmpty()){
	let [station,value] = queue.extractMin();
	
	if ( value > distance[station]) continue;

	for(let [next, nextVal] of graph[station]){
		let sum =  nextVal + value;
		if(sum < distance[next]){
			distance[next] = sum;
			queue.insert([next,sum]);
		}
	}
}
console.log(distance[end]);