const employee = {
  name: "sandeep",
  empId: 45623,
};

const newEmployee = Object.assign({}, employee);
const newEmployee1 = { ...employee };

console.log(employee === newEmployee);

newEmployee.name = "rohit";

console.log(employee);
console.log(newEmployee);
