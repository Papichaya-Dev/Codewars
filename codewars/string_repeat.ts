//================ Question: String repeat ================ //
//Write a function that accepts an integer n and a string s as parameters,
//and returns a string of s repeated exactly n times.
export function repeatStr(n:number, s:string){
    return s.repeat(n)
}

console.log(repeatStr(6, "Hello"))