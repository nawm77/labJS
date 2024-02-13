function columnSum(array, id) {
    let sum = 0
    array.forEach(e => sum+=e[id])
    return sum
}
function rowSum(array, id) {
    let sum = 0
    array[id].forEach(e => sum+=e)
    return sum
}

function solution(array) {
    for (let i = 0; i < array.length; i++) {
        if (columnSum(array, i) !== rowSum(array, i)) {
            return false
        }
    }
    return true
}
console.log(solution([[4, 5, 6], [6, 5, 4], [5, 5, 5]]))
console.log(solution([[11, 32, 45], [21, 0, 1], [21, 1, 1]]))