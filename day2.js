"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("./helpers");
const conditionsPt1 = {
    "AX": 4,
    "AY": 8,
    "AZ": 3,
    "BX": 1,
    "BY": 5,
    "BZ": 9,
    "CX": 7,
    "CY": 2,
    "CZ": 6, //scissors scissors
};
const conditionsPt2 = {
    "AX": 3,
    "AY": 4,
    "AZ": 8,
    "BX": 1,
    "BY": 5,
    "BZ": 9,
    "CX": 2,
    "CY": 6,
    "CZ": 7, //scissors win rock
};
const testInput = `AY
BX
CZ`;
let score = 0;
testInput.split('\n').forEach(val => score = score + conditionsPt2[val]);
console.log(score);
(0, helpers_1.getInput)(2, function (day2Input) {
    let score = 0;
    day2Input.split('\n').filter(line => line.trim() !== '').forEach(val => {
        score = score + conditionsPt2[val.replace(/\s/g, "")];
    });
    console.log(score);
});
