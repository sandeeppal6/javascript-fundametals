const x = 15;

const y = 2163736187321n;

let name = "mphasis";

const isAdmin = true;

// literal way of object creation
const employee = {
  name: "sandeep",
  empId: 45623,
};

// new keyword way of object craetion
const person = new Object({
  name: "sandeep",
  empId: 45623,
});

var z;

console.log(typeof x);
console.log(typeof y);
console.log(typeof name);
console.log(typeof isAdmin);
console.log(typeof employee);
console.log(typeof person);
console.log(typeof z);

let data = null; // {}
console.log(typeof data);

let no = "s" * 45;
console.log(no);

// NaN ==> Not a Number
function sum(a, b) {
  return a + b;
}

console.log(sum(undefined, 20));
console.log(1 / 0);
console.log(-1 / 0);
