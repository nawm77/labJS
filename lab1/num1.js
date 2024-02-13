function defineAge(age){
    return age < 3 ? "младенец" :
        age < 14 ? "ребенок" :
        age < 20 ? "подросток" :
        age < 66 ? "взрослый" : "пожилой"
}

console.log(defineAge(1))
console.log(defineAge(5))
console.log(defineAge(17))
console.log(defineAge(22))
console.log(defineAge(70))