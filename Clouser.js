const sum = function (a) {
  return function (b) {
    return a + b;
  };
};

const sum1 = (a) => {
  return (b) => {
    return a + b;
  };
};

const sum2 = (a) => (b) => a + b;

const newSum = sum(10);
console.log(newSum(20));
console.log(sum2(204)(452));
