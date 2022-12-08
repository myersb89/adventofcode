"use strict";
exports.__esModule = true;
var helpers_1 = require("./helpers");
var testInput = "vJrwpWtwJgWrhcsFMMfFFhFp\njqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL\nPmmdzqPrVvPwwTWBwg\nwMqvLMZHhHMvwLHjbvcjnnSBnvTQFn\nttgJtRGJQctTZtZT\nCrZsJsPPZsGzwwsLwLmpwMDw";
function toPriority(char) {
    if (char == char.toUpperCase()) {
        return char.charCodeAt(0) - 38;
    }
    else {
        return char.charCodeAt(0) - 96;
    }
}
function solution(input) {
    var totalPriority = 0;
    input.split('\n').filter(function (line) { return line.trim() !== ''; }).forEach(function (ruckSack) {
        var compart1 = ruckSack.slice(0, ruckSack.length / 2);
        var compart2 = ruckSack.slice(ruckSack.length / 2);
        for (var _i = 0, compart1_1 = compart1; _i < compart1_1.length; _i++) {
            var item = compart1_1[_i];
            if (compart2.includes(item)) {
                totalPriority += toPriority(item);
                break;
            }
        }
    });
    console.log(totalPriority);
}
function solutionPt2(input) {
    var totalPriority = 0;
    var ruckSacks = input.split('\n').filter(function (line) { return line.trim() !== ''; });
    for (var i = 0; i < ruckSacks.length; i = i + 3) {
        var elf1 = ruckSacks[i];
        var elf2 = ruckSacks[i + 1];
        var elf3 = ruckSacks[i + 2];
        for (var _i = 0, elf1_1 = elf1; _i < elf1_1.length; _i++) {
            var item = elf1_1[_i];
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
