'use strict'

/**
 * Create function which will perform task for creating 
 * 
 * Objects and return newly created object
 * 
 */

function createUsers(id, fName, lName, cast, gender, age, address) {

    const user = {}

    user.id = id,
    user.fName = fName,
    user.cast = cast,
    user.lName = lName,
    user.gender = gender,
    user.age = age,
    user.address = address,
    user.about = function (){
        return `id is ${this.id} full name is ${this.fName} ${this.lName} ${this.cast} age is ${this.age} and live at ${this.address}`
    },
    user.is18 = function() { return this.age > 18},
    user.sing = function() { return 'la la la la la la la'}

    return user
}

const user1 = createUsers(1, 'ghulam', 'mustafa', 'bajwa', 'male', 3, 'e-214/3 gulistan colony' )
const user2 = createUsers(2, 'user two', 'name part', 'cast', 'female', 31, 'e-214/3 gulistan colony' )
const user3 = createUsers(3, 'user two', 'name part', 'cast', 'female', 31, 'e-214/3 gulistan colony' )
console.log(user1)
console.log()
console.log(user2)
console.log()
console.log(user3)
console.log()