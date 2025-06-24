function parse(puzzleString){
    if(typeof puzzleString !== 'string' || puzzleString === ""){
        return null
    }
    return puzzleString.split('\n')
}

function findSlots(arr){
   console.log(arr)

let w = 0 
let h = 0 
    while(w < arr.length){
        console.log("W : " ,arr[w])
        h = 0
        while(h < arr[w].length) {
            console.log("h:",arr[w][h])
            h++
        }
        w++
    }

}


function main(puzle , w) {
    // console.log("First input =>", puzle)
    if(!puzle || !w || w.length == 0){
        console.log('Error');
        return
    }
    // console.log(w.length)
    // console.log(new Set(w).size )
    if(new Set(w).size !== w.length) {
        console.log('Error')
        return
    }
    
    const grid = parse(puzle)
    // console.log("Grided parse(puzzle) =>" , grid)
    if(!grid) {
        console.log('Error')
        return
    }

    const slots = findSlots(grid)

}



const emptyPuzzle = `2001
0..0
1000
0..0`;
const words = ['casa', 'alan', 'ciao', 'anta'];


main(emptyPuzzle, words);
