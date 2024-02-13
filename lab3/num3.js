function rotateArray(array, count) {
    for (let i = 0; i < count; i++) {
        let temp = array[0]
        for (let i = 0; i < array.length - 1; i++) {
            array[i] = array[i+1]
        }
        array[array.length-1] = temp
    }
    return array
}
console.log(rotateArray([51, 47, 32, 61, 21], 2))