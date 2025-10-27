'use strict'
/**
 * Break and Continue
 */
console.log(`/**
 * Break and Continue Construct
 */`)
console.log(`
    
    
    `)
// print first 10 natural numbers
for(let i = 1; i < 11; i++){
    console.log(`Natural Number: ${i}`)
}

// use of break construct
for(let j = 1; j < 11; j++){
    if(j === 5){
        break // at 5 break instruct for loop to quit and instruction nest to the  for loop will be excuted
    }
    console.log(`J is :${j}`)
}

// use of continue construct
for(let k = 1; k < 11; k++){
    if( k === 8){
        continue // 8 will not printed as continue will instruct for loop construct to restart from start
    }
    console.log(`K is :${k}`)
}
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