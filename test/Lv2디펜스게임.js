	function test() {
		console.log(solution(4,4, [2, 2, 2, 2, 3, 3]))
		// [4,2,4,5,3,3,1]
	}
	class Heap{
		constructor(){
				this.items = [];
		}
	
		//값을 서로 바꾸는 메소드
		swap(index1, index2){
				let temp = this.items[index1]; // items의 index1의 값을 temp(임시공간)에 담음
				this.items[index1] = this.items[index2]; // index1에 index2의 값을 저장
				this.items[index2] = temp; // index2에 아까 index1의 값을 temp에 넣어놓은 값을 저장
		}
	
		//부모 인덱스 구하는 메소드
		parentIndex(index){
				return Math.floor((index-1) / 2);
		}
	
		//왼쪽 자식 인덱스 구하는 메소드
		leftChildIndex(index){
				return index * 2 + 1;
		}
	
		//오른쪽 자식 인덱스 구하는 메소드
		rightChildIndex(index){
				return index * 2 + 2;
		}
	
		//부모 노드 구하는 메소드
		parent(index){
				return this.items[this.parentIndex(index)];
		}
	
		//왼쪽 자식 노드 구하는 메소드
		leftChild(index){
				return this.items[this.leftChildIndex(index)];
		}
	
		//오른쪽 자식 노드 구하는 메소드
		rightChild(index){
				return this.items[this.rightChildIndex(index)];
		}
	
		//최대 힙의 경우 최댓값을 반환하고 최소 힙의 경우 최솟값을 반환하는 메소드
		peek(){
				return this.items[0];
		}
	
		//힙의 크기(항목 개수)를 반환하는 메소드
		size(){
				return this.items.length;
		}
		bubbleUp(){
			let index = this.items.length-1;
			while(this.parent(index) !== undefined && this.parent(index) > this.items[index]){
					this.swap(index, this.parentIndex(index));
					index = this.parentIndex(index);
			}
	}

	bubbleDown(){
			let index = 0;

			while(this.leftChild(index) !== undefined && (this.leftChild(index) < this.items[index] || this.rightChild(index) < this.items[index])){
					let smallerIndex = this.leftChildIndex(index);
					if(this.rightChild(index) !== undefined && this.rightChild(index) < this.items[smallerIndex]){
							smallerIndex = this.rightChildIndex(index);
					}
					this.swap(index, smallerIndex);
					index = smallerIndex;
			}
	}


	add(item){
			this.items[this.items.length] = item;
			this.bubbleUp();
	}


	poll(){
			let item = this.items[0]; // 첫번째 원소 keep
			this.items[0] = this.items[this.items.length - 1]; 
			this.items.pop(); 
			this.bubbleDown();

			return item; 
	}
}

	function solution(n, k, enemy) {
		let result = 0;
		let heap = new Heap();
		for(let i=0; i<enemy.length; i++){
			if(heap.size() < k){
				heap.add(enemy[i]);
				result+=1;
			}else{
				console.log(enemy[i],heap.peek());
				if(enemy[i] > heap.peek()){
					if(n < heap.peek()){break;} 
					n -= heap.peek();
					heap.poll();
					heap.add(enemy[i]);
					result+=1;
				}else{
				 	if(n < enemy[i]) break;
					else n-=enemy[i],result+=1;
				}
			}
		}	
	}
	// function solution(n, k, enemy) {
	// 	let count = 10;
	// 	let queue = [];
	// 	let result = 0;
	// 	while(n >=0 ){
	// 		queue.push(enemy.shift());
	// 		queue.sort();
	// 		result+=1;
	// 		if(queue.length > k) {
	// 			// console.log(queue,n,enemy[0]);
	// 			let sum  = queue.slice(0,queue.length-k).reduce((acc,v,i)=> acc+v,0);
	// 			if(sum >= n){
	// 				n-=sum;
	// 				result-=1;
	// 			}  
	// 		}
	// 	}
	// 	console.log(enemy,queue,result,n);
	// }
module.exports = test;