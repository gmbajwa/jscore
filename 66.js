'use strict'
/**
 * Splice Array Method
 */

const users = [
    {id:1, name: 'mustafa', age: 38, gender: 'male', address:{house:'e-214/3', street: 8, near : 'madina mosque', road: 'main qainchi bazaar', village: 'amer sidhu', tehsil: 'model twon', city: 'Lahore', province: 'punjab', country: 'pakistan'}},
    {id:2, name: 'tabbassam', age: 36, gender: 'female'},
    {id:3, name: 'harram', age: 10, gender: 'female'},
    {id:4, name: 'eman', age: 9, gender: 'female'},
    {id:5, name: 'taha', age: 5, gender: 'male'},
    {id:6, name: 'hanni', age: 4, gender: 'female'},
    {id:7, name: 'Osaid', age: 1, gender: 'male'}
]

// only start deletion from index 2 and delete 4 elememnts from there
const deletedUsers = users.splice(2, 4) // this will start deletion from Harram Object to Hanni Object
console.log('after splice the user array is :', users);
console.log('deleted users by splice method :', deletedUsers)

// delete and insert at same time by splice method

const numbers = new Array(43).fill(5, 3, 13)
console.log('number collection is :', numbers)
const splicedItems = numbers.splice(1,4, 'nnn', '', 'mmm')
console.log('numbers collecgtion after splicing :', numbers)

console.log('splicedItems from numberd :', splicedItems);





