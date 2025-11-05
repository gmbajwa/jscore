'use strict'
/**
 * Nested destructting
 */

console.log('Nested dstructring :')
const users = [
    {id:1, name: 'mustafa', age: 38, gender: 'male', address:{house:'e-214/3', street: 8, near : 'madina mosque', road: 'main qainchi bazaar', village: 'amer sidhu', tehsil: 'model twon', city: 'Lahore', province: 'punjab', country: 'pakistan'}},
    {id:2, name: 'tabbassam', age: 36, gender: 'male'},
    {id:3, name: 'harram', age: 10, gender: 'female'},
    {id:4, name: 'eman', age: 9, gender: 'female'},
    {id:5, name: 'taha', age: 5, gender: 'male'},
    {id:6, name: 'hanni', age: 4, gender: 'female'},
    {id:7, name: 'Osaid', age: 1, gender: 'male'}
]
console.log('all users :', users)
console.log()
// Nested destructring

const [{address}, u2, u3, ...restUsers] = users
console.log('user 1 detaie :',address)
console.log('user 2 detaile :', u2)
console.log()
console.log('user 3 detaile :', u3)
console.log()
console.log('rest users', restUsers)
console.log()