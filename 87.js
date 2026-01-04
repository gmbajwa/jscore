'use strict'
/**
 * Class, constructor, this, new
 * extends
 * super
 * empty sub class
 * another sub class with one property and one new mthod
 * how to use super keyword
 */

class Animals{
    // Data
    constructor(id, fName, lName, age, food){
        
        this.id = id
        this.fName = fName
        this.lName = lName
        this.age = age
        this.food = food

    }

    // Methods on Data
    animalInfo(){
        return `animal id is ${this.id} name is ${this.fName} ${this.lName} age ${this.age} and food is ${this.food}`
    }
    animalName(){
        return `${this.fName} ${this.lName}`
    }
    isCute(){
        return this.age < 2
    }

    eating(){
        return this.food
    }

}

const animal1 = new Animals(1, 'tomy', 'dog', 3, 'meat')
console.log('animal1 is ->', animal1)
console.log('>>>_____<<<')
console.log(animal1.animalInfo())
console.log()
console.log('is animal is cute ->', animal1.isCute())
console.log()
console.log(animal1.animalName(), 'is eating ', animal1.eating())

class Cat extends Animals{
    
}

const cat1 = new Cat(1, 'manoo', 'billi', 1, 'milk')
console.log(cat1)
console.log('>>>_____<<<')
console.log(cat1.animalInfo())
console.log()
console.log('is animal is cute ->', cat1.isCute())
console.log()
console.log(cat1.animalName(), 'is eating ', cat1.eating())


const cat2 = new Cat(2, 'russia', 'billi', 3, 'chicken neck')
console.log(cat2)
console.log('>>>_____<<<')
console.log(cat2.animalInfo())
console.log()
console.log('is animal is cute ->', cat2.isCute())
console.log()
console.log(cat2.animalName(), 'is eating ', cat2.eating())


class Lion extends Animals{
    // Data
    constructor(id, fName, lName, age, food, breed){
        super(id, fName, lName, age, food)
        
        this.breed = breed
    }
    // Methods on Data
    animalType(){
        return `${this.breed}`
    }
    
}

const lion = new Lion(1, 'red', 'lione', 4, 'meat', 'breed is lion')
console.log(lion)
console.log()
console.log('animal type is',lion.animalType())
console.log()
console.log(lion.animalInfo())
console.log(lion.animalName())
console.log()
console.log(lion.isCute())
console.log()
console.log(lion.eating())

