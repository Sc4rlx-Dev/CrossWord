// now i have all the grid of the paths, and i get scanned that grid and gets an object slots that have i7datyat of cels on the hole grid
// now i have to solve using backtracking but first ill do some functios helpers

//function check if word fits into a slot 
//function write the word into the grid
//function undo the word for backtracking


function canFit(grid, word, slot) {
    const {row, col, dir, length} = slot;

    if (word.length !== length) return false;

    for (let i = 0; i < length; i++) {
        const r = dir === 'across' ? row : row + i;
        const c = dir === 'across' ? col + i : col;
        const cell = grid[r][c]; //grab the char in the grid at this position

        if (cell !== '0' && cell !== word[i]) {
            return false; //conflict
        }
    }
    return true;
}

function putWord(grid, word, slot) {
    const {row, col, dir, length} = slot;
    const changed = []; //list to track

    for (let i = 0; i < length; i++) {
        const r = dir === 'across' ? row : row + i; //increase row to go down
        const c = dir === 'across' ? col + i : col; //increase col to go across

        if (grid[r][c] === '0') {
            grid[r][c] = word[i];
            changed.push([r, c]); //remember what changeed 
        }
    }
    console.log("hellllo")
    return changed;
}

function removeWord(grid, changed) {
    for(let i = 0; i < changed.length; i++) {
        const r = changed[i][0];  //[[0,2] [3,2] [3,3]]
        const c = changed[i][1];
        grid[r][c] = '0';
    }
}


module.exports = { removeWord, putWord, canFit };
