'use strict'
/**
 * array sort method
 * 
 */
console.log('sort method in array')

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


const names = users.map(user => user.name)
console.log('users names :', names);
names.sort((firstItem, secondItem)=> firstItem - secondItem )
console.log('after sorting the names :',names);

const ages = users.map(user => user.age)
console.log('user ages :', ages)
ages.sort((firstElement, secondElement)=> firstElement + secondElement)
console.log('after sorting the ages :', ages);







