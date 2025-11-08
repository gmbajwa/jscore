'use strict'
/**
 * Param  destructring 
 * very greatly used in React.js 
 */

// Start Coding here
const person = {
    id: 1,
    name: 'mustafa',
    age: 38,
    gender: 'male'
}

// create the function which will accept the person object as a Parameter
const persondEtail = detail => {
    console.log('what is detail :', detail)
    console.log()
    let id = detail.id
    let name = detail.name
    let age = detail.age
    let gender = detail.gender
    console.log('person id is : id', id)
    console.log('person name is :', name)
    console.log('person age is :', age)
    console.log('person gender is :', gender)
}

persondEtail(person)
console.log()
const employee = {
    id :1,
    name: 'tabbasssam',
    designation: 'home manistor',
    gender: 'female',
    age: 35
}

const employeedTaile = ({id, name, designation, gender, age}) => {
    console.log('employee id is :', id)
    console.log('employee name is :', name)
    console.log('employee designation is :', designation)
    console.log('employee gender is :', gender)
    console.log('employee age is :', age)
}
employeedTaile(employee)
console.log()

/**
 * Summary -
 * we can destruction receiving object in parameters
 */

console.log(`Summary -
1- we can destruction receiving object in parameters
`)