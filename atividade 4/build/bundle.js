//funcionário e apresente os atributos e método 
var Employee = /** @class */ (function () {
    function Employee() {
    }
    return Employee;
}());
var employee = new Employee();
employee.name = 'Lady Gaga';
employee.company = 'Born This Way Foundation';
employee.occupation = 'founder'; //fundadora
console.log("Name: ".concat(employee.name));
console.log("Company: ".concat(employee.company));
console.log("Occupation: ".concat(employee.occupation));
