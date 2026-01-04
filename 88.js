'use strict'

/**
 * getter and setter in JS
 * backing property when setting and getting values
 * get keyword
 * set keyword  
 * 
 */

class Person{
    constructor(id, fName, lName, age, gender, address, email){
        this.id = id
        this._fName = fName
        this._lName = lName
        this._age = age
        this._gender = gender
        this._address = address
        this._email = email
    }
    get info(){
        return `${this.id}- full name is ${this._fName} ${this._lName} age is ${this._age} year gender is ${this._gender} email is ${this._email} and address is ${this._address}`
    }
    get fullName(){
        return `${this._fName} ${this._lName }`
    }
    get isYanger(){
        return this._age < 18
    }
    get emailInfo(){
        return this._email
    }
    get genderInfo(){
        return this._gender
    }
    get ageInfo(){
        return this._age
    }
    get addressInfo(){
        return this._address
    }
    set age(newAge){
        this._age = newAge
    }
    set email(newEmail){
        this._email = newEmail
    }
    set address(newAddress){
        this._address = newAddress
    }
    set gender(newGender){
        this._gender = newGender
    }
    set fullName(name){
        const [part1, part2] = name.split(' ')
        this._fName = part1
        this._lName = part2
    }   
    
}
const ahmed = new Person(1, 'Muhammad', 'Osaid', 1, 'male', 'lahore cannt', 'noemail@gmail.com')
console.log('person ->', ahmed)
console.log()
console.log('>>>_____<<<')
console.log()
console.log(ahmed.fullName, 'detaile is', ahmed.info)
console.log()
console.log(ahmed.fullName, ahmed.fullName)
console.log()
console.log('is younger ->', ahmed.isYanger)
console.log()
console.log('email info ->', ahmed.emailInfo)
console.log()
console.log('gender info ->', ahmed.genderInfo)
console.log()
console.log('age info ->', ahmed.ageInfo)
console.log()
console.log('address info ->', ahmed.addressInfo)
console.log()
    
ahmed.age = 20
ahmed.email = 'ahmed@gmail.com'
console.log('after updating age and email')
console.log()
console.log('is younger ->', ahmed.isYanger)
console.log()
console.log('email info ->', ahmed.emailInfo)
console.log()
console.log('age info ->', ahmed.ageInfo)
console.log()
console.log('address info ->', ahmed.addressInfo)
console.log()

ahmed.age = 20
ahmed.email = 'ahmed@gmail.com'
console.log('after updating age and email')
console.log()
console.log('is younger ->', ahmed.isYanger)
console.log()
console.log('email info ->', ahmed.emailInfo)
console.log()
console.log('age info ->', ahmed.ageInfo)
console.log()
console.log('person ->', ahmed)
console.log()
console.log('>>>_____<<<')
console.log()

ahmed.fullName = 'Ali Khan'
console.log('after updating full name')
console.log()
console.log(ahmed.fullName, 'detaile is', ahmed.info)
console.log()
console.log('person ->', ahmed)
console.log()
console.log('>>>_____<<<')
console.log()