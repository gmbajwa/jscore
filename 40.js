"use strict"
/**
 * Destructring in Objects
 * 
 */

 // spread operator

const arr = [1, 2, 3]
const arr2 = [4, 5,6]

const combinedArr = [...arr, ...arr2, 45, 56, 77]

console.log(`Combined Array : [${combinedArr}]`)

//
// Spread Operator in Object Reference Type
//

const config = {
  apiKey: '12345',
  apiSecret: '67890',
  region: 'us-west-1'
}

const updatedConfig = {
  ...config,
  region: 'eu-central-1', // Overriding region
  timeout: 5000, // Adding new property
  timeout: 9000 // Adding new property
}

console.log('Original Config:', config)
console.log('Updated Config:', updatedConfig)

//
// Spread Operator in Function Arguments
//

function connectToService({ apiKey, apiSecret, region, timeout = 3000 }) {
  console.log(`Connecting to service with:
    API Key: ${apiKey}
    API Secret: ${apiSecret}
    Region: ${region}
    Timeout: ${timeout}ms`)
}

connectToService(updatedConfig)

//
// Merging Multiple Objects
//

const defaultSettings = {
  theme: 'light',
  notifications: true,
  autoSave: false
}

const userSettings = {
  theme: 'dark',
  autoSave: true
}

const finalSettings = {
  ...defaultSettings,
  ...userSettings
}

console.log('Final Settings:', finalSettings)

//
// Cloning Objects
//

const originalObject = {
  name: 'John Doe',
  age: 30,
  address: {
    city: 'New York',
    country: 'USA'
  }
}

const clonedObject = { ...originalObject }

// Modifying the cloned object
clonedObject.name = 'Jane Doe'
clonedObject.address.city = 'Los Angeles'

console.log('Original Object:', originalObject)
console.log('Cloned Object:', clonedObject)

//
// Note: Spread operator creates a shallow copy. Nested objects are still referenced.
//  To create a deep copy, consider using libraries like lodash or structuredClone in modern environments.
//      
//
//
const address = {
  street: '123 Main St',
  city: 'Anytown',
  country: 'USA'
}

const person = {
  name: 'Alice',
  age: 28,
  ...address
}

console.log('Person Object:', person) // Output: { name: 'Alice', age: 28, street: '123 Main St', city: 'Anytown', country: 'USA' }

const mixAddressPerson = {
  ...person,
  city: 'Othertown',// Overriding city
  ..."string is iterable",
  ..."12345",
  ...['extra1', 'extra2'], // Spreading an array
  ...{ additionalInfo: 'Some info' }, // Adding new property
  ...address // Spreading address again
}

console.log('Mix Address Person Object:', mixAddressPerson) // Output: { name: 'Alice', age: 28, street: '123 Main St', city: 'Othertown', country: 'USA' } 
/**
 * Summary:
 * 
 * The spread operator (...) in JavaScript allows you to expand iterable objects (like arrays and strings) and object properties into individual elements or key-value pairs. It is commonly used for:
 * 
 * 1. Merging Arrays: Combining multiple arrays into one.
 * 2. Merging Objects: Combining multiple objects into one, with later properties overriding earlier ones.
 * 3. Function Arguments: Passing object properties as individual arguments to functions.
 * 4. Cloning Objects: Creating shallow copies of objects.
 * 
 * Note that the spread operator creates shallow copies, so nested objects remain referenced. For deep cloning, additional methods are required.
 */
