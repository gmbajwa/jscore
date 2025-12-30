'use strict'

/**
 * How to linke an object with other object in
 * JavaScript by using __proto__ property
 */

const obj = {
    key1: 'key 1',
    key2: 'key 2'
}

const obj2 = {
    key3: 'key 3',
    key2: 'unique value'
}

console.log('obj2 __proto__ value :', obj2.__proto__) // __proto__ is an empty object
obj2.__proto__ = obj
console.log('obj2 __proto__ value after assigning __proto to an obj:', obj2.__proto__)

console.log('obj2 after chaining as obje2 does not have key2 :', obj2.key2)
