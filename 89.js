'use strict'
/**
 * Classes static methods and properties 
 */

class Person{
    // Each Person Data
    constructor(id, fName, lName, email, age, gender, address){
        this._id = id
        this._fName = fName
        this._lName = lName
        this._email = email
        this._age = age
        this._gender = gender
        this._address = address
    }

    static desc = 'static property'
    

    // Each Person can Perform Actions/ Methods on his Data
    get info(){
        return `${this._id} ${this._fName} ${this._lName} email is ${this._email} and age is ${this._age} years old and live in ${this._address}`
    }
    static classInfo(){
        return 'static classInfo method'
    }

}

console.log(Person.desc)
console.log()
console.log(Person.classInfo())

