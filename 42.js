'use strict'
/**
 * Objects list in Array
 * 
 * We can Iterate Arrays using following construct
 * 
 * For Of Loop Construct
 * 
 * For Loop Construct
 * 
 * For In Loop Construct
 */

const users = [
    {id: 1, name: 'Mustaf', gender: 'male', age: 38},
    {id: 2, name: 'Harram', gender: 'female', age: 11},
    {id: 3, name: 'Taha', gender: 'male', age: 6},
    {id: 4, name: 'Hanni', gender: 'female', age: 4}
]

// Standared Loop for Arrays is for...of
for(let user of users){
    console.log(user)
}
console.log()
// Classical Loop for Array is for
console.log('Classical For Loop Construct for Arrays')
for(let i = 0; i < users.length; i++){
    console.log(users[i])
}