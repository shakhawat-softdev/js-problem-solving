/* 
Task 4: 
Create a function that takes a sorted array of numbers and a target value as input.
The function should find two numbers in the array that add up to the target value. 
Return an array containing the indices of the two numbers.

Example 
Input: ([1, 3, 6, 8, 11, 15], 9) 
Example Output: [1, 2] (numbers at indices 1 and 2: 3 + 6 = 9)
*/

const twoSumSortedArray = (nums, target) => {
   let left = 0;
   let right = nums.length - 1;

   while (left < right) {
      const currentSum = nums[left] + nums[right];

      if (currentSum === target) {
         return [left, right];
      } else if (currentSum < target) {
         left++;
      } else {
         right--;
      }
   }
   return [];
}


const sortedArray = [1, 3, 6, 8, 11, 15];
const targetValue = 9;
const result = twoSumSortedArray(sortedArray, targetValue);
console.log(result); 