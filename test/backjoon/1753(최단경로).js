
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

const fs = require('fs');
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
let [size, start] = input.splice(0, 2);
let [V, E] = size.split(' ').map(Number);
start = +start;

let list = input.map(t => t.split(' ').map(Number));
let graph = Array.from({ length: V + 1 }, () => []);
let arr = Array.from({ length: V + 1 }).fill(Infinity);

for (let key of list) {
	let [dep, end, val] = key;
	graph[dep].push([end, val]);
}

arr[start] = 0;

let pq = new MinHeap();
pq.insert([start, 0]);

while (!pq.isEmpty()) {
	let [station, value] = pq.extractMin();

	if (value > arr[station]) continue;

	for (let [next, weight] of graph[station]) {
			let sum = weight + value;
			if (sum < arr[next]) {
					arr[next] = sum;
					pq.insert([next, sum]);
			}
	}
}

for (let i = 1; i < arr.length; i++) {
	console.log(arr[i] === Infinity ? 'INF' : arr[i]);
}



// 1차 메모리 초과
// const fs = require('fs');
// let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
// let [size, start] = input.splice(0, 2);
// let [V, E] = size.split(' ').map(Number); 
// start = +start;

// let list = input.map(t => t.split(' ').map(Number));
// let graph = Array.from({ length: V + 1 }, () => []);
// let arr = Array.from({ length: V + 1 }).fill(Infinity);
// let pq = [[start, 0]];

// for (let key of list) {
//     let [dep, end, val] = key;
//     graph[dep].push([end, val]);
// }

// arr[start] = 0;

// while (pq.length) {
    
//     let [station, value] = pq.pop();

//     if (value > arr[station]) continue;

//     for (let [next, weight] of graph[station]) {
//         let sum = weight + value;
//         if (sum < arr[next]) {
//             arr[next] = sum;
//             pq.push([next, sum]);
//         }
//     }
// }

// console.log(arr.slice(1).map(t=> t ==Infinity ? 'INF': t ).join('\n'));