//================ Question: Invert values ================ //
//Given a set of numbers, return the additive inverse of each. 
//Each positive becomes negatives, and the negatives become positives.
export function invert(array: number[]){
    const invertValues = array.map(number => {
        if(number >= 0){
            return  -Math.abs(number)
        }
        else return Math.abs(number)
    })
    return invertValues
}

console.log("value", invert([1,2,3,4,5]))