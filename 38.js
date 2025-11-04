'use strict'
/**
 * 
 */
console.log(`/**
 * 
 */`)
console.log(`
    
    
`)
    
/**
 * Start Coding From Here
 */
console.log();
const humanSpecies = {
    name: "Homo sapiens",
    population: 7800000000,
    isEndangered: false
}
console.log(`Species: ${humanSpecies.name}`);
console.log(`Population: ${humanSpecies.population}`);
console.log(`Is Endangered: ${humanSpecies.isEndangered}`);

console.log();

const aiModel = {
    name: "GPT-3",
    version: "3.5",
    isTrained: true
}

console.log(`Name: ${aiModel.name}`);
console.log(`Version: ${aiModel.version}`);
console.log(`Is Trained: ${aiModel.isTrained}`);

console.log();

console.log(`aiModel keys: ${Object.keys(aiModel).join(", ")}`);
console.log(`aiModel values: ${Object.values(aiModel).join(", ")}`);
console.log(`aiModel entries: ${Object.entries(aiModel)}`);

console.log();

for (const [key, value] of Object.entries(aiModel)) {
    console.log(`Key: ${key}, Value: ${value}`);
}

for(let key of Object.keys(aiModel)) {
    console.log(`Key: ${key}`);
}

for(let value of Object.values(aiModel)) {
    console.log(`Value: ${value}`);
}

console.log(`Computed Property Loop:`);
let compProp = "";for (compProp in aiModel) {
    console.log(`Key: ${compProp}, Value: ${aiModel[compProp]}`);
}

for(let dynamicProp in humanSpecies) {
    console.log(`Key: ${dynamicProp}, Value: ${humanSpecies[dynamicProp]}`);
}

let email = "example@example.com";
let dynamicKey = "email";
const user = {
    [dynamicKey]: email
};
console.log(user);

console.log();

console.log();
const imgAttributes = {
    src: "image.png",
    alt: "An example image",
    width: 600,
    height: 400
};
console.log(`Image Source: ${imgAttributes.src}`);
console.log(`Image Alt Text: ${imgAttributes.alt}`);
console.log(`Image Width: ${imgAttributes.width}`);
console.log(`Image Height: ${imgAttributes.height}`);
// using brackest notation
console.log();
console.log(`Image Source: ${imgAttributes["src"]}`);
console.log(`Image Alt Text: ${imgAttributes["alt"]}`);
console.log(`Image Width: ${imgAttributes["width"]}`);
console.log(`Image Height: ${imgAttributes["height"]}`);

console.log();
// iterating over imgAttributes object using for...in loop
for (let attr in imgAttributes) {
    console.log(`Attribute: ${attr}, Value: ${imgAttributes[attr]}`);
}
console.log();

/**
 * Summary
 * 
 * 1- Object is a collection of related data and/or functionality
 * 
 * 2- Objects are defined using curly braces {} this call object literal syntax
 * 
 * 3- Objects contain key-value pairs
 * 
 * 4- Access object properties using dot notation or bracket notation
 * 
 * 5- Use Object.keys(), Object.values(), and Object.entries() to get keys, values, and entries of an object
 * 
 * 6- Iterate over objects using for...in loop or for...of loop with Object methods
 * 
 * 7- Computed property names allow dynamic property keys in object literals
 * 
 * 8- Objects can represent real-world entities with multiple attributes
 * 
 * 9- Practice creating and manipulating objects to understand their structure and usage
 * 
 * 10- Objects are fundamental in JavaScript for organizing and managing data
 * 
 * 11- Understanding objects is crucial for mastering JavaScript
 * 
 * 12- Objects enable complex data structures and interactions in applications
 * 
 * 13- Mastery of objects is essential for effective JavaScript programming
 * 
 * 14- Computed vlalues can be achieved by simpley assigning a variable
 * 
 * 15- Objects can be iterated using different loops and methods
 * 
 * 16- Objects are versatile and widely used in JavaScript development
 * 
 * 17- Objects can be nested to create complex data structures
 * 
 * 18- Objects can have methods (functions) as properties to define behavior
 * 
 * 19- Understanding object prototypes and inheritance is important for advanced JavaScript
 * 
 * 20- Objects are a key component of JavaScript's dynamic and flexible nature
 */
console.log();

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