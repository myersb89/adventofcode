import { getInput } from './helpers';

const testInput: string = `2-4,6-8
2-3,4-5
5-7,7-9
2-8,3-7
6-6,4-6
2-6,4-8`

const range = (start, end) => Array.from(Array(end - start + 1).keys()).map(x => x + start);

function solution(input: string){
    var overlap_counter = 0
    input.split('\n').filter(line => line.trim() !== '').forEach(pair => {
        const elf1 = pair.split(',')[0].split('-')
        const section1 = range(parseInt(elf1[0]), parseInt(elf1[1]))
        const elf2 = pair.split(',')[1].split('-')
        const section2 = range(parseInt(elf2[0]), parseInt(elf2[1]))
        console.log(`section 1 ${section1}`)
        console.log(`section 2 ${section2}`)
        if(section1.every(sect => section2.includes(sect)) || section2.every(sect => section1.includes(sect))){
            overlap_counter += 1
        }
    })
    console.log(overlap_counter)
}

function solution2(input: string){
    var overlap_counter = 0
    input.split('\n').filter(line => line.trim() !== '').forEach(pair => {
        const elf1 = pair.split(',')[0].split('-')
        const section1 = range(parseInt(elf1[0]), parseInt(elf1[1]))
        const elf2 = pair.split(',')[1].split('-')
        const section2 = range(parseInt(elf2[0]), parseInt(elf2[1]))
        console.log(`section 1 ${section1}`)
        console.log(`section 2 ${section2}`)
        if(section1.some(sect => section2.includes(sect))){
            console.log(`overlap`)
            overlap_counter += 1
        }
    })
    console.log(overlap_counter)
}



solution2(testInput)

getInput(4, solution2)