'use strict'

/**
 * Functions The Top Most Concept in JS
 * Functions declaration
 */

console.log('Function the Top Miost Concept in JavaScript')

function sayHello(){
    console.log('Function declaration !!!')
    return ''
}

function helloByUser(message){
    console.log('say hello by user :', message)
    return ''
}

// add two numbers
function addTwoNum(num, num2){
    return num + num2
}


// function will accept an array and target if target found return target else -1
function findTarget(items, target){
    for(let item of items){
        if(item === target){
            return target
        }
    }
    return -1
}

console.log()
console.log(sayHello())
console.log()
console.log(helloByUser('mustafa ibrahemi bajwa'))
console.log()
console.log(helloByUser('Muhammad Taha'))
console.log()
console.log('Sum of two numbers :',addTwoNum(32, 15))
console.log()
console.log(findTarget([1, 2, 3, 432], 432))
