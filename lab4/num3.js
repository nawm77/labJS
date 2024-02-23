function printMatrix(n) {
    for (let i = 0; i < n; i++) {
        let str = ""
        for (let j = 0; j<n-1; j++) {
            str = str + n + " "
        }
        str += n
        console.log(str)
    }
}

printMatrix(4)