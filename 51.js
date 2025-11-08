'use strict'
/**
 * default Parameter Comes in ES2015
 * 
 */

const sum = (a = 1, b = 1) => a + b

console.log('Sum of two numbers :', sum(3, 5))

console.log()

console.log('sum(3,) :', sum(3))

console.log('Sum function without any vlaue of arguments :',sum())