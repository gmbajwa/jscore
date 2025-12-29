'use strict'

console.log('74.js is working ')
console.log()

const user = {
    id: 1,
    age: 8,
    gender: 'male',
    // about: function () {
    //     console.log('insinde about and this pointing to :',this)
    //     console.log(`id ${this.id}, age ${this.age} and gender is ${this.gender}`)
    // }
    
    about: () => {
        console.log(this)
        console.log(`id is ${this.id}, age is ${this.age} and gender is ${this.gender}`)
    }

}


// value of this is evaluated at run time not compile time
// arrow function's this can't not be changed
// arrow function this point to sourrounding or windo object

user.about()


