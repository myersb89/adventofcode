"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("./helpers");
const testInput = `vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw`;
function toPriority(char) {
    if (char == char.toUpperCase()) {
        return char.charCodeAt(0) - 38;
    }
    else {
        return char.charCodeAt(0) - 96;
    }
}
function solution(input) {
    let totalPriority = 0;
    input.split('\n').filter(line => line.trim() !== '').forEach(ruckSack => {
        const compart1 = ruckSack.slice(0, ruckSack.length / 2);
        const compart2 = ruckSack.slice(ruckSack.length / 2);
        for (var item of compart1) {
            if (compart2.includes(item)) {
                totalPriority += toPriority(item);
                break;
            }
        }
    });
    console.log(totalPriority);
}
function solutionPt2(input) {
    let totalPriority = 0;
    const ruckSacks = input.split('\n').filter(line => line.trim() !== '');
    for (let i = 0; i < ruckSacks.length; i = i + 3) {
        const elf1 = ruckSacks[i];
        const elf2 = ruckSacks[i + 1];
        const elf3 = ruckSacks[i + 2];
        for (var item of elf1) {
            if (elf2.includes(item) && elf3.includes(item)) {
                totalPriority += toPriority(item);
                break;
            }
        }
    }
    console.log(totalPriority);
}
// Test case
solution(testInput);
solutionPt2(testInput);
// solution
//getInput(3, solution)
(0, helpers_1.getInput)(3, solutionPt2);
