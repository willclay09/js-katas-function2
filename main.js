//Addition Kata
function add (x, y) {
    return x + y
}
console.log(add(2, 4))

//Multiplication Kata
function multiply (x, y){
    let total = 0
    for(let i = 0; i < y ; i += 1){
        total = add(x, total)
    }
    return total
}
console.log(multiply(6, 4))

//Power Kata
function power (x, y){
    let total = 0
    for (let i = 0; i < y; i += 1){
        total = multiply(x, total)
    }
    return total
}
console.log(power(5, 7))

//Factorial Kata
function factorial (x){
   if (x === 0){
       return 1;
    }
    return x * factorial(x-1);
}
console.log(factorial(6))


