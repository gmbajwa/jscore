'use strict'
/**
 * Array Methods 
 * forEach
 */

const numbers = [1,2, 3, 4, 5,6]
console.log('value multipley by 2 is :',numbers[0] * 2, 'index is :',0)
console.log('vlaue multiply by 2 is :',numbers[1] * 2, 'index is :',1)
console.log('vlaue multiply by 2 is :',numbers[2] * 2, 'index is :',2)
console.log('vlaue multiply by 2 is :',numbers[3] * 2, 'index is :',3)
console.log('vlaue multiply by 2 is :',numbers[4] * 2, 'index is :',4)
console.log('vlaue multiply by 2 is :',numbers[5] * 2, 'index is :',5)
console.log()
for(let number = 0; number < numbers.length; number++){
    console.log('value multipley by 2 is :', numbers[number] * 2, ' and index of value is ', number)
}
console.log()

// careate a function take value and index 
// multiple vlaue by 2 and print and also print index

// const multiplyByTwo = (value, index) => value * 2
// for(let number = 0; number < numbers.length; number++){
// console.log('value is after multipley by 2 :',multiplyByTwo(numbers[number]), 'and index is :',number)
// }

// forEach method which is for before introduced in JavaScript

function byTow(value, index){
    console.log(`vlaue is ${value} and multiple by 2 is :${value * 2} at index ${index}`)
}

numbers.forEach(byTow)