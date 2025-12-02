/**
 * Map data structure 
 * Once we use curly braces to declarea and define object is called object literal
 * In Object literal keys are all ways in string or symbol
 * map.set() method is used for adding values in map it take key and value
 * map.get() method is used to get any value it take key
 * to access values from map object we can't use dot notaiton like used in object
 * and bracket notation as used in object.
 * map.keys() use to get MapIterator of all keys in a Map
 */

const person = {
    firstName: 'person first name',
    age: 7,
    1: 'one'
}
// accessing object person properties using dot notation
console.log('person first name is :', person.firstName);
console.log('person age is :', person.age);
console.log()
// accessing object properties using bracket notation

console.log('person object properties using bracket notation')
console.log('persona first name is :', person['firstName'])
console.log('person name property is :', person['age'])
console.log()
console.log('check the key type which aparently looking as number')
for(let key in person)console.log(`type of key "${key}" is`, typeof key)
console.log();

/**
 * now lets talk aboue
 * Map data structure store key value pair 
 * 
 */
console.log(`***===================================***`)
console.log('Map :')
console.log()
const testMap = new Map()
console.log('we created a map with name of testMap and that is :', testMap)
testMap.set('key', 'value')
console.log('after adding values uset set method of Map :')
console.log(testMap)
console.log()
console.log('i can set any type of key in Map datastructure')
console.log(`
    1- Number type
    2- String type
    3- Boolean type
    4- Null type
    5- Undefined type
    6- Symbol Type
    7- BigInt Type
    
    8- Array Type
    9- Object Type
    10- Set Type
    11- Map Type
`)
console.log('setting up key of tye Object of testMap:')
console.log()
testMap.set({id: 1, name: 'Mi', age:38, gender: 'male', 'alive': true, 'hobbies':['cricket', 'coding', 'exploring new things', 'learning','practising']}, 1)
console.log(`test map has key of Object litteral type:`)
console.log()
console.log(`testMap has object type key =>:`, testMap)
testMap.set(3, 'number type key')
testMap.set(true, 'key is boolean type')
testMap.set(null, 'key is null type')
testMap.set(undefined, 'key is undefined type')
testMap.set(4432n, 'key is BigInt type')
testMap.set([1,'string', null,undefined, true, false, '', 33n, {id: 1, name: 'Mi'}, [1, 2, 3, 4, 5]], 'key is array type')
console.log(testMap)
console.log()
console.log('how we will access value using any type of key in testMap')
console.log(testMap.get(4432n))
console.log()
console.log(`Print all keys in testMap using map.keys() method =>:`)
console.log(testMap.keys())
console.log('we can use for...of loop on returned mapIterator')
const testMapKeys = testMap.keys()
console.log()
console.log('iterating over testMapKeys Iteratrotor')
for(let key of testMapKeys) console.log(key)
console.log()
for(let key of testMap.keys()) console.log('key in testMap...', key)
console.log()
for(let value of testMap.values())console.log('value in testMap -->', value)
console.log('all entries in testMap =>')
for(let entry of testMap.entries()) console.log(`each entry in testMpa has a type of array: ${Array.isArray(entry)} and entry is [${entry}]`)


console.log('***===================***')

// only test Mp will return named array which contain array of key and its value
for(let entry of testMap)console.log('--->', entry)

// what if we use map keys method
for(let key of testMap.keys())console.log('let key of testMap.keys() ---> which return only key', key)

// what if we use map values() method
for(let value of testMap.values())console.log('testMap.values():',value)

// what if we use map.entries() method
for(let entry of testMap.entries()) console.log('testMap.entries():', entry)

// destructure the map.entries() 
for(let [key, value] of testMap.entries()) console.log('let [key, value] of testMap.entries():', key, value)


// for(let [key, value] of testMap)console.log('--->',key,'--->', value)

for(let whatis of testMap) console.log('whatis :', whatis)