// Task 1 - Create an Employee Class

// Employee class definition
class Employee {
    constructor(name, salary, position, department) {
        this.name = name;
        this.salary = salary;
        this.position = position;
        this.department = department;
    }
getDetails() {
        return `${this.name} works as a ${this.position} with a salary of $${this.salary} wow thats lot of cheese for this person`;
    }
}

// Manager class (inherits from Employee)
class Manager extends Employee {
    constructor(name, salary, position, department, bonus) {
        super(name, salary, position, department);
        this.bonus = bonus;
    }
getDetails() {
        return `${this.name} works as a ${this.position} with a salary of $${this.salary} and a bonus of $${this.bonus}, wow thats lot of cheese for this person`;
    }
}

//Task 2-Create a Department Class
// Department class 
class Department {
    constructor(name) {         //these constructors are pretty cool, not gonna lie. they because they automatically set up an object when it's created, saving you the hassle of manually assigning all its properties.
        this.name = name;
        this.employees = [];
    }
 addEmployee(employee) {
        this.employees.push(employee);
    }
getDepartmentSalary() {
        let totalSalary = 0;
        this.employees.forEach(function(worker) {
            totalSalary += worker.salary;
        });
        return totalSalary;
    }
}