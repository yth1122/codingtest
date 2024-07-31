class MinHeap {
    constructor() {
        this.heap = [];
    }

    add(value) {
        this.heap.push(value);
        this.bubbleUp(this.heap.length - 1);
    }

    poll() {
        if (this.heap.length === 0) return 0;
        if (this.heap.length === 1) return this.heap.pop();

        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown(0);
        return min;
    }

    bubbleUp(index) {
        while (index > 0) {
            const parentIndex = (index - 1) >> 1;
            if (this.heap[parentIndex] <= this.heap[index]) break;
            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
            index = parentIndex;
        }
    }

    bubbleDown(index) {
        const length = this.heap.length;
        while (true) {
            let smallest = index;
            const leftChild = (index << 1) + 1;
            const rightChild = (index << 1) + 2;

            if (leftChild < length && this.heap[leftChild] < this.heap[smallest]) {
                smallest = leftChild;
            }
            if (rightChild < length && this.heap[rightChild] < this.heap[smallest]) {
                smallest = rightChild;
            }
            if (smallest === index) break;

            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
            index = smallest;
        }
    }
}
const fs = require('fs');
let [length , ...numberArray] = fs.readFileSync("/dev/stdin").toString().trim().split('\n').map(Number);
let minHeap = new MinHeap();
let answer = '';
for(let number of numberArray){
	if(number > 0){
		minHeap.add(number);
	} else {
		answer += `${minHeap.poll()} \n`;
	}
}
console.log(answer)