class Employee {
    constructor(name) {
        this.name = name
        this.id = name.length
    }

}
function defineEmployeeNumber(employeeArray) {
    for (let i = 0; i < employeeArray.length; i++) {
        let employee = new Employee(employeeArray[i])
        console.log(`Name: ${employee.name} - Personal Number: ${employee.id}`)
    }
}

defineEmployeeNumber([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
])