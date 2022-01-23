

function summation(num: number) {
    let accumulator: number = 0
    for(let i = 0; i <= num; i ++){
        accumulator += i
    }
    return accumulator
}

console.log(summation(3));