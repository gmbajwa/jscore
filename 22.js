'use strict'
/**
<<<<<<< HEAD
 * 
 */
console.log(`/**
 * 
=======
 * For Loop
 */
console.log(`/**
 * For Loop
    * two implimentation
    * Iterator with in bracket and
    * before the For Loop Construct
    * 
>>>>>>> main
 */`)
console.log(`
    
    
    `)
<<<<<<< HEAD

=======
// Code is here

for(let i = 0; i < 100; i++){
    console.log(`Iterator I value is : ${i}`)
}

// we can't access i out side the for construct block
// as let is block level not global or function level
// do a try to and we try to access i out side the for
// block construct

// console.log(`value of i out side for block : ${i}`)

// as we can see i is not defined

// For Loop Construct 2nd implimentation
let i = 0;
for(; i < 3; i++){
    console.log(`value of i is : ${i}`)
}

// now we can access i as its define outside the
// loop construct
console.log(`value of i out side the construct : ${i}`)

/**
 * For Loop Construct implimentation using var
 */
var j = 0
for(;j<10; j++){
    console.log(`Value of j is : ${j}`)
}

console.log(`Value of j ${j} as j is defined out side the For Loop
    construct by using Var keyword
    `)

    // var j defined inside the For Loop Construct
    for(var k = 0; k<5; k++){
        console.log(`vale of k ${k}`)
    }
>>>>>>> main
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