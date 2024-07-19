	// //https://school.programmers.co.kr/learn/courses/30/lessons/148652 시간초과 66.7점
	function test() {
		console.log(solution(3,4,17));
	}

// https://www.acmicpc.net/problem/2178
	function solution(n,l,r) {
		let input = 
`dmih
11
B
B
P x
L
B
B
B
P y
D
D
P z`;
		input = input.split('\n');
		let [ text, size ] = input.splice(0,2);
		let index = text.length-1;
		console.log(text,input);
		for(let action of input){
			console.log(action,text[index],index);
			if(action == 'L'){
				index = index > 0 ? index-1 : index ;
			}else if(action == 'D'){
				
			}else if(action == 'B'){
				index = text.length -1 > index ? index +1 :index;
			}else {
				console.log(text.substr(0,index),text.substr(index,text.length-1 -index))
			}
		}
	}


module.exports = test;