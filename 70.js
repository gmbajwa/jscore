/**
 * Object cloning
 * 
 */

const user = {
    id: 1,
    uName: 'Mi',
    gender: 'M'
}

const user2 = user

console.log(user)
console.log()
// adding property in user
user.age = 38
console.log(user)
console.log()

console.log(user2)
user2.alive = true
console.log('***__^__***')
console.log(user)
console.log(user2)

// when we assing one obj to another and any mutation 
// will effect eatchother
/**
 * then cloning is done by
 * 1. spread operator
 * 2. Object.assign({}, cloned object)
 */

const user3 = {...user}
console.log('***___^___***')
console.log('user object')
console.log(user)
console.log(user3)
console.log('mutate only user object')
user.education = 'Master'
console.log('user object only :', user)
console.log('user 3 object')
console.log(user3)
// user3 mutation only
user3.hobbies = ['critical thinking', 'coding', 'social being']
console.log('only user after mutation of user3', user)
console.log('only user after mutation of user3', user3)

/**
 * Optioinal Chaining
 */

console.log('what is optional chaining.')
console.log(user3?.hobbies?.[2])