const numbers = [2, 3, 6, 7, 10]
function isDiv(num){
    let isFind = false
    for (let i = numbers.length-1; i >= 0; i--) {
        if(num % numbers[i] === 0) {
            console.log("Число делится на %d", numbers[i])
            isFind = true
            break
        }
    }
    if (!isFind) {
        console.log("Не делится")
    }
}
isDiv(30)