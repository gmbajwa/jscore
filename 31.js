'use strict'
/**
 * Use const not let to restrict reassigning
 * the array variable 
 * In case of let keyword we can reassign
 * the array but in case of const we
 * can not reassign the array variable
 */
console.log(`/**
 * Use const not let to restrict reassigning
 * the array variable 
 * In case of let keyword we can reassign
 * the array but in case of const we
 * can not reassign the array variable
 */`)
console.log(`
    
    
`)
    
/**
 * Start Coding From Here
 */
const PI = 3.14
// PI = 3.15 // This will throw an error
let radius = 5

let area = PI * radius * radius
console.log('Area of Circle is: ' + area)

console.log()
let arr = [1, 2, 3] // any one can reassign the array variable as we used let keyword to declare it
// this is allowed and will not throw any error and it will change the original array
// this situation is not possible with const keyword and its error prone, like following


console.log('Array arr before reassi:', arr)
// Reassigning the array variable
arr = [4, 5, 6]
console.log('Array arr after reassi:', arr)
// but we consider it as it hold old values [1,2,3]
arr = [5, 6, 7] // This will throw an error

console.log()
console.log(`Using const keyword to declare array variable`)

const arr2 = [10, 20, 30]
arr2.push(40) // This is allowed
console.log('Array2 after push:', arr2)

// now trying to reassign the array variable
console.log('Array2 before reassi:', arr2)
// Reassigning the array variable   
// arr2 = [50, 60, 70] // This will throw an error of invalid assignment to const variable
console.log('Array2 after reassi:', arr2)

/**
 * Summary:
 * 1- Use const keyword to declare array variable
 *    to restrict reassigning the array variable
 * 
 * 2- In case of const we can modify the array
 *    but we can not reassign the array variable
 *
 * 3- In case of let for Reference Type variables in
 *    stack a pointer will be created to point to
 *    the array in heap memory and we can reassign 
 *    the array variable to point to another
 *    array in heap memory
 */

//--------------------------------------------------------------------------

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