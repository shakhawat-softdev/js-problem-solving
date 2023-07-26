/*
Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method.

Example Input: "hello world" Example Output: "dlrow olleh"
*/

const text = "hello world";

const string_reverse = given_text => {
   const split_text = given_text.split('');

   let reverse_spilt_text = [];
   for (let i = split_text.length - 1; i > -1; i--) {
      reverse_spilt_text.push(split_text[i])
   };

   const joinText = reverse_spilt_text.join('')
   console.log(`Output is : ${joinText}`)

};


string_reverse(text)