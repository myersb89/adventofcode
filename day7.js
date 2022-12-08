"use strict";
exports.__esModule = true;
var helpers_1 = require("./helpers");
function getTotalSizeRecursive(allDirs, size, childDirs) {
    for (var _i = 0, childDirs_1 = childDirs; _i < childDirs_1.length; _i++) {
        var key = childDirs_1[_i];
        var dir = allDirs[key];
        size = size + getTotalSizeRecursive(allDirs, dir["rootSize"], dir["childdirs"]);
    }
    return size;
}
function solution(input) {
    //console.log(input)
    var dirs = {};
    var curDir = '';
    input.split('\n').filter(function (line) { return line.trim() !== ''; }).forEach(function (line) {
        console.log(line);
        var parsedLine = line.split(' ');
        switch (parsedLine[0]) {
            case '$':
                if (parsedLine[1] == "cd") {
                    // cd .. just continue
                    if (parsedLine[2] != "..") {
                        curDir = parsedLine[2];
                        // each time we come across a new directory, initial in the dirs data struct
                        dirs[curDir] = { "rootSize": 0, "childdirs": [] };
                    }
                    break;
                }
                else {
                    //ls so just continue on
                    break;
                }
            case 'dir':
                // found a child of the current dir
                dirs[curDir]["childdirs"].push(parsedLine[1]);
                break;
            default:
                // Its its not dir or a $ its a filesize
                dirs[curDir]["rootSize"] = dirs[curDir]["rootSize"] + parseInt(parsedLine[0]);
        }
    });
    // Now we have the directories, child directories, and size of files at the root. 
    // Need to crawl to get to the total size of the dir
    console.log(dirs);
    var solution = 0;
    for (var key in dirs) {
        var dir = dirs[key];
        var totalsize = getTotalSizeRecursive(dirs, dir["rootSize"], dir["childdirs"]);
        console.log("total size of dir ".concat(key, " is ").concat(totalsize));
        if (totalsize <= 100000) {
            solution += totalsize;
        }
    }
    console.log("solution is ".concat(solution));
}
var testInput = "$ cd /\n$ ls\ndir a\n14848514 b.txt\n8504156 c.dat\ndir d\n$ cd a\n$ ls\ndir e\n29116 f\n2557 g\n62596 h.lst\n$ cd e\n$ ls\n584 i\n$ cd ..\n$ cd ..\n$ cd d\n$ ls\n4060174 j\n8033020 d.log\n5626152 d.ext\n7214296 k";
//solution(testInput)
(0, helpers_1.getInput)(7, solution);
//guess 1281964 incorrect
