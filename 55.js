'use strict'
/**
 * Heigher Order Function
 * A function accept a function as Parameter
 * A function return a function
 * A function accept or return function, called Heigher Order Fucntions
 */

const functionA = () => () => 'Say no to corruption'

let result = functionA()
console.log('result : ', result())