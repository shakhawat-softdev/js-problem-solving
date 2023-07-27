/* 
Task 7: Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.
*/

const romanToInteger = romanNumeral => {
   const romanNumeralsMap = { 'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000, };

   let result = 0;
   let prevValue = 0;

   for (let i = romanNumeral.length - 1; i >= 0; i--) {
      const currentSymbol = romanNumeral[i];
      const currentValue = romanNumeralsMap[currentSymbol];

      if (currentValue < prevValue) {
         result -= currentValue;
      } else {
         result += currentValue;
      }

      prevValue = currentValue;
   }

   return result;
};

// Example usage:
const romanNumeral1 = "IX";
const integer1 = romanToInteger(romanNumeral1);
console.log(integer1); // Output: 9

const romanNumeral2 = "XXI";
const integer2 = romanToInteger(romanNumeral2);
console.log(integer2); // Output: 21
