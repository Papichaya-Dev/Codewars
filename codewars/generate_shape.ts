export function generateShape(int: number): string{
    let shape = ""
    for(let i = 1; i <= int; i ++){
        for(let j =1; j <= int; j++){
            shape += "+"
        }
        shape += "\n"
    }
    return shape
}

console.log(generateShape(5))