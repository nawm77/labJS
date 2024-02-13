function isLeap(year) {
    return year % 4 === 0 && year % 100 !== 0 || year % 400 ===0 ? "yes" : "no"
}
console.log(isLeap(2024))
console.log(isLeap(2003))