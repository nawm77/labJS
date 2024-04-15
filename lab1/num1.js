function defineAge(age){
    if (age > 0 && age < 110) {
        return age < 3 ? "младенец" :
            age < 14 ? "ребенок" :
                age < 20 ? "подросток" :
                    age < 66 ? "взрослый" : "пожилой"
    } else {
        return "Invalid age value"
    }
}

console.log(defineAge(1))
console.log(defineAge(5))
console.log(defineAge(17))
console.log(defineAge(22))
console.log(defineAge(70))
console.log(defineAge(-70))