function calculator(num1, operation, num2) {
    let result = 0
    switch (operation) {
        case "+":
            result = num1 + num2
            break
        case "-":
            result = num1 - num2
            break
        case "*":
            result = num1 * num2
            break
        case "/":
            result = num1 / num2
            break
        default:
            return `No such operation ${operation}`
    }
    return Number(result.toFixed(2))
}
console.log(calculator(1, "/", 2))
console.log(calculator(1, "2", 2))