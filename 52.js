'use strict'
/**
 * Rest Parameters
 * you can pass Argument of any number in Function Call
 */

const sumOfAll = (...restParam) => {
    let total = 0;
    console.log('what is restParam now :', restParam)
    console.log('what is type of restParam now typeof restParam:', typeof restParam)
    console.log('is restParam is Array type object Array.isArray(restParam):', Array.isArray(restParam))
    for(let value of restParam){
        total += value
    }
    return total
}

console.log(sumOfAll(1,3,4,5))

console.log()
/**
 * Summary -
 * by using feature of rest operator we can accept any number of Parameter
 * in array and use them
 */