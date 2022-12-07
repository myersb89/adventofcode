"use strict";
exports.__esModule = true;
var helpers_1 = require("./helpers");
var conditionsPt1 = {
    "AX": 4,
    "AY": 8,
    "AZ": 3,
    "BX": 1,
    "BY": 5,
    "BZ": 9,
    "CX": 7,
    "CY": 2,
    "CZ": 6
};
var conditionsPt2 = {
    "AX": 3,
    "AY": 4,
    "AZ": 8,
    "BX": 1,
    "BY": 5,
    "BZ": 9,
    "CX": 2,
    "CY": 6,
    "CZ": 7
};
var testInput = "AY\nBX\nCZ";
var score = 0;
testInput.split('\n').forEach(function (val) { return score = score + conditionsPt2[val]; });
console.log(score);
(0, helpers_1.getInput)(2, function (result) {
    var score = 0;
    result.split('\n').filter(function (line) { return line.trim() !== ''; }).forEach(function (val) {
        score = score + conditionsPt2[val.replace(/\s/g, "")];
    });
    console.log(score);
});
