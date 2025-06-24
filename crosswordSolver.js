// import { canFit, putWord, removeWord } from './helpers.js';


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

function cloneGrid(grid) {
    return grid.map(row => row.slice());
}

// i have to solve the puzzle imma use backtracking i prepared the functions helpers 
function solve(grid, slots, words, used, index, res) {

    if (index === slots.length) {
        res.push(cloneGrid(grid)) //clone it to save to see how many soloutin i hace
        return;
    }
    const slot = slots[index];

    for (let i = 0; i < words.length; i++) {

        if (used[i]) continue;
        let word = words[i];

        if(canFit(grid, word, slot) === true) {
            let changed = putWord(grid, word, slot);
            used[i] = true;

            solve(grid, slots, words, used, index + 1, res);
            used[i] = false;
            removeWord(grid, changed); //backtrack
        }

    }
}



function crosswordSolver(puzzle, words) {
    
    //first step validate inputs
    if (typeof puzzle !== 'string' || !Array.isArray(words)) {
        console.log('Error');
        console.log("here")
        return;
    }
    
    //clean anf parse the puszle into grid
    const grid = parsPuzzle(puzzle);
    if(!grid) {
        console.log('Errur');
        return;
    }
    
    //find all wordds slot
    const slots = findSlots(grid);
    if (slots.length !== words.length) {
        console.log('Error');
        return;
    }
    
    const Unique = new Set(words); //copie unique words in var
    if (Unique.size !== words.length) {
        console.log('Error');
        return;
    } 
    
    //prepare to solve
    const used = Array(words.length).fill(false); //fill false for all words unused yet
    const res = [];
    
    solve(grid, slots, words, used, 0, res);
    console.log("res len", res.length);
    if (res.length > 0) {
        console.log("grid pre");
        for (let row of res[0]) {
            console.log(row.join(""));
        }
    }

    console.log(res.length);
    
    if (res.length === 1) {
        const finalGrid = res[0];
        const lastRes = finalGrid.map(row => row.join("")).join("\n"); //get row cell and joing to be string 
        console.log(lastRes);
    } else {
        console.log("Erprr");
    }
    
}

const puzzle = "2001\n0..0\n1000\n0..0"
const words = ['casa', 'alan', 'ciao', 'anta']
console.log(crosswordSolver(puzzle, words));