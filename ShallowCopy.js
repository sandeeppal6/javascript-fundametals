const employee = {
  name: "sandeep",
  empId: 45623,
};

const newEmployee = employee;

console.log(employee === newEmployee);

newEmployee.name = "rohit";

console.log(employee);
console.log(newEmployee);
