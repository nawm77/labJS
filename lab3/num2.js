function findEqualsElements(array1, array2) {
    for (let i = 0; i < array1.length; i++) {
        if(array2.includes(array1[i])) {
            console.log(array1[i])
        }
    }
}
findEqualsElements(["hello", "hey", 4], ["hello", "4", "are"])