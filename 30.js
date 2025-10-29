'use strict'
/**
 * For Loop Used in Arrays
 */
console.log(`/**
 * For Loops Used in Arrays
 */`)
console.log(`
    
    
`)
    
/**
 * Start Coding From Here
 */
let fruits = ['apple', 'mango', 'banana', 'grapes']
console.log(`Complete Fruits Array Collection: [${fruits}]`)
console.log()
// Manually Print Array Elements one way to print each element

console.log(`First Element of Fruites Array is fruits[0]: ${fruits[0]}`)
console.log(`Second Element of Fruites Array is fruits[1]: ${fruits[1]}`)
console.log(`Third Element of Fruites Array is fruits[2]: ${fruits[2]}`)
console.log(`Fourth Element of Fruites Array is fruits[3]: ${fruits[3]}`)
console.log()
// Using classical for loop : for(let i=0; i<limit; i++)

console.log(`Using classical for loop : for(let i=0; i < limit; i++)`)
let limit = fruits.length
for(let i=0; i < limit; i++){
    console.log(`${fruits[i]}`)
}

// Impliment the use case : Print All Array Elements in Camel Case
console.log()
console.log(`Impliment the use case : Print All Array Elements in Camel Case`)
const fruitesInCamelCase = []
for(let i = 0; i < limit; i++){
    fruitesInCamelCase.push(fruits[i].toUpperCase())
}
console.log(`Fruites Array in Camel Case :[${fruitesInCamelCase}]`)
console.log()

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