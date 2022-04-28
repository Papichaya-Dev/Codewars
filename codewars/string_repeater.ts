//================ Question: Thinkful - String Drills: Repeater ================ //
//Write a function named repeater() that takes two arguments (a string and a number), and returns a new string 
//where the input string is repeated that many times.
export function repeater(str: string , n: number):string{
    const repeater = str.repeat(n)
    return repeater
}

console.log("[result] = ", repeater("a", 5))