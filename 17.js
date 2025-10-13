'use strict'
/**
 * nested if else
 */
console.log(`/**
 * to impliment nested if else create the Number Gues Game
 */`)
 
console.log(`
    
    
    `)
/**
  * Programe Logic :
  * 
  * User will input a number
  * if number is larger than the target will display a message to user
  * try again and your far away from target
  * and if user enter smaller number weill display a message 
  * to user you're behind and try again
  * and
  * other wiser You Won the game
  * 
  * prompt() is a method to take input from yours
  */

let target = 55
let userInput = +prompt(`Please Guess number`);
if(userInput === target){
    console.log(`Hurrah !!! You Won`)
}else{
    if(userInput < target){
        console.log(`less`)
    }else{
        console.log(`greater`)
    }
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