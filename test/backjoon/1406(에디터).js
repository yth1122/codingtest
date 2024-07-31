const fs = require('fs');
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
let [text, size, ...actions] = input;

let leftStack = text.split('');
let rightStack = [];

for (let action of actions) {
    switch(action[0]) {
        case 'L':
            if (leftStack.length) rightStack.push(leftStack.pop());
            break;
        case 'D':
            if (rightStack.length) leftStack.push(rightStack.pop());
            break;
        case 'B':
            if (leftStack.length) leftStack.pop();
            break;
        case 'P':
            leftStack.push(action[2]);
            break;
    }
}

console.log(leftStack.join('') + rightStack.reverse().join(''));


// 1차 답안

// const fs = require('fs');
// let input= fs.readFileSync("/dev/stdin").toString().trim().split('\n');
// let [ text, size ] = input.splice(0,2);

// let left_text = text.split('');
// let right_text = [];
// for(let action of actions){
// 	if(action == "L" && left_text.length > 0) {
// 		right_text.unshift(left_text.pop());
// 	} else if(action == "D" && right_text.length > 0) {
// 		left_text.push(right_text.shift());
// 	} else if(action == "B" && left_text.length > 0) {
// 		left_text.pop();
// 	} else if(action[0] =="P") {
// 		left_text.push(action.split(' ')[1]);
// 	}
// }
// console.log(left_text.join('')+right_text.join(''));