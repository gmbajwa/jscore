'use strict'
/**
 * String Usefull Funtions
 * 1- Learn remove spaces from start and End
 * from given string
 * 2- Learn make upper case string
 * 3- Learn make lowe case string
 * 4- Learn slice the string to smaller chunk
 * 
 * 1- trim()
 * 2- toUpperCase()
 * 3- toLowerCase()
 * 4- slice(starting index inclusive, ending index exclusive)
 */
console.log(`/**
 * String Indexing
 * 1- Learn string are immuteable
 * 2- Learn string type has length property
 * 3- Learn string index start form 0
 * 4- Learn string last character index is length-1
 * 
 * String Usefull Funtions
 * 1- Learn remove spaces from start and End
 * from given string
 * 2- Learn make upper case string
 * 3- Learn make lowe case string
 * 4- Learn slice the string to smaller chunk
 * 
 * 1- trim()
 * 2- toUpperCase()
 * 3- toLowerCase()
 * 4- slice(starting index inclusive, ending index exclusive)
 */`)
console.log(`
    
    
    `)
var myFullName = '  Ghulam Mustafa Ibrahemi  '
// before remove spaces first check the length of myFullName
console.log(`This is myFullName:`, myFullName)
console.log(`length of myFullName:`, myFullName.length)
// now remove the paces 
myFullName = myFullName.trim()
console.log(`This is myFullName after trim():`, myFullName)
console.log(`length of myFullName after trim():`, myFullName.length)
// make the Upper Case to myFullName
myFullName = myFullName.toUpperCase()
console.log(`Upper Case to myFullName:`, myFullName)
// make the Lower Cased to myFullName
myFullName = myFullName.toLocaleLowerCase()
console.log(`Upper Case to myFullName:`, myFullName)
// slice only first name from myFullName
console.log(`Slice First Name from myFullName:`, myFullName.slice(0, 6))
// slice middle name form myFirstName
console.log(`Slice the middle name from myFullName:`, myFullName.slice(7, 15))
// slice last name from myFirstName
console.log(`Slice the last name from myFullName:`, myFullName.slice(15))
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