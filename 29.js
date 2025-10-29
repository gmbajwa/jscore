'use strict'
/**
 *How to copy more than one array in JavaScript? 
 */
console.log(`/**
 * How to copy more than one array in JavaScript?
 */`)
console.log(`
    
    
`)
    
/**
 * Start Coding From Here
 */
const arr1 = [1, 2, 3];  
const arr2 = [4, 5, 6];
const arr3 = [7, 8, 9];
const combinedArray = [...arr1, ...arr2, ...arr3, 'item1', 'item2'];
console.log(combinedArray); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 'item1', 'item2']

/**
* how to check weather tow array are same or not
*/
const array1 = [1, 2, 3];
const array2 = [1, 2, 3];
const array3 = array1;

console.log(`array1 === array2 :`,array1 === array2); // false
console.log(`array1 === array3 :`,array1 === array3); // true


console.log(`

`);



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