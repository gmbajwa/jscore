'use strict'
/**
 * Objects data type in JS
 */
console.log(`/**
 * Objects data type in JS
 */`)
console.log(`
    
    
`)
    
/**
 * Start Coding From Here
 */
const person = {
    name: "John",
    age: 30,
    city: "New York"
};

console.log(`Person object type:`, typeof person); // Output: object

console.log(`Person object properties Object.keys(person):`, Object.keys(person)); // Output: ["name", "age", "city"]
console.log(`Person object values Object.values(person):`, Object.values(person)); // Output: ["John", 30, "New York"]
console.log(`Person object entries Object.entries(person):`, Object.entries(person)); // Output: [["name", "John"], ["age", 30], ["city", "New York"]]
console.log(`Person object JSON stringified JSON.stringify(person):`, JSON.stringify(person)); // Output: '{"name":"John","age":30,"city":"New York"}'

// Accessing object keys/ properties in contrast of Arrays indexes

console.log(`Accessing person.name:`, person.name); // Output: John
console.log(`Accessing person['age']:`, person['age']); // Output: 30
console.log(`Accessing person.city:`, person.city); // Output: New York

// Addming new property to object
person.country = "USA";
console.log(`After adding country property person.country:`, person.country); // Output: USA

// Modifying existing property
person.age = 31;
console.log(`After modifying age property person.age:`, person.age); // Output: 31

// Deleting a property
delete person.city;
console.log(`After deleting city property person.city:`, person.city); // Output: undefined

console.log(`After deleting city property Object.keys(person):`, Object.keys(person)); // Output: ["name", "age", "country"]
console.log(`After deleting city property Object.values(person):`, Object.values(person)); // Output: ["John", 31, "USA"]
console.log(`After deleting city property Object.entries(person):`, Object.entries(person)); // Output: [["name", "John"], ["age", 31], ["country", "USA"]]
console.log(`After deleting city property JSON.stringify(person):`, JSON.stringify(person)); // Output: '{"name":"John","age":31,"country":"USA"}'

console.log(`Accessing person['age']:`, person['age']); // Output: 30
console.log(`Accessing person.city:`, person.city); // Output: New York
console.log(`Accessing person.country:`, person.country); // Output: USA
console.log(``);
const doctor = {
    name: "Smith",
    specialization: "Cardiology",
    experience: 10
};

console.log(`Doctor object type:`, typeof doctor); // Output: object

console.log(`Doctor object properties Object.keys(doctor):`, Object.keys(doctor)); // Output: ["name", "specialization", "experience"]
console.log(`Doctor object values Object.values(doctor):`, Object.values(doctor)); // Output: ["Smith", "Cardiology", 10]
console.log(`Doctor object entries Object.entries(doctor):`, Object.entries(doctor)); // Output: [["name", "Smith"], ["specialization", "Cardiology"], ["experience", 10]]
console.log(`Doctor object JSON stringified JSON.stringify(doctor):`, JSON.stringify(doctor)); // Output: '{"name":"Smith","specialization":"Cardiology","experience":10}'

// Accessing object keys/ properties in contrast of Arrays indexes

console.log(`Accessing doctor.name:`, doctor.name); // Output: Smith
console.log(`Accessing doctor['specialization']:`, doctor['specialization']); // Output: Cardiology
console.log(`Accessing doctor.experience:`, doctor.experience); // Output: 10

// Adding new property to object
doctor.hospital = "City Hospital";
console.log(`After adding hospital property doctor.hospital:`, doctor.hospital); // Output: City Hospital

// Modifying existing property
doctor.experience = 12;
console.log(`After modifying experience property doctor.experience:`, doctor.experience); // Output: 12

// Deleting a property
delete doctor.specialization;
console.log(`After deleting specialization property doctor.specialization:`, doctor.specialization); // Output: undefined
console.log(`After deleting specialization property Object.keys(doctor):`, Object.keys(doctor)); // Output: ["name", "experience", "hospital"]
console.log(`After deleting specialization property Object.values(doctor):`, Object.values(doctor)); // Output: ["Smith", 12, "City Hospital"]
console.log(`After deleting specialization property Object.entries(doctor):`, Object.entries(doctor)); // Output: [["name", "Smith"], ["experience", 12], ["hospital", "City Hospital"]]
console.log(`After deleting specialization property JSON.stringify(doctor):`, JSON.stringify(doctor)); // Output: '{"name":"Smith","experience":12,"hospital":"City Hospital"}

console.log(`Accessing doctor['experience']:`, doctor['experience']); // Output: 10
console.log(`Accessing doctor.specialization:`, doctor.specialization); // Output: Cardiology
console.log(`Accessing doctor.hospital:`, doctor.hospital); // Output: City Hospital
console.log(``);


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