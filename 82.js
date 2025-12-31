'use strict'
/**
 * Functions Prototype
 * in js fucntion are function but they also are object
 * we can treate function same as like object like we can 
 * add properties, methods and etc.
 * 
 * hello.name property return funciton name
 * we can access property as an object 
 * we can add properties and method on function same like object
 * 
 */

function hello(){
    console.log('hello from JS Engine')
}

console.log('hello.prototype ->', hello.prototype)
hello.prototype.abc = 'abc'
console.log('hello.prototype.abc -> ', hello.prototype.abc)
hello.prototype.xyz = 'xyz'
console.log('hello.prototype.xyz ->', hello.prototype.xyz)
hello.prototype.sing = function(){return `la la la la la la la`}
console.log('hello.prototype.sing() ->', hello.prototype.sing())



