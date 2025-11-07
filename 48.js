'use strict'
/**
 * Function inside Function using Function declaration,
 * Function Expression
 * and Arrow Funciton
 */
console.log('Function inside function using, Function declaration, Function Expression and Arrow Functions')

// Funcitons inside Function using Fucntion declaration

function App(){
    function greeting(){
        return 'function declartion: greeting : hy, im inside greeting'
    }

    // sum function declaration
    function sum(num, num2){
        return num + num2
    }

    // is even funtion declaration
    function isEven(num){
        return num % 2 === 0
    }

    //we can call all above functions inside App function declaration
    // like following
    console.log('greeting function declaration :',greeting())
    console.log('sum function declaration sum(2, 4) :', sum(2,4))
    console.log('is even function declaration isEven(5) :', isEven(5))
}

App() // App function by function declaration 

// new we'r goign to write App2 function using function expression

const application = function(){
    const greeting = function(){
        return 'function expression: greeting: say, greeting from application'
    }

    const sum = function(num, num2){
        return num + num2
    }

    const isEven = function(num){
        return num % 2 === 0
    }

    console.log('function expression: greeting :', greeting())
    console.log('function expression: sum : sum(22, 33) :', sum(22, 33))
    console.log('function expreesion: isEven : isEven(44) :', isEven(44))
}

application()

// Arrow Function syntac and define functions inside functions

const webApp = () => {
    const greeting3 = () => 'arrow functions: greeting arrow function: say, greeting form webApp'

    const sum3 = (num, num2) => num + num2

    const isEven3 = num => num % 2 === 0


    console.log('greeting3 arrow function from webApp :', greeting3())
    console.log('sum3(88, 99) arrow function from webApp :', sum3(88, 99))
    console.log('isEven3(99) arrow function from webApp :', isEven3(99))
}

webApp()

/**
 * Summary -
 * we can call any number of function inside a functions
 */