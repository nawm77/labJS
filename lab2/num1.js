function charSum(num) {
    let sum = 0
    num.split("").forEach(e => sum+=parseInt(e))
    return sum
}
console.log(charSum("123"))