'use strict'
/**
 * some method of array
 * any single one element meet the given criteria or condition
 */
console.log('some method in array')

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


let isAnyMaleUser = users.some(user => user.gender === 'male')
console.log('is any user is Male ?', isAnyMaleUser);

let female = users.some(user => user.gender === 'female')

console.log('if any user is female :', female);

let names = users.some(user => user.name.length > 3)
console.log('is every user name length is more than 3 character :', names);

let isAnyAgeGreaterThan50 = users.some(user => user.age > 50)
console.log('is any user has age greater than 50 :', isAnyAgeGreaterThan50);



/**
 * is any single element in the array meet the 
 * given condition or critera then return tru
 */







