'use strict'
console.log('Function Hoisting')

sayGreeting() // Hoisting in case of function declaration is working fine

function sayGreeting(){
    console.log('Wellcome to Hoisting in Core JavaScript')
}

sayGreeting()

// console.log(myMessage) // hoisting in case of var keyword
// working fine

// but not working in case of Let and Const keyword

let myMessage = 'Hy, Wellcom by myMessage'

console.log(myMessage)

// Hoisting in case of Function Expression
// myFunction() // not working as in case of let and const

const myFunction = function(){
    console.log('myFunction is an Function Express')
}

myFunction()

// Hoisting in case of Arrow Funcitons

// goodBy() // Hoisting also not work in case of Arrow Functions

const goodBy = () => console.log('say good by to Hoisting')

goodBy()