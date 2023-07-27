/* 
Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.
*/

const calculator = (num1, operator, num2) => {
   if (operator === '+') {
      return num1 + num2;
   }
   else if (operator === '-') {
      return num1 - num2;
   }
   else if (operator === '*') {
      return num1 * num2;
   }
   else if (operator === '/') {

      if (num2 === 0) {
         throw new Error("Division by zero is not allowed.");
      }
      return num1 / num2;
   }
   else {
      throw new Error("Invalid operator. Supported operators are +, -, *, and /.");
   }
}


const number1 = 15;
const operator = '/';
const number2 = 3;

try {
   const result = calculator(number1, operator, number2);
   console.log(result);

} catch (error) {
   console.error(error.message);
}
