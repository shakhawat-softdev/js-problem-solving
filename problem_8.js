/* 
Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.
*/

const findSecondSmallest = (arr) => {
   if (arr.length < 2) {
      throw new Error("Array must contain at least two elements.");
   }

   let smallest = Infinity;
   let secondSmallest = Infinity;

   for (let i = 0; i < arr.length; i++) {
      const num = arr[i];

      if (num < smallest) {
         secondSmallest = smallest;
         smallest = num;
      } else if (num < secondSmallest && num !== smallest) {
         secondSmallest = num;
      }
   }

   if (secondSmallest === Infinity) {
      throw new Error("There is no second smallest element in the array.");
   }

   return secondSmallest;
};


const numbersArray = [10, 5, 8, 3, 15, 12];
const secondSmallestNumber = findSecondSmallest(numbersArray);
console.log(secondSmallestNumber); // Output: 5
