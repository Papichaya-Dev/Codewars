//================ Question: Can we divide it? ================ //
//Your task is to create the functionisDivideBy (or is_divide_by) to check 
//if an integer number is divisible by both integers a and b.
export function isDivideBy(number: number, a: number, b: number) {
    if (number % a === 0 && number % b === 0) {
        return true;
    } else return false;
        
  }

console.log(isDivideBy(-12, 2, -5))