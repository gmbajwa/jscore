'use strict'

const numbers = [1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

const result = numbers.map( v => v * v)

console.log(result)

// real word example 

const users = [
    {id:1, name: 'mustafa', age: 38, gender: 'male', address:{house:'e-214/3', street: 8, near : 'madina mosque', road: 'main qainchi bazaar', village: 'amer sidhu', tehsil: 'model twon', city: 'Lahore', province: 'punjab', country: 'pakistan'}},
    {id:2, name: 'tabbassam', age: 36, gender: 'male'},
    {id:3, name: 'harram', age: 10, gender: 'female'},
    {id:4, name: 'eman', age: 9, gender: 'female'},
    {id:5, name: 'taha', age: 5, gender: 'male'},
    {id:6, name: 'hanni', age: 4, gender: 'female'},
    {id:7, name: 'Osaid', age: 1, gender: 'male'}
]

// need array of user id
// user name
// all user age
// alll user gender 
// all user address


console.log(`all users Ids :`, users.map(user => user.id));
console.log('all users names :',users.map(user => user.name))
console.log('all users ages :', users.map(user => user.age))
console.log('all userss gender :', users.map(user => user.gender))
console.log('all user addresses :', users.map(user => user.address));


