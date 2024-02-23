class Employee {
    constructor(name, id) {
        this.name = name
        this.id = id
    }

}
function defineEmployeeNumber(employeeArray) {
    for (let i = 0; i < employeeArray.length; i++) {
        let employee = new Employee(employeeArray[i], employeeArray[i].length)
        console.log(`Name: ${employee.name} - Personal Number: ${employee.id}`)
    }
}

defineEmployeeNumber([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
])