class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "Infy");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");
const array_employess = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];
console.log("---------TCS Employee details--------- ");
array_employess.forEach((Employee) => {
    if (Employee.emp_company == "TCS") {
        console.log(`Employee name:${Employee.emp_name},Employee company name:${Employee.emp_company}`);
    }

});
console.log("---All employee details whose salary greater than or equal to 50,000---");
array_employess.forEach((Employee) => {
    if (Employee.emp_salary >= 50000) {
        console.log(Employee.emp_id, Employee.emp_name, Employee.emp_dept, Employee.emp_salary, Employee.emp_company);
    }

});
let sumOfSalary = 0;
array_employess.forEach((Employee) => {
    sumOfSalary = sumOfSalary + Employee.emp_salary;
});
console.log(`Sum of all Employee salary is:${sumOfSalary}`);
let avgOfSalary;
avgOfSalary = sumOfSalary / array_employess.length;
console.log(`Average salary is:${avgOfSalary}`);
console.log("----Employee details of IT or HR department & whose salary is >=75000");
array_employess.forEach((Employee) => {
    if (Employee.emp_dept == "IT" || Employee.emp_dept == "HR" && Employee.emp_salary >= 75000) {
        console.log(Employee.emp_id, Employee.emp_name, Employee.emp_dept, Employee.emp_salary, Employee.emp_company);
    }
});