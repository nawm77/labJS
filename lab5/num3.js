function getSoldItemsCount(array1, array2) {
    let map = new Map()
    for (let i = 0; i < array1.length; i+=2) {
        map.set(array1[i], Number(array1[i+1]))
    }
    for (let i = 0; i < array2.length; i+=2) {
        if(map.has(array2[i])) {
            map.set(array2[i], map.get(array2[i]) + Number(array2[i+1]))
        } else {
            map.set(array2[i], array2[i+1])
        }
    }
    map.forEach((v, k) => {
        console.log(`${k} -> ${v}`)
    })
}

getSoldItemsCount(['Chips', '5', 'CocaCola', '9', 'Bananas', '14'], ['Bananas', '9'])