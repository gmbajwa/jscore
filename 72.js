'use strict'
console.log(`console.log(this) :`,this) // print javascript browser default object
console.log(`console.log(window) :`, window) // javascript global object window
console.log(`console.log(window === this) :`, window === this) // true
console.log()
console.log('function declaration')

// what is this and window in case of functions

// function declaration

function fnUsingFunctiondeclaration(){
    console.log(this) // will print window object
}

// calling function declaration function
fnUsingFunctiondeclaration()
console.log()
console.log('function expression')
// by using function expression 

const func = function(){
    console.log(this) // will returnd window
}

func()
console.log()
console.log('arrow function')

// by using arrow function

const arrFn = () => console.log(this)
arrFn()
console.log()