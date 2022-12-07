import { getInput } from './helpers';
import axios from 'axios';
import * as chrome from 'chrome-cookies-secure';


const conditionsPt1 = {
    "AX": 4, //rock rock
    "AY": 8, //rock paper
    "AZ": 3, //rock scissors
    "BX": 1, //paper rock
    "BY": 5, //paper paper
    "BZ": 9, //paper scissors
    "CX": 7, //scissors rock
    "CY": 2, //scissors paper
    "CZ": 6, //scissors scissors
}

const conditionsPt2 = {
    "AX": 3, //rock lose scissors
    "AY": 4, //rock draw rock
    "AZ": 8, //rock win paper
    "BX": 1, //paper lose rock
    "BY": 5, //paper draw paper
    "BZ": 9, //paper win scissors
    "CX": 2, //scissors lose paper
    "CY": 6, //scissors draw scissors
    "CZ": 7, //scissors win rock
}

const testInput = `AY
BX
CZ`

let score = 0
testInput.split('\n').forEach(val => score = score + conditionsPt2[val])
console.log(score)

getInput(2, function(result) {
    let score = 0
    result.split('\n').filter(line => line.trim() !== '').forEach(val => {
        score = score + conditionsPt2[val.replace(/\s/g, "")]
    })
    console.log(score)
})