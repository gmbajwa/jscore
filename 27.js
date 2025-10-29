'use strict'
/**
 * Primitie vs Reference Data Types
 * 
 * Primitive Data Types are stored in Stack Memory
 * and Reference Data Types are stored in Heap Memory
 * 
 * Primitive Data Types are:
 * 1- Number
 * 2- String
 * 3- Boolean
 * 4- Undefined
 * 5- Null
 * 6- Symbol
 * 
 * Reference Data Types are:
 * 1- Object
 * 2- Array
 * 3- Function  
 */
console.log(`/**
 * Primitie vs Reference Data Types
 * 
 * Primitive Data Types are stored in Stack Memory
 * and Reference Data Types are stored in Heap Memory
 * 
 * Primitive Data Types are:
 * 1- Number
 * 2- String
 * 3- Boolean
 * 4- Undefined
 * 5- Null
 * 6- Symbol
 * 7- BigInt
 * 
 * Reference Data Types are:
 * 1- Object
 * 2- Array
 * 3- Function
 */`)
console.log(`
    
    
    `)
    
    /**
     * Start Coding From Here
     */
    // Primitive Data Types
    let num1 = 6
    let num2 = num1
    console.log(`num1 is : ${num1}`)
    console.log(`num2 is : ${num2}`)
    console.log(`after increment by 1 to num1 only`)
    num2++
    console.log(`num1 is : ${num1}`)
    console.log(`num2 is : ${num2}`)
    
    // Reference Data Types
    let arr1 = [1,2,3]
    let arr2 = arr1
    console.log(`arr1 is : [${arr1}]`)
    console.log(`arr2 is : [${arr2}]`)
    console.log(`after push 4 to arr1 only`)
    arr1.push(4)
    console.log(`arr1 is : [${arr1}]`)
    console.log(`arr2 is : [${arr2}]`) 
    // Both arr1 and arr2 are changed because both are pointing to same reference in memory
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