'use strict'
/**
 * array every method
 * every return true only if all elements meet the condition
 */
console.log('every method in array')

// real word example 

const users = [
    {id:1, name: 'mustafa', age: 38, gender: 'male', address:{house:'e-214/3', street: 8, near : 'madina mosque', road: 'main qainchi bazaar', village: 'amer sidhu', tehsil: 'model twon', city: 'Lahore', province: 'punjab', country: 'pakistan'}},
    {id:2, name: 'tabbassam', age: 36, gender: 'female'},
    {id:3, name: 'harram', age: 10, gender: 'female'},
    {id:4, name: 'eman', age: 9, gender: 'female'},
    {id:5, name: 'taha', age: 5, gender: 'male'},
    {id:6, name: 'hanni', age: 4, gender: 'female'},
    {id:7, name: 'Osaid', age: 1, gender: 'male'}
]


let target = users.every(user => user.name === 'eman')
console.log('is every user name is eman :', target);

let female = users.every(user => user.gender === 'female')

console.log('if every user is female :', female);

let names = users.every(user => user.address !== '')
console.log('is every user have address :', names);


/**
 * as ther are more femle object in users but find will
 * return target at first match and return back from
 * execution
 */







