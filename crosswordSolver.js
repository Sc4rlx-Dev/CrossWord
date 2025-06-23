const wordsList = ['casa', 'alan', 'ciao', 'anta'];

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
    // let res = parsPuzzle(grid);
    const rows = grid.length;
    const cols = grid[0].length;

    // console.log("rows = ", rows)
    // console.log("cols = ", cols)
    // console.log(grid)

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            const cell = grid[r][c];

            if (cell != 1 && cell != 2) {
                continue;
            }
        }
    }

}



const puzzle = `...1...........
..1000001000...
...0....0......
.1......0...1..
.0....100000000
100000..0...0..
.0.....1001000.
.0.1....0.0....
.10000000.0....
.0.0......0....
.0.0.....100...
...0......0....
..........0....`

const puzzleString = "2001\n0..0\n1000\n0..0";
console.log(findSlots(puzzle));
// console.log((parsPuzzle(findSlots(puzzleString))))


// function crosswordSolver(puzzleString, wordList) {
    
// }    



