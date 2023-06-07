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
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

const arrayEmps = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];

const arrayWiproEmployees = arrayEmps.filter((employee) => {
    return employee.emp_company == "Wipro";
});
const arrayWiproEmployeesNames = arrayWiproEmployees.map((employee) => {
    return employee.emp_name;
});
console.log(`Employees from wipro company are: ${arrayWiproEmployeesNames}`);

const arrayItORHrEmployees = arrayEmps.filter((employee) => {
    return employee.emp_dept == "IT" || employee.emp_dept == "HR";
});
const arrayItORHrEmployeesNames = arrayItORHrEmployees.map((employee) => {
    return employee.emp_name;
});
console.log(`Employees from IT or HR department are: ${arrayItORHrEmployeesNames}`);

const arrayEmpIdGreater50 = arrayEmps.filter((employee) => {
    return employee.emp_id > 50;
});
const arrayEmpIdGreater50Names = arrayEmpIdGreater50.map((employee) => {
    return employee.emp_name;
});
console.log(`Employees whose Id is greater than 50 are: ${arrayEmpIdGreater50Names}`);

const arrayEmpStartWithAOrVOrM = arrayEmps.filter((employee) => {
    if (employee.emp_name.startsWith("A") || employee.emp_name.startsWith("V") || employee.emp_name.startsWith("M")) {
        return employee.emp_name;
    }

});
const arrayEmpStartWithAOrVOrMNames = arrayEmpStartWithAOrVOrM.map((employee) => {
    return employee.emp_name;
});
console.log(`Employees whose names starts with A or V or M are: ${arrayEmpStartWithAOrVOrMNames}`);

const empSalaries = arrayEmps.map((employee) => {
    return employee.emp_salary;
});
const sumOfSalaries = empSalaries.reduce((runningTotal, value) => {
    return runningTotal + value;
});

const avgSalary = sumOfSalaries / empSalaries.length;
console.log(`Average salary of all departments employee is: ${avgSalary}`);

const arrayItEmployees = arrayEmps.filter((employee) => {
    return employee.emp_dept == "IT";
});
const empITSalaries = arrayItEmployees.map((employee) => {
    return employee.emp_salary;
});

const sumofITSalaries = empITSalaries.reduce((runningTotal, value) => {
    return runningTotal + value;
});
const avgSalaryIT = sumofITSalaries / empITSalaries.length;
console.log(`Average salary of IT department employee is: ${avgSalaryIT}`);