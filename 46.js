'use strict'
/**
 * Arrow Functions
 */

const sayHello = () => {
    return 'saying hello from function declaration'
}
console.log('sayHello is an Arrow Fuction :',sayHello())


/**
 * Function will accept list of items and a target
 * if target is in collection of list items
 * return target
 * otherwise retrun -1
 * Function should be Function Expression
 * then Assign the Function Expression to a veriable
 * and make Function Expression
 * then call the Fucntion Expression
 * and show the result of the Function Expression
 */

const findTarget =  (items, target) => {
    for(let item of items){
        if(item === target){
            return item
        }
    }
    return -1
}
// Calling the arrow function
console.log('find target using arrow function :',findTarget([2,3,5,6,7], 34))


/**
 * Another way to define Function Expression
 */

const sum =  (item, itemB) => {
    return item + itemB
}

console.log('Sum of two numbers is :',sum(2,3))

// find first character of any given string
const findCharacter = combinationOfCharacter => combinationOfCharacter[0]

console.log('find first character of given string :', findCharacter('mustafa'))
console.log('find first character of given string :', findCharacter('ibrahemi'))
console.log('find first character of given string :', findCharacter('bajwa'))

const even = num => num%2===0

console.log('even function expression :', even(50))