'use strict'
/**
 * For Of Loop in Array Data Type
 * value of Values (vov)
 */

console.log(`
For Of Loop in Array Data Type
=============================

    const fruits = ['Apple', 'Banana', 'Mango', 'Orange', 'Pineapple'];
    for (const fruit of fruits) {
        console.log(fruit);
    }

    // Use Case, create a new array of fruites with Uppercase

    const fruitsNames = [];
    for (const fruit of fruits) {
        fruitsNames.push(fruit.toUpperCase());
    }

    console.log(fruitsNames);

    /**
     * Summary
     *
     * 1- For Of loop is used to iterate over array data type
     * 2- We can directly access the elements of the array
     * without using the counter variable
     * 3- It is more readable and easier to use than while loop
     */

For Of Loop in Array Data Type
=============================
    
`)    
/**
 * Start Coding From Here
 */

    const fruits = ['Apple', 'Banana', 'Mango', 'Orange', 'Pineapple'];
    for (const fruit of fruits) {
        console.log(fruit);
    }

    // Use Case, create a new array of fruites with Uppercase

    const fruitsNames = [];
    for (const fruit of fruits) {
        fruitsNames.push(fruit.toUpperCase());
    }

    console.log(fruitsNames);

    const animals = ['Dog', 'Cat', 'Elephant', 'Tiger', 'Lion'];
    for (const animal of animals) {
        console.log(animal);
    }

    // Use Case, create a new array of animals with Lowercase

    const animalNames = [];
    for (const animal of animals) {
        animalNames.push(animal.toLowerCase());
    }

    console.log(animalNames);

    const metals = ['Gold', 'Silver', 'Iron', 'Copper', 'Aluminium'];
    for (const metal of metals) {
        console.log(metal);
    }

    // Use Case, create a new array of metals with Uppercase

    const metalNames = [];
    for (const metal of metals) {
        metalNames.push(metal.toUpperCase());
    }

    console.log(metalNames);

    // can you list any others use cases of For Of Loop in Array Data Type?
   const numbers = [1, 2, 3, 4, 5];
   for (const number of numbers) {
       console.log(number);
   }

   // Use Case, create a new array of numbers with Squared values

   const squaredNumbers = [];
   for (const number of numbers) {
       squaredNumbers.push(number * number);
   }

   console.log(squaredNumbers); 

   const planetsDistances = [57.9, 108.2, 149.6, 227.9, 778.3]; // in million km
   for (const distance of planetsDistances) {
       console.log(`Distance: ${distance} million km`);
   }
    // Use Case, create a new array of distances in km

   const distancesInKm = [];
   for (const distance of planetsDistances) {
       distancesInKm.push(distance * 1000);
   }

   console.log(distancesInKm);
   // use case of for of loop in string data type
   const greeting = "Mustafa Ibrahemi";
   for (const char of greeting) {
       console.log(char);
   }

   // Use Case, create a new array of characters in lowercase

   const lowerCaseChars = [];
   for (const char of greeting) {
       lowerCaseChars.push(char.toLowerCase());
   }

   console.log(lowerCaseChars);
    /**
     * Summary
     * 0- Value of Values
     * 1- For Of loop is used to iterate over array data type
     * 2- We can directly access the elements of the array
     * without using the counter variable
     * 3- It is more readable and easier to use than while loop
     */

    
    

console.log(`
    
    
`)    
/**
 * Errors In JS
 * 
 * 1- type of 'NON' is an Object
 * 
 * 2- 'use stict' mode is not working if we use it
 * in the middle or in the bottom of file
 * with out keyword and 'use strict' mode if we
 * 
 * 3- declare any veriable with out any keyword
 * its not possible  
 */

console.log(`/**
* Errors In JS
* 
* 1- type of 'NON' is an Object
* 
* 2- 'use stict' mode is not working if we use it
* in the middle or in the bottom of file
* with out keyword and 'use strict' mode if we
* 
* 3- declare any veriable with out any keyword
* its not possible  
*/`);