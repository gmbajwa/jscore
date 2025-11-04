'use strict'
/**
 * Object 
 * Object destruction
 */

const obj = {
    prob1 : 'value one',
    prob2 : 'value two',
    prob3 : 'value three',
    prob4 : 'value four',
    prob5 : 'value five'
}

console.log(`obj is : `, obj)

const {prob1,prob5, prob3, ...restObj} = obj

console.log(`prob1 in obj :`, prob1)
console.log(`prob5 in obj :`,prob5)
// prob1 = 'update value 1'
// prob5 = 'updated value 5'
console.log()
console.log(`prob1 in obj :`, prob1)
console.log(`prob5 in obj :`,prob5)
console.log(`prob3 in obj :`, prob3)
console.log()
console.log(`Rest Object :`)
console.log('rest obje is :', restObj)
console.log()
/**
 * we can chenge destructing key's name like following
 */
console.log(`We can change name of `)
console.log(`We can change name of destructer keys like :`)
let {prob2:pb2, prob4:pb4} = obj

console.log('bp2 is :', pb2)
console.log('pb4 is :',pb4)
console.log()