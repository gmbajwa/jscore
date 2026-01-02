'use strict'
/**
 * Classes in JavaScript
 * Class
 * constructor
 * new
 * 
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

const animal1 = new Animals(1, 'animal1', 1, 'meat')
console.log('animal1 ->', animal1)
console.log('animal info is ->', animal1.animal())
console.log(animal1.eating())
console.log('is animal1 cute ->', animal1.isCute())
const animal2 = new Animals(2, 'animal2', 5, 'grass')
console.log('animal2 ->', animal2)
console.log('animal info is ->', animal2.animal())
console.log(animal2.eating())
console.log('is animal2 cute ->', animal2.isCute())