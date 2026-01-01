'use strict'

// const user = {
//     id: 1,
//     fName: 'user',
//     lName: 'one',
//     email: 'email1@gmail.com',
//     age: 33,
//     gender: 'male',
//     address: 'e-214/3 gulistan colony amer sidhu lahore',
//     about: function(){
//         return `${this.id} user full name ${this.fName} ${this.lName} email is ${this.email} age is ${this.age} gender is ${this.gender} and live at ${this.address}`
//     },
//     is18: function() {return this.age > 18},
//     singing: function(){return `lala la la la la`}
// }
// console.log(user.about())
// console.log(`Is user is young?`,user.is18())
// console.log(`user 1 can singing?`, user.singing())
// console.log()
// /**
//  * OOP VERSION 1: 
//  */
// const userV1 = {
//     id: 1,
//     fName: 'user',
//     lName: 'one',
//     email: 'email1@gmail.com',
//     age: 33,
//     gender: 'male',
//     address: 'e-214/3 gulistan colony amer sidhu lahore',
//     about(){
//         return `${this.id} user full name ${this.fName} ${this.lName} email is ${this.email} age is ${this.age} gender is ${this.gender} and live at ${this.address}`
//     },
//     is18() {return this.age > 18},
//     singing(){return `lala la la la la`}
// }
// console.log(`
// /**
//  * OOP VERSION 1: 
//  */
//     `)
// console.log(userV1.about())
// console.log(`Is user is young?`,userV1.is18())
// console.log(`user 1 can singing?`, userV1.singing())
// console.log()

// /**
//  * OOP VERSION 2:
//  */

// function createUser(id, fName, lName, email, age, gender, address){
    
//     const user = {}
    
//     user.id = id
//     user.fName = fName
//     user.lName = lName
//     user.email = email
//     user.age = age
//     user.gender = gender
//     user.address = address

//     user.about = function(){
//         return `${this.id} user full name ${this.fName} ${this.lName} email is ${this.email} age is ${this.age} gender is ${this.gender} and live at ${this.address}`
//     }
//     user.is18 = function(){
//         return this.age > 18
//     }
//     user.singing = function(){
//         return `lala la la la la`
//     }

//     return user

// }

// console.log(`
// /**
//  * OOP VERSION 2:
//  */
//     `)
// const userV2 = createUser(2, 'first name', 'last name', 'email@gmail.com', 45, 'femlae', 'amer sidhu lahore' )
// console.log(`About User V2: `,userV2.about())
// console.log(`Is user is young?`,userV2.is18())
// console.log(`Can you sing a song? `,userV2.singing())


/**
 * OOP VERSION 3:
 */

// const userMethods = {
//     about(){
//         return `${this.id} user full name ${this.fName} ${this.lName} email is ${this.email} age is ${this.age} gender is ${this.gender} and live at ${this.address}`
//     },
//     is18(){
//         return this.age > 18
//     },
//     singing(){
//         return `lala la la la la`
//     }
// }

// function createUser(id, fName, lName, email, age, gender, address){
    
//     const user = {}
    
//     user.id = id
//     user.fName = fName
//     user.lName = lName
//     user.email = email
//     user.age = age
//     user.gender = gender
//     user.address = address

//     user.about = userMethods.about
//     user.is18 = userMethods.is18
//     user.singing = userMethods.singing

//     return user

// }

// console.log(`
// /**
//  * OOP VERSION 3:
//  */
//     `)
// const userV3 = createUser(3, 'first name', 'last name', 'email@gmail.com', 45, 'femlae', 'amer sidhu lahore' )
// console.log(`About User V3: `,userV3.about())
// console.log(`Is user is young?`,userV3.is18())
// console.log(`Can you sing a song? `,userV3.singing())

// /**
//  * OOP VERSION 4:
//  */

// const userMethods = {
//     about(){
//         return `${this.id} user full name ${this.fName} ${this.lName} email is ${this.email} age is ${this.age} gender is ${this.gender} and live at ${this.address}`
//     },
//     is18(){
//         return this.age > 18
//     },
//     singing(){
//         return `lala la la la la`
//     }
// }

// function createUser(id, fName, lName, email, age, gender, address){
    
//     const user = Object.create(userMethods)
    
//     user.id = id
//     user.fName = fName
//     user.lName = lName
//     user.email = email
//     user.age = age
//     user.gender = gender
//     user.address = address

//     return user
// }

// console.log(`

// /**
//  * OOP VERSION 4:
//  */

//     `)
// const userV4 = createUser(4, 'first name', 'last name', 'email@gmail.com', 45, 'femlae', 'amer sidhu lahore' )
// console.log(`About User V4: `,userV4.about())
// console.log(`Is user is young?`,userV4.is18())
// console.log(`Can you sing a song? `,userV4.singing())


/**
 * OOP VERSION 5: new keyword
 */


    createUser.prototype.about = function(){
        return `${this.id} user full name ${this.fName} ${this.lName} email is ${this.email} age is ${this.age} gender is ${this.gender} and live at ${this.address}`
    }
    createUser.prototype.is18= function(){
        return this.age > 18
    }
    createUser.prototype.singing= function(){
        return `lala la la la la`
    }


function createUser(id, fName, lName, email, age, gender, address){
    
    const user = Object.create(createUser.prototype)
    
    user.id = id
    user.fName = fName
    user.lName = lName
    user.email = email
    user.age = age
    user.gender = gender
    user.address = address

    return user
}

console.log(`

/**
 * OOP VERSION 5:
 */

    `)
const userV5 = createUser(5, 'first name', 'last name', 'email@gmail.com', 45, 'femlae', 'amer sidhu lahore' )
console.log(`About User V5: `,userV5.about())
console.log(`Is user is young?`,userV5.is18())
console.log(`Can you sing a song? `,userV5.singing())


/**
 * OOP VERSION 6:
 * Class keyword
 * constructor
 * new keyword
 */
    
class CreateUser{

    constructor(id, fName, lName, email, age, gender, address){
        this.id = id
        this.fName = fName
        this.lName = lName
        this.email = email
        this.age = age
        this.gender = gender
        this.address = address
    }

    about(){
        return `${this.id} user full name ${this.fName} ${this.lName} email is ${this.email} age is ${this.age} gender is ${this.gender} and live at ${this.address}`
    }

    is18(){
        return this.age > 18
    }

    singing(){
        return `lala la la la la`
    }
}

console.log(`

/**
 * OOP VERSION 6:
 */

    `)
const userV6 = new CreateUser(6, 'first name', 'last name', 'email@gmail.com', 45, 'femlae', 'amer sidhu lahore' )
console.log(`About User V6: `,userV6.about())
console.log(`Is user is young?`,userV6.is18())
console.log(`Can you sing a song? `,userV6.singing())