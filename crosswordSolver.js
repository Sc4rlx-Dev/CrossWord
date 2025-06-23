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
    return grid;
}


const puzzleString = "2001\n0..0\n1000\n0..0";
console.log(parsPuzzle(puzzleString));


// function crosswordSolver(puzzleString, wordList) {
    
// }    



