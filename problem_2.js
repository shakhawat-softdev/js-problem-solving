/* 
Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. 

Example Input: [2, -5, 10, -3, 7] Example Output: 19

*/



const numArray = [2, -5, 10, -3, 7]
const sumOfPositiveNumber = givenArray => {

   const positiveNum = [];
   for (let i = 0; i < numArray.length; i++) {
      const num = numArray[i];

      if (num > 0) {
         positiveNum.push(num)
      };

   };

   const sumOfNum = positiveNum.reduce((accumulator, current) => {
      return accumulator + current;
   }, 0);

   console.log(`sum of all positive numbers: ${sumOfNum}`)



};

sumOfPositiveNumber(numArray)