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
let slots = []

    while(w < arr.length){
        // console.log("W : " ,arr[w])
        h = 0
        while(h < arr[w].length) {
            // console.log("h:",arr[w][h])
            if (arr[w][h] >= '1' && arr[w][h] <= '9'){
                // console.log(typeof(arr[w][h]))
                // console.log("NUMBER FOUND", arr[w][h])
                if ( h + 1 < arr[w].length && arr[w][h+1] !=='.' ){
                    let lenth = 1
                    // console.log("test :",arr[w])
                    while(h + lenth < arr[w].length && arr[w][h + lenth] !== '.'){
                        lenth++
                    }
                    // console.log(lenth)
                    if (lenth > 1) {
                        slots.push({ row: w, col: h, dir: 'across', length: lenth });
                    }
                }

                if (w + 1 < arr.length && arr[w + 1][h] !== '.') {
                    let lenght = 1
                    while (w + lenght < arr.length && arr[w + lenght][h] != '.'){
                        // console.log(lenght)
                        lenght++
                    }
                    if (lenght > 1) {
                        slots.push({ row: w, col: h, dir: 'down', length: lenght });
                    }
                    
                }
            }
            h++
        }
        w++
    }
return slots
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
    console.log(slots)

}



const emptyPuzzle = `2001
0..0
1000
0..0`;
const words = ['casa', 'alan', 'ciao', 'anta'];


main(emptyPuzzle, words)
