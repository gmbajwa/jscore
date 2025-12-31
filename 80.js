'use strict'

/**
 * JS provide developer a unique way to create an empty object
 * by using Object.create(), it will create an empty object as
 * well and we can pass an other object to as an argument which
 * will create chain from the newly created empty object with 
 * the passed object, and if some thing we could not find any
 * property and method JS Enging automatically search that pro-
 * perty or method from the linked or chained object if found
 * that property or method then JS Engine returned that property
 * or method.
 */

const obj = {
    key1: 'value 1',
    key2: 'value 2'
}

const obj2 = Object.create(obj) // obj added in prototype

console.log('what is obj2 :', obj2)
// adding properties and method to empty object
obj2.key3 = 'value 3' // added in obj2
obj2.key2 = 'unique value' // added in obj2
obj2.allProp = function(){
    return `key3 is ${this.key3}, key2 is ${this.key2}`
}
console.log('what is obj2 :', obj2)
console.log(obj2.allProp())