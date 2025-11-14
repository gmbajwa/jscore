'use strict'

/**
 * Iterables: On Which we can use For...Of
 * e.g String data Types, and Arrays data Types
 * 
 * How to make custom Iterables in JavaScript
 * 
 * Array Like Objects: 
 * How has only Length Property called array like objec
 * And hows we can access from index
 * 
 * e.g String data type is also Array like object
 * as its full fill both conditions 
 * 1 is Strings data types has Length property
 * 2 string data types also has index
 */

const users = [
    {id:1, name: 'mustafa', age: 38, gender: 'male', address:{house:'e-214/3', street: 8, near : 'madina mosque', road: {k1: 'main', k2: 'qainchi', k3:'bazaar'}, village: 'amer sidhu', tehsil: 'model twon', city: 'Lahore', province: 'punjab', country: 'pakistan'}},
    {id:2, name: 'tabbassam', age: 36, gender: 'female'},
    {id:3, name: 'harram', age: 10, gender: 'female'},
    {id:4, name: 'eman', age: 9, gender: 'female'},
    {id:5, name: 'taha', age: 5, gender: 'male'},
    {id:6, name: 'hanni', age: 4, gender: 'female'},
    {id:7, name: 'Osaid', age: 1, gender: 'male'}
]

for(let user of users) console.log('array is iterables :', user)

// String is also iterables

let myName = 'Mustafa Ibrahemi Bajwa'
for(let char of myName) console.log('each character of myName :', char);

const numbers = new Array(38).fill(121314,10, 21)
console.log(numbers);
for(let num of numbers) console.log('numbers :', num);

const [{address:myAddress}, ...rest] = users
console.log('what is in myAddress :', myAddress)
/**
 * Checking is Object in our case myAddress is iterable ?
 * we'll use for...of loop
 * = 
 */
// for(let detail of myAddress) console.log('what is in detaile :', detail);

/**
 * showing error myAddress is not iterable
 */


let {house} = myAddress
console.log('what is inside house :', house);

console.log('what is in ...rest', rest);

console.log('***==================================***');
console.log('Start of Array Like Object');

console.log('***==================================***');
console.log('array like start has length property and has indexj');

let [{name:name1,address:{road:{k2:bigVlaue}}}, , , , , , {name}] = users
console.log('what is inside road :', bigVlaue);
console.log('what is inside the name :', name1);

console.log('bigValue lengt is :', bigVlaue.length);
console.log('what is at index 0 :', bigVlaue[0])





console.log('***==================================***');
console.log('End of Array Like Object');

console.log('***==================================***');





