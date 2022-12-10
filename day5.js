"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("./helpers");
const testInput = `    [D]    
[N] [C]    
[Z] [M] [P]
 1   2   3 

move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2`;
//const test1: Array<string> = ["Z", "N"]
//const test2: Array<string> = ["M", "C", "D"]
//const test3: Array<string> = ["P"]
//const stacks = [test1, test2, test3]
const test1 = ["D", "M", "S", "Z", "R", "F", "W", "N"];
const test2 = ["W", "P", "Q", "G", "S"];
const test3 = ["W", "R", "V", "Q", "F", "N", "J", "C"];
const test4 = ["F", "Z", "P", "C", "G", "D", "L"];
const test5 = ["T", "P", "S"];
const test6 = ["H", "D", "F", "W", "R", "L"];
const test7 = ["Z", "N", "D", "C"];
const test8 = ["W", "N", "R", "F", "V", "S", "J", "Q"];
const test9 = ["R", "M", "S", "G", "Z", "W", "V"];
const stacks = [test1, test2, test3, test4, test5, test6, test7, test8, test9];
function solution(input) {
    input.split('\n\n')[1].split('\n').filter(line => line.trim() !== '').forEach(instruction => {
        const move = instruction.split(" ")[1];
        const from = instruction.split(" ")[3];
        const to = instruction.split(" ")[5];
        for (var i = 0; i < move; i++) {
            stacks[to - 1].push(stacks[from - 1].pop());
        }
    });
    const results = [];
    stacks.forEach(stack => {
        console.log(results.push(stack[stack.length - 1]));
    });
    console.log(results.join(""));
}
function solution2(input) {
    input.split('\n\n')[1].split('\n').filter(line => line.trim() !== '').forEach(instruction => {
        console.log(instruction);
        const move = instruction.split(" ")[1];
        const from = instruction.split(" ")[3];
        const to = instruction.split(" ")[5];
        const start = stacks[from - 1].length - move;
        //const end = stacks[from-1].length - 1
        console.log(`start ${start}`);
        console.log(`from before ${stacks[from - 1]}`);
        const removed = stacks[from - 1].splice(start, move);
        console.log(`from after ${stacks[from - 1]}`);
        console.log(`to before ${stacks[to - 1]}`);
        stacks[to - 1].push(...removed);
        console.log(`to after ${stacks[to - 1]}`);
    });
    const results = [];
    stacks.forEach(stack => {
        console.log(results.push(stack[stack.length - 1]));
    });
    console.log(results.join(""));
}
//solution2(testInput)
(0, helpers_1.getInput)(5, solution2);
