'use strict'
/**
 * Arrays : Reference Data Types
 */
console.log(`/**
 * Arrays : Reference Data Types
 */`)
console.log(`
    
    
    `)

    let fruits = ['apple', 'bananna', 'grapes']
    console.log(`fruites collection : ${fruits}`)
    console.log(`fruites collection: `, fruits)

    // single element to read
    console.log(`element at index 1 : ${fruits[0]}`)
    console.log(`element at index 1 :`, fruits[0])

    // we can access each and every element from the array collection by its index using bracket notation

    console.log(`first element :`, fruits[0])
    console.log(`second element :`, fruits[1])
    console.log(`third element :`, fruits[2])
    console.log(`access the element which is not present :`, fruits[3])
    // firnd the lenght of the Array
    console.log(`lenght of the fruites Array :`, fruits.length)

    // access the last index by using length property
    console.log(`last element by using length property :`, fruits[fruits.length - 1])

    // second last element of the fruites
    console.log(`second last element of the fruites :`, fruits[fruits.length - 2])

    // find the type of the Array Reference Data Type
    console.log(`checking the type of fruites by Array.isArray(fruites): `,Array.isArray(fruits))
    // as all refernece type Data Type is JavaScript are object like follow
    console.log(`type of fruites is :`, typeof fruits)
    // how we can identify this type of object is array type 
    // we can use the Array.isArray() method

    // we can add element to fruits array at start by push method
    fruits.push(`orange`)
    console.log(`after adding orange at start of the fruites collection :`, fruits)
    fruits.push(`shakar gandi`)
    console.log(`after adding shakar gandi, new fruites is :`, fruits)

    // we can removed element by pop method and it will mutate the original Array fruites
    // as poped element returnd and we can store and can use it latter
    fruits.pop();
    console.log(`after pop up new fruites :`, fruits)
    let popedFruite = fruits.pop()
    console.log(`new fruites array after second array :`, fruits)
    console.log(`poped element from fruite :`, popedFruite)

    // we can remove element for the start fo the fruites array using unshift() method
    let unshiftFruites = fruits.unshift(`anyfruites`)
    console.log(`after first unshift fruites :`, fruits)
    console.log(`unshift fruites :`, unshiftFruites)
    fruits.unshift(`2ndUnshiftFruite`)
    console.log(`after second time unshift new fruites collection :`, fruits)

    // we can remove any element formteh start by using shift
    let removedAtStart = fruits.shift()
    console.log(`removed element from start first time new fruites :`, fruits)
    console.log(`removed from start :`, removedAtStart)
    
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