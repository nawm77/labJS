class City{
    constructor(name, latitude, longitude) {
        this.town = name
        this.latitude = Number(latitude).toFixed(2)
        this.longitude = Number(longitude).toFixed(2)
    }
}

function print(array) {
    for (let i = 0; i < array.length; i++) {
        let params = array[i].split("|")
        let city = new City(params[0].trim(), params[1].trim(), params[2].trim())
        console.log(city)
    }
}

print(['Moscow | 55.7522 | 37.6156', 'Beijing | 39.913818 | 116.363625'])