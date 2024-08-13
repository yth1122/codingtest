	// 
	function test() {
		console.log(solution(3,4,17));
	}

	function solution(n,l,r) {
		let input = 
`(()[[]])([])`;
const bracketMap = {
	'()': 2,
	'[]': 3,
};

function getBracketValue(str, map) {
	let stack = [];
	let value = '';
	console.log(str);
	for (let i of str) {
	// 		if (!map[i]) {
	// 				if (i === ')') stack.push(')');
	// 				else if (i === ']') stack.push(']');
	// 		} else {
	// 				value += i;
	// 		}
	// 		if ((stack[0] === ')' && i === '(') || (stack[0] === ']' && i === '[')) {
	// 				stack.shift();
	// 				return getBracketValue(value, map);
	// 		}
	// }
	// let result = 0;
	// while(stack.length > 0) {
	// 			const top = stack.pop();
	// 			if(top === ')') {
	// 					result += bracketMap['()'] * Number(getBracketValue(value, map));
	// 					value = '';
	// 			} else if(top === ']'){
	// 					result += bracketMap['[]']*Number(getBracketValue(value, map));
	// 					value = '';
	// 			}
	// 	}
	// 	return result + Number(getBracketValue(value, map));
}

	// const arr = input.split('');
	const result = getBracketValue(input, bracketMap);
		
}


module.exports = test;