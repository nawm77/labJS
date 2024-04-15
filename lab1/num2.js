function round(num, acc) {
    if (num.toString().split(".")[1].length > 15) {
        return "Invalid number format"
    }
    return Number(num.toFixed(acc));
}

console.log(round(3.13751617181911841349834239048124, 2));
console.log(round(3.1, 3));
