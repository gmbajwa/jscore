'use strict'

/**
 * splice (start, delete, insert) will Add, Update and delete array from the middle of the array
 * 
 * push() will Add at the End of array
 * pop() will Remove from the End of the array
 * 
 * unshift() will Add at the Start of the Array
 * shift() will Remove from the End of the Array
 * 
 * But  splice() method will Add, Update and Remove in the Middle of the Array
 * 
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

console.log('Before Splice the Users Array :', users);

users.splice(3, 2, 'inserted element', 1, 2, 3, 4,4, {id:1, name:33}) // start to delete, how many itmes to be deleted, 888 11 929 33 at postEx 

console.log('After Splice the Users Array :', users);

const newCollection = new Array(828).fill(-12, 3, 6) // fill start filling -12 at index 3 to 6 and remain 0 to 2 and 6 to 828 will empty
console.log('newCollection :', newCollection);
