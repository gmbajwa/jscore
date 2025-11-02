'use strict'
/**
 * Object : Accessing, Adding, Modifying, Deleting Properties
 * by using Dot Notation and Bracket Notation
 */
console.log(`/**
 * Object : Accessing, Adding, Modifying, Deleting Properties
 * by using Dot Notation and Bracket Notation
 */`)
console.log(`
    
    
`)
    
/**
 * Start Coding From Here
 */
console.log("")
const config = {
    host: 'localhost',
    "port number": 8080,
    database: 'blogs'
};

// Accessing Properties
console.log(`Accessing config.host:`, config.host); // Dot Notation
console.log(`Accessing config['port number']:`, config['port number']); // Bracket Notation

// Adding Properties
config.username = 'admin'; // Dot Notation
config['password'] = '12345'; // Bracket Notation
console.log(`After adding username and password:`, config);

// Modifying Properties
config['port number'] = 3000; // Dot Notation
config['database'] = 'users'; // Bracket Notation
console.log(`After modifying port number and database:`,config);

// Deleting Properties
delete config.username; // Dot Notation
delete config['password']; // Bracket Notation
console.log(`After deleting username and password:`, config);   
console.log("")

// Computed Property Names
const propName = 'email';
config[propName] = 'user@example.com';
console.log(`After adding computed property email:`, config);

// Checking Property Existence
console.log(`Does config have 'host'?`, 'host' in config); // true
console.log(`Does config have 'username'?`, 'username' in config); // false

// Iterating Over Properties
console.log(`Iterating over config properties:`);
for (const key in config) {
    console.log(`${key}: ${config[key]}`);
}

/**
 * Summary:
 * - Access properties using dot and bracket notation.
 * - Add, modify, and delete properties dynamically.
 * - Use computed property names for dynamic keys.
 * - Check for property existence with the 'in' operator.
 * - Iterate over object properties using a for...in loop.
 * 
 */

console.log("")




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