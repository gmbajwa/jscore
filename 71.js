'use strict'
/**
 * this keyword in js
 * 
 * value of this will be defined at runtine not at compile tine
 * this will only point to the caller
 *
 */
console.log('---> this keyword and object methods in js <---')

function aboutRef() {
    console.log(`my name is ${this.name} and i'm ${this.age} years old.`)
}

const person = {
    id: 0, 
    name: 'Mi BAJWA',
    age: 382,
    about: aboutRef
}

const person1 = {
    id: 2, 
    name: 'person1',
    age: 1,
    about: aboutRef
}

const person2 = {
    id: 3, 
    name: 'person2',
    age: 3,
    about: aboutRef
}

const person3 = {
    id: 4, 
    name: 'person3',
    age: 4,
    about: aboutRef
}

person.about()
person1.about()
person2.about()
person3.about()


