export function xo(str: string){
    const split_string = str.toLowerCase().split('');
    const result = split_string.filter(item => item === "x").length == split_string.filter(item => item === "o").length
   
    return result
}

console.log("result",xo("xxo"))