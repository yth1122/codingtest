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