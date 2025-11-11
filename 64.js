'use strict'

/**
 * fill method
 * tow use cases
 * 
 * 1- create new array and fill it with -1
 * 
 * 2 - fill with new value to any existing
 * array 
 * 
 */

const arr = new Array(10).fill(28)
console.log('a aa a a a a a a lengt and fill with 18 :', arr);


// now fill created arr with 9 from starting index 5 and endign index 8

arr.fill(9, 4, 7)

console.log('filled with 9 from 5 to 8 :',arr);
