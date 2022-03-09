let num1 = 5,
  num2 = 10;

function Calculator(num1, num2, sign) {
  let result;
  switch (sign) {
    case "+":
      return (result = num1 + num2);
    case "-":
      return (result = num1 - num2);
    case "*":
      return (result = num1 * num2);
    case "/":
      return (result = num1 / num2);
    default:
      return (result = "not found");
  }
}

console.log(Calculator(5, 6, "*"));
