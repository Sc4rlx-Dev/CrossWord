function parse(puzzleString){
    if(typeof puzzleString !== 'string' || puzzleString === ""){
        return null
    }
    return puzzleString.split('\n').map(r => r.split(''))
}


function findSlots(arr){
let w = 0 
let h = 0 
let slots = []

    while(w < arr.length){
        // console.log("W : " ,arr[w])
        h = 0
        while(h < arr[w].length) {
            const cell = arr[w][h]
            // console.log("h:",arr[w][h])
            if (arr[w][h] >= '1' && arr[w][h] <= '9'){
                const is2 = cell === '2'
                let acrossed = false
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
                        acrossed = true
                    }
                }
                if(is2 || !acrossed){
                    if (w + 1 < arr.length && arr[w + 1][h] !== '.') {
                        let lenth = 1
                        while (w + lenth < arr.length && arr[w + lenth][h] != '.'){
                            // console.log(lenght)
                            lenth++
                        }
                        if (lenth > 1) {
                            slots.push({ row: w, col: h, dir: 'down', length: lenth });
                        }
                        
                    }
                }
            }
            h++
        }
        w++
    }
    // console.log(slots)
return slots
}

function check_place(grid , w , slot){
    let i = 0
    let len = grid.length
    if (w.length != slot.length) {
        return false
    }
    while(i < len){
        const r = slot.row + (slot.dir === 'down' ? i : 0)
        const c = slot.col + (slot.dir === 'across' ? i : 0)
        // console.log(r)
        // console.log(c)
        const exist = grid[r][c]
        const isletter = exist >= 'a' && exist <= 'z'

        if (isletter && exist != w[i]){
            return false
        }

        // console.log()

        i++
    }
return true
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

    // console.log(slots.length , w.length)
    if (slots.length !== w.length) {
        console.log("Error")
        return
    }

        
    // for (let i = 0; i < words.length; i++) {
    //     const word = words[i];
    //     const slot = slots[i];
    //     console.log("word :" , word)
    //     console.log("slote :" , slot)
        
    //     if (!check_place(grid, word, slot)) {
    //         console.log("Error");
    //         return;
    //     }
    // }
    // console.log("Success");


}



const emptyPuzzle = `2001
0..0
1000
0..0`;
const words = ['casa', 'alan', 'ciao', 'anta']


main(emptyPuzzle, words)
