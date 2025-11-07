'use strict'
/**
 * Lexical Envirnoment
 * Scope Chaining
 * Lexical Scope
 */
console.log(`Lexical Environment
Lexical Scop Chaining
Lexical Scop
`)

// Start Codding 

// lexical environment for App function
let num2 = 100
const app = () => {
    console.log('app arrow function is working')

    const greeting = () => 'well come to the working day'

    // lexical environment for sum function
    let num2 = 33
    const sum = () => {
        let num = 55
        let num2 = 67
        console.log('Add tow numbers :')
        console.log('number 1 is :', num)
        console.log('number 2 is :', num2)

        const realSum = () => {
            let num = 5
            let num2 = 10
            console.log('realSum(): number 1 is :', num)
            console.log('realSum(): number 2 is :', num2)
        }
        console.log()
        console.log('----Start of RealSum Function----')
        console.log()
        realSum()
        console.log()
        console.log('----End of RealSum Function----')
        console.log()
    }

    console.log('greeting() :', greeting())
    console.log()
    console.log('----Sum Function----')
    sum()
    console.log('----End Sum Function----')
}

app()

/**
 * Summary -
 * 
 * Lexical Scope
 * Lexical Environment
 * Scope Chainig
 * 
 * 
 */
console.log(`
Summary -
    Lexical Scope
    Lexical Environment
    Scope Chainig
`)