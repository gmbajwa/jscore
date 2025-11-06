'use strict'
/**
 * Function Expression
 * Assign a function to a veriable is called function expression
 */

function sayHello(){
    return 'saying hello from function declaration'
}

/**
 * making Function sayHello declaration to Function Expression 
 * by assign sayHello Function to a veriable like following
 */
const sayHelloExpr = sayHello  // Assign function to veriable : called Function Expression
 
console.log('say hello with out call :',sayHello)
console.log('Say Hello Exp out with call :',sayHelloExpr)

// call say hello function declaration
console.log('Function declaration: sayHello() :',sayHello())
console.log('Function Expression sayHelloExp() :',sayHelloExpr())

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

function findTarget(items, target){
    for(let item of items){
        if(item === target){
            return item
        }
    }
    return -1
}
// Calling the Function declartion first
console.log('find target using function declaration :',findTarget([2,3,5,6,7], 34))

// assigning function to a veriable and make function expression
const findTargetExp = findTarget
console.log('find target using function expression :',findTargetExp([66,55,44,33,22], 55))

/**
 * Another way to define Function Expression
 */

const sum = function (item, itemB){
    return item + itemB
}

console.log('function expression with out call :', sum)
console.log('Sum of two numbers is :',sum(2,3))

// find first character of any given string
const findCharacter = function(combinationOfCharacter){
    return combinationOfCharacter[0]
}
console.log('find first character of given string :', findCharacter('mustafa'))
console.log('find first character of given string :', findCharacter('ibrahemi'))
console.log('find first character of given string :', findCharacter('bajwa'))

const even = function(num){
    return num%2===0
}

console.log('even function expression :', even(5))