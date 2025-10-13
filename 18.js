'use strict'
/**
 * if
 * else if
 * else if
 * else if
 * else
 */
console.log(`/**
 * if
 * else if
 * else if
 * else if
 * else
 */`)
console.log(`
    
    
    `)
/**
 * Program logic :
 * 
 * take input from user 
 * convert it to number
 * check the user value agains following group its fall
 * if temprature is less than 0 its extremly cold
 * and if temprature is less than 16 its cold
 * and if temprature is less than 25 its okay
 * and if temprature is less than 35 its time to swim
 * adn if temprature is less than 45 its hot
 * otherwise temrature is extremly hot
 */
let userTemp = +prompt(`Please Enter Temprature Value :`)
if (userTemp < 0){
    console.log(`Weather is extremly cold.`)
} else if(userTemp < 16){
    console.log(`Weather is cold.`)
} else if(userTemp < 25){
    console.log(`Weather is okay`)
} else if(userTemp < 35){
    console.log(`Its time to swimm in a pool`)
} else if(userTemp < 45){
    console.log(`Weather is hot`)
}else{
    console.log(`Weather is extremly hot`)
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