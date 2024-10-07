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
