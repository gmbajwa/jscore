'use strict'
/**
 * For in Loop in Array Data Type
 * key of Values (kov) 
 */
console.log(`/**
 * For in Loop in Array Data Type
 * key of Values (kov)
 */`)
console.log(`
    
    
`)
    
/**
 * Start Coding From Here
 */
    const colors = ['Red', 'Green', 'Blue', 'Yellow', 'Purple'];
    for (const index in colors) {
        console.log(`Key: ${index}, Value: ${colors[index]}`);
    }

    // Use Case, create a new array of colors with Lowercase

    const lowerCaseChars = [];
    const upperCaseChars = [];
    for (const index in colors) {
        upperCaseChars.push(colors[index].toUpperCase());
        lowerCaseChars.push(colors[index].toLowerCase());
    }
    for (const index in colors) {
        console.log(colors[index]); 
    }

    console.log(`Lowercase Colors: [${lowerCaseChars}]`);
   console.log(`Uppercase Colors: [${upperCaseChars}]`);

   /**
    * Summary
    *
    * 0- Key of Values
    * 1- For in loop is used to iterate over array data type
    * 2- We can access the index of the elements of the array
    * using the counter variable
    * 3- It is less readable and harder to use than for of loop
    */

console.log(`
    
    
`)    
/**
 * Errors In JS
 * 
 * 1- type of 'NON' is an Object
 * 
 * 2- 'use stict' mode is not working if we use it
 * in the middle or in the bottom of file
 * with out keyword and 'use strict' mode if we
 * 
 * 3- declare any veriable with out any keyword
 * its not possible  
 */

console.log(`/**
* Errors In JS
* 
* 1- type of 'NON' is an Object
* 
* 2- 'use stict' mode is not working if we use it
* in the middle or in the bottom of file
* with out keyword and 'use strict' mode if we
* 
* 3- declare any veriable with out any keyword
* its not possible  
*/`);