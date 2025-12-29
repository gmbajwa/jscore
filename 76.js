'use strict'

const user = {
    id: 1,
    fName: 'ghulam',
    lName: 'mustafa Ibrahemi',
    cast: 'bajwa',
    gender: 'male',
    age: 18,
    address: 'e-214/3 gulistan colony amer sidhu lahore',
    about(){
        return `id: ${this.id}, full name ${this.fName} ${this.lName} cast ${this.cast} gender is ${this.gender} ${this.age} years old and live at ${this.address}`
    },
    is18(){
        if(this.age > 18){
            return true
        }else{
            return false
        }
    }
}


// what if we need to create million of user

const user2 = {
    id: 2,
    fName: 'tabbassam',
    lName: 'mehnaz',
    cast: 'rajpoot',
    gender: 'female',
    age: 35,
    address: 'e-214/3 gulistan colony amer sidhu lahore',
    about(){
        return `id: ${this.id}, full name ${this.fName} ${this.lName} cast ${this.cast} gender is ${this.gender} ${this.age} years old and live at ${this.address}`
    },
    is18(){
        if(this.age > 18){
            return true
        }else{
            return false
        }
    }
}


const userInfo = user.about()
console.log(`User info :`,userInfo)
console.log()
const isYang = user.is18()
console.log(`Is uers is yang?`,isYang)
console.log()
const user2Info = user2.about()
console.log(`User info: `, user2Info)
console.log()
const isYang2 = user2.is18()
console.log()
console.log(`Is user is yang?`, isYang2)
console.log()
