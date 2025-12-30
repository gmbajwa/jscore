'use strict'

/**
 * Issue 3rd Solution
 * 
 * Remove all method from function which is being used for
 * creating Objects
 * 
 * Create new object and put all methods in that object
 * in our case that objec is userMethods
 * 
 * Put references in the function which is being used
 * for creating objects one by one for eatch method
 * 
 * This approach working fine but create another issue
 * What if we've to create Thousands of method, for this
 * we need to add first in userMothods object all those
 * methods and then need to all references of all those
 * method in the function as well, And 
 * 
 * What if we need to delete a single method of all
 * there may be some chaces, we come up with mess
 * So, avoid this and we need some better approach
 * 
 */

const userMethods = {
    // following are original objects
    about(){
        return `id is ${this.id} full name is ${this.fName} ${this.lName} ${this.cast} age is ${this.age} and live at ${this.address}`
    },
    is18 () { return this.age > 18},
    sing () { return 'la la la la la la la'}
}

function createUsers(id, fName, lName, cast, gender, age, address) {

    const user = {}

    user.id = id,
    user.fName = fName,
    user.cast = cast,
    user.lName = lName,
    user.gender = gender,
    user.age = age,
    user.address = address,
    user.about = userMethods.about, // using only address of the original function
    user.is18 = userMethods.is18,
    user.sing = userMethods.sing
    
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

/**
 * Checking is methods are working in this approach
 */
console.log('user 1 about', user1.about())
console.log('user 1 is youn?', user1.is18())
console.log('user 1 singing a song :', user1.sing())
console.log()
console.log('about user 2:', user2.about())
console.log('user 2 is young ?', user2.is18())
console.log('user 2 is singing a song :', user2.sing())
console.log()
console.log('about user 3: ', user3.about())
console.log('Is User 3 is youn? ', user3.is18())
console.log('User 3 is singing a song:', user3.sing())
console.log()