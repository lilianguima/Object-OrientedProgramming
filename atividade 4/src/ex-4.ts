//funcionário e apresente os atributos e método 

class Employee {
    public name: string //nome
    public company: string //empresa
    public office: string   //função
    
} const employee : Employee = new Employee ()
    employee.name = 'Lady Gaga'
    employee.company = 'Born This Way Foundation'
    employee.office = 'founder' //fundadora

    console.log(`Employee Name: ${employee.name}` )
    console.log(`Company Name: ${employee.company}`) //nome da empresa
    console.log(`Employee's position: ${employee.office}`) //cargo do funcionário
    