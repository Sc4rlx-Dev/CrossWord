import { canFit, putWord, removeWord } from './helpers.js';


// const wordsList = ['casa', 'alan', 'ciao', 'anta'];

function parsPuzzle(puzzleString) {
    if (typeof puzzleString !== 'string' || puzzleString == "") {
        return null;
    }
    const rows = puzzleString.split('\n');
    const grid = [];
    
    for (let i = 0; i < rows.length; i++) {
        const row = rows[i];
        const cells = [];
        for (let j = 0; j < row.length; j++) {
            cells.push(row[j]); //add eash char in row
        }
        grid.push(cells); //add row in the grid
    }
    //print 2d array
    return grid;
}

//phase 2 creat a list of valid works
function findSlots(grid) {
    const slots = [];
    const rows = grid.length;
    const cols = grid[0].length;

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            const cell = grid[r][c];
            
            // console.log("cell in loop", cell)
            if (cell !== '1' && cell !== '2') {
                continue;
            }
            //try to go across
            if (c + 1 < cols && grid[r][c + 1] !== '.') {
                let len = 1;
                let cc = c + 1;

                while(cc < cols && grid[r][cc] !== '.') {
                    len++;
                    cc++;
                }
                slots.push({
                    row: r,
                    col: c,
                    dir: 'across',
                    length: len
                });
            }
            //try to go down
            //only if  cell is 2 "start boht ways", or cell is 1 and did not go across
            const isTwo = cell === '2';
            const isOne = cell === '1' && !(c + 1 < cols && grid[r][c + 1] !== '.');
            
            if ((isTwo || isOne) && r + 1 < rows && grid[r + 1][c] !== '.') {
                let len = 1;
                let rr = r + 1;
                
                while(rr < rows && grid[rr][c] !== '.') {
                    len++;
                    rr++;
                }
                slots.push({
                    row: r,
                    col: c,
                    dir : 'down',
                    length: len
                });                
            }
        }
    }
    return slots;
}

const ggrid = [
  [ '0', '0', '0', '0' ],
  [ '0', '.', '.', '0' ],
  [ '0', '0', '0', '0' ],
  [ '0', '.', '.', '0' ]
];

const slot = {
    row: 0,
    col: 0,
    dir: 'across',
    length: 4

}

console.log(canFit(ggrid, "casa", slot));






// const puzzleString = "0000\n0..0\n0000\n0..0";
// const grid = parsPuzzle(puzzleString);
// const slots = findSlots(grid)
// console.log(grid)
// console.log(slots)









// const puzzle = `...1...........
// ..1000001000...
// ...0....0......
// .1......0...1..
// .0....100000000
// 100000..0...0..
// .0.....1001000.
// .0.1....0.0....
// .10000000.0....
// .0.0......0....
// .0.0.....100...
// ...0......0....
// ..........0....`

// console.log((parsPuzzle(findSlots(puzzleString))))


// function crosswordSolver(puzzleString, wordList) {
    
// }    



