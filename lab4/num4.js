function progressBar(n) {
    let template= `${n}% `
    if(n === 100) {
        console.log(template + "Complete!")
        console.log("[%%%%%%%%%%]")
        return
    }
    template += "["
    for (let i = 10; i <= 100; i+=10) {
        if (i <= n) {
            template += "%"
        } else {
            template += "."
        }
    }
    template += "]"
    console.log(template)
    console.log("Still loading...")
}

progressBar(40)