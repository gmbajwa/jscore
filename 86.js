'use strict'
/**
 * Inheritance in JavaScript
 * extends
 * super
 */
class Animals{
    constructor(id, name, age, food){
        this.id = id
        this.name = name
        this.age = age
        this.food = food
   }
   animal(){
    return `Animal id is ${this.id}, name ${this.name}, age ${this.age} and food is ${this.food}`
   }
   eating(){
    return `${this.name} is eating ${this.food}`
   }
   isCute(){return this.age < 3}
}

class Dog extends Animals{
    constructor(id, name, age, food, breed){
        super(id, name, age, food)
        this.breed = breed
    }
    dogInfo(){
        return `${this.name} is of breed ${this.breed}`
    }
}

const dog1 = new Dog(1, 'dog1', 2, 'dog food', 'bulldog')
console.log('dog1 ->', dog1)
console.log('dog1 info ->', dog1.animal())
console.log(dog1.eating())
console.log(dog1.dogInfo())
console.log('is dog1 cute ->', dog1.isCute())

const dog2 = new Dog(2, 'dog2', 5, 'dog food', 'labrador')
console.log('dog2 ->', dog2)
console.log('dog2 info ->', dog2.animal())
console.log(dog2.eating())
console.log(dog2.dogInfo())
console.log('is dog2 cute ->', dog2.isCute())