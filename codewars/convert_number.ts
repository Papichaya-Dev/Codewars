//================ Question: Convert number to reversed array of digits ================ //
//Given a random non-negative number,
//you have to return the digits of this number within an array in reverse order.
export const digitize = (n:number):number[] => {
    let reverse = n.toString().split('').reverse().join('')
    let digit = reverse.toString().split('')
    return digit.map(Number)
}

console.log(digitize(70))