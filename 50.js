'use strict'
/**
 * Block Scope Vs Function Scope
 */

console.log(`Block Scope Vs Function Scope
`)

// Start Coding 

// How to define Blocks scope and Function in JavaScipt
// curly braces used to define blocks
// Example of blocks are if Block
// for block
// ets
// console.log('any thing is there')
let itsGlobalName = 'as this is define in global function scop'
{
    let userName = 'Mustafa Ibrahemi'
    console.log('user name in block one :', userName)
    console.log('in user name block: ',itsGlobalName)
}

console.log()
{
    let agentName  = "agent name"
    console.log('agent name is here :', agentName)
    console.log('agent section :', itsGlobalName)
}
console.log()

// lexical and blocl and function scope how its works

console.log('How Lexical, Function and Block Scope Workd Basic Understanding :')
console.log(`
    Lexical : Bottom to Top Approach --just work fine and wonder the newby
    Block or Function Scope : Not Work Top To Bottom Approach -- Even for var, let and const

`)
console.log('----Start of app----')
const app = ()=>{
    let value1 = 'in app'
    console.log('value1 :', value1)

    // i'm going to access value4
    // console.log('at 0 accessing of appC or value4 :', value4) // not going to work and here is lexical environment even for var

    const appA = () => {
        let value2 = 'in appA'

        console.log('value2 :', value2)
        // console.log('going to access sub level not upper level :', value4)

        const appB = () => {
            let vlaue3 = 'in appB'

            console.log('value3 :', vlaue3)
            const appC = () => {
                var value4 = 'in appC'

                console.log('value4 :', value4)
            }
            appC()
        }
        appB()
    }
    appA()
}
app()
console.log('----End of App----')
console.log()
/**
 * Summary -
 * Block Scope Vs Function Scope
 * Var is Function Scope
 * Let and Const is block Scoped
 * Lexical approach from Top to Bottom 
 * Fucntion and Block Not Work Top To Bottom 
 */


console.log(`Summary -
1- Block Scope Vs Function Scope
2- Lexical approach work Top to Bottom
3- Block and Function approac Not Work Top to Bottom
`)