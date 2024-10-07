// Task 1 - Create an Employee Class

// Employee class definition
class Employee {
    constructor(name, salary, position, department) {
        // This constructor sets up the employee's name, salary, position, and department
        this.name = name;
        this.salary = salary;
        this.position = position;
        this.department = department;
    }

    // Method to get employee details
    getDetails() {
        return `${this.name} works as a ${this.position} with a salary of $${this.salary}, wow that's a lot of cheese for this person!`;
    }
}

// Task 3 - Create a Manager Class that Inherits from Employee

// Manager class (inherits from Employee)
class Manager extends Employee {
    constructor(name, salary, position, department, bonus) {
        super(name, salary, position, department);
        this.bonus = bonus;  // Manager gets a bonus, lucky them!
    }

    // Override the getDetails method to include the manager's bonus
    getDetails() {
        return `${this.name} works as a ${this.position} with a salary of $${this.salary} and a bonus of $${this.bonus}, wow that's a lot of cheese for this person!`;
    }
}

// Task 2 - Create a Department Class
class Department {
    constructor(name) {
        // These constructors are pretty cool, not gonna lie. They automatically set up an object when it's created, saving you the hassle of manually assigning all its properties.
        this.name = name;
        this.employees = [];
    }

    // Method to add employees to the department
    addEmployee(employee) {
        this.employees.push(employee); // Pushes an employee object to the employees array
    }

    // Method to calculate total salary for the department
    getDepartmentSalary() {
        let totalSalary = 0;
        this.employees.forEach(function(worker) {
            totalSalary += worker.salary;
        });
        return totalSalary;
    }
    //************************************RAN INTO ALOT OF ISSUES SO REDID ORDER OF TASK 3,4,2*********************
     // Task 4 - Handle Bonuses for Managers
     calculateTotalSalaryWithBonus() {
        let totalSalary = 0;
        this.employees.forEach(function(worker) {
            if (worker instanceof Manager) {
                // Add bonus if the employee is a manager
                totalSalary += worker.salary + worker.bonus;
            } else {
                // Just adds the salary if it's a regular employee
                totalSalary += worker.salary;
            }
        });
        return totalSalary;
    }
}

//Task 5- Create and Manage Departments and Employees

// Create departments
const CyberSecurity = new Department("Cyber Security");
const QualityAssurance = new Department("Quality Assurance");

// Create employees and managers
const RyanReynolds = new Employee("Ryan Reynolds", 85000, "Security Analyst", "Cyber Security");
const DwayneJohnson = new Employee("Dwayne Johnson", 78000, "QA Tester", "Quality Assurance");
const SethRogen = new Manager("Seth Rogen", 125000, "Cyber Security Manager", "Cyber Security", 20000);
const JamesFranco = new Manager("James Franco", 130000, "QA Lead", "Quality Assurance", 25000);

// Add employees and managers to departments
CyberSecurity.addEmployee(RyanReynolds);
CyberSecurity.addEmployee(SethRogen);
QualityAssurance.addEmployee(DwayneJohnson);
QualityAssurance.addEmployee(JamesFranco);

// Calculate total salary for each department (without bonuses)
console.log(`Total salary for Cyber Security: $${CyberSecurity.getDepartmentSalary()}`);
console.log(`Total salary for Quality Assurance: $${QualityAssurance.getDepartmentSalary()}`);

// Calculate total salary for each department (with bonuses)
console.log(`Total salary with bonuses for Cyber Security: $${CyberSecurity.calculateTotalSalaryWithBonus()}`);
console.log(`Total salary with bonuses for Quality Assurance: $${QualityAssurance.calculateTotalSalaryWithBonus()}`);