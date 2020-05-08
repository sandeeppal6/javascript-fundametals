// this & function within object

const person = new Object({
  name: "sandeep",
  empId: 45623,
  mobileNumber: [78956, 74523],
  getInfo: function () {
    return this.name + "   " + this.empId;
  },
});

console.log(person.name);
console.log(person.getInfo());
