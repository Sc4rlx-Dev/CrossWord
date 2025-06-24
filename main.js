function parse(puzzleString){
    if(typeof puzzleString != 'string') {
        return null
    }
    return puzzleString.split('\n')
}




function main(puzle , w) {
    if(!puzle || !w || w.length == 0){
        console.log('Error');
        return
    }
    console.log(w.length)
    console.log(new Set(w).size )
    if(new Set(w).size !== w.length) {
        console.log('Error')
        return
    }
}



const emptyPuzzle = `2001
0..0
1000
0..0`;
const words = ['casa', 'alan', 'ciao', 'anta'];


main(emptyPuzzle, words);
