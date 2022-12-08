import { getInput } from './helpers';

function getTotalSizeRecursive(allDirs, size, childDirs){
    for(var key of childDirs){
        var dir = allDirs[key]
        size = size + getTotalSizeRecursive(allDirs, dir["rootSize"], dir["childdirs"])
    }
    return size
}


function solution(input){
    //console.log(input)
    let dirs = {}
    let curDir = ''
    input.split('\n').filter(line => line.trim() !== '').forEach(line => {
        console.log(line)
        const parsedLine = line.split(' ')
        switch (parsedLine[0]) {
            case '$':
                if( parsedLine[1] == "cd" ){
                    // cd .. just continue
                    if ( parsedLine[2] != ".." ){
                        curDir = parsedLine[2]
                        // each time we come across a new directory, initial in the dirs data struct
                        dirs[curDir] = {"rootSize": 0, "childdirs": []}
                    }
                    break;
                }
                else {
                    //ls so just continue on
                    break;
                }
            case 'dir':
                // found a child of the current dir
                dirs[curDir]["childdirs"].push(parsedLine[1])
                break;
            default:
                // Its its not dir or a $ its a filesize
                dirs[curDir]["rootSize"] = dirs[curDir]["rootSize"] + parseInt(parsedLine[0])
        }
    })
    // Now we have the directories, child directories, and size of files at the root. 
    // Need to crawl to get to the total size of the dir
    console.log(dirs)
    let solution = 0
    for( let key in dirs ){
        var dir = dirs[key]
        const totalsize = getTotalSizeRecursive(dirs, dir["rootSize"], dir["childdirs"])
        console.log(`total size of dir ${key} is ${totalsize}`)
        if (totalsize <= 100000 ){
            solution += totalsize
        }
    }
    console.log(`solution is ${solution}`)
}

const testInput = `$ cd /
$ ls
dir a
14848514 b.txt
8504156 c.dat
dir d
$ cd a
$ ls
dir e
29116 f
2557 g
62596 h.lst
$ cd e
$ ls
584 i
$ cd ..
$ cd ..
$ cd d
$ ls
4060174 j
8033020 d.log
5626152 d.ext
7214296 k`

//solution(testInput)

getInput(7, solution)
//guess 1281964 incorrect
