'use strict'
/**
 * Array Destructuring comes in ES6 version of JavaScript
 * it is a special syntex to extract values from array
 * and assign them to variables in a single line of code
 * instead of multiple lines of code.
 */
console.log(`/**
 * Array Destructuring  comes in ES6 version of JavaScript
 * it is a special syntex to extract values from array
 * and assign them to variables in a single line of code
 * instead of multiple lines of code.
 */`)
console.log(`
    
    
`)
    
/**
 * Start Coding From Here
 */

const colors = ['Red', 'Green', 'Blue', 'Yellow', 'Purple'];
const [firstColor, secondColor, ...restColors] = colors;
console.log(`First Color: ${firstColor}`);
console.log(`Second Color: ${secondColor}`);
console.log(`Rest of the Colors: [${restColors}]`);

/**
 * Use Cases
 * 
 * 1- Swapping Variables
 * 2- Function Return Values
 * 3- Ignoring Values
 * 4- Nested Destructuring
 * 5- Default Values
 * 6- Function Parameters
 * 7- Working with Iterables
 * 8- Module Imports
 * 9- Event Handling
 * 10- Data Transformation
 * 11- Configuration Objects
 * 12- API Responses
 * 13- State Management
 * 14- Testing
 * 15- Code Readability
 * 16- Performance Optimization
 * 17- Error Handling
 * 18- Dynamic Assignments
 * 19- Working with Maps and Sets
 * 20- Destructuring in Loops
 * 21- Combining with Other ES6 Features
 * 22- Real-world Applications
 * 23- Practical Examples
 * 24- Advanced Patterns
 * 25- Best Practices
 * 26- Common Pitfalls
 * 27- Performance Considerations
 * 28- Community Resources
 * 29- Further Reading
 * 30- Conclusion
 * 31- Summary
 * 32- Additional Examples
 * 33- Exercises
 * 34- Challenges
 * 35- Projects
 * 36- Tutorials
 * 37- Videos
 * 38- Articles
 * 39- Documentation
 * 40- Forums
 * 41- Blogs
 * 42- Newsletters
 * 43- Podcasts
 * 44- Webinars
 * 45- Conferences
 * 46- Meetups
 * 47- Workshops
 * 48- Courses
 * 49- Certifications
 * 50- Career Opportunities
 * 51- Industry Trends
 * 52- Future of JavaScript
 * 53- Community Contributions
 * 54- Open Source Projects
 * 55- Collaboration
 * 56- Networking
 * 57- Mentorship
 * 58- Learning Paths
 * 59- Skill Development
 * 60- Job Market
 * 61- Salary Insights
 * 62- Freelancing
 * 63- Entrepreneurship
 * 64- Innovation
 * 65- Creativity
 * 66- Problem Solving
 * 67- Critical Thinking
 * 68- Communication Skills
 * 69- Teamwork
 * 70- Leadership
 * 71- Time Management
 * 72- Productivity
 * 73- Work-Life Balance
 * 74- Mental Health
 * 75- Physical Health
 * 76- Hobbies
 * 77- Travel
 * 78- Culture
 * 79- Diversity
 * 80- Inclusion
 * 81- Ethics
 * 82- Social Responsibility
 * 83- Environmental Impact
 * 84- Sustainability
 * 85- Global Issues
 * 86- Technology Trends
 * 87- Innovation in Tech
 * 88- Future Technologies
 * 89- Emerging Markets
 * 90- Economic Impact
 * 91- Political Implications
 * 92- Legal Considerations
 * 93- Regulatory Environment
 * 94- Industry Standards
 * 95- Best Practices in Tech
 * 96- Case Studies
 * 97- Success Stories
 * 98- Lessons Learned
 * 99- Future Directions
 * 100- Final Thoughts 
*/
console.log()
// 1- use case - Swapping Variables
let a = 5;
let b = 10;
console.log(`Before Swapping: a = ${a}, b = ${b}`);
[a, b] = [b, a]; // Swapping values explaine in more details now    
console.log(`After Swapping: a = ${a}, b = ${b}`);
console.log()

// 2- use case - Function Return Values
function getCoordinates() {
    return [25.276987, 55.296249];
}
const [latitude, longitude] = getCoordinates();
console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
console.log()

// 3- use case - Ignoring Values
const rgb = [255, 0, 127];
const [, , blue] = rgb;
console.log(`Blue Component: ${blue}`);
console.log()

// 4- use case - Nested Destructuring
const user = {
    name: 'Alice',
    address: {
        city: 'Wonderland',
        zip: '12345'
    }
};
const { address: { city } } = user;
console.log(`City: ${city}`);
console.log()

// 5- use case - Default Values
const [x = 1, y = 2, z = 3] = [10, 20, 30];
console.log(`x: ${x}, y: ${y}, z: ${z}`);
console.log()

// 6- use case - Function Parameters
function displayColors([primary, secondary]) {
    console.log(`Primary Color: ${primary}, Secondary Color: ${secondary}`);
}
displayColors(['Cyan', 'Magenta']);
console.log()

// 7- use case - Working with Iterables
const set = new Set(['Apple', 'Banana', 'Cherry']);
const [firstFruit, secondFruit] = set;
console.log(`First Fruit: ${firstFruit}, Second Fruit: ${secondFruit}`);
console.log()

// 8- use case - Module Imports
// import { funcA, funcB } from 'module-name';
// const [resultA, resultB] = [funcA(), funcB()];

// 9- use case - Event Handling
// document.addEventListener('click', ([event]) => {
//     console.log(`Clicked at: ${event.clientX}, ${event.clientY}`);
// });

// 10- use case - Data Transformation
const data = [[1, 'One'], [2, 'Two'], [3, 'Three']];
const transformedData = data.map(([num, word]) => `${num} is spelled as ${word}`);
console.log(transformedData);
console.log()

// 11- use case - Configuration Objects
const config = {
    settings: ['dark', 'compact', 'notifications']
};
const [theme, layout, alerts] = config.settings;
console.log(`Theme: ${theme}, Layout: ${layout}, Alerts: ${alerts}`);
console.log()

// 12- use case - API Responses
const apiResponse = {
    data: ['John', 'Doe', 30]
};
const [firstName, lastName, age] = apiResponse.data;
console.log(`First Name: ${firstName}, Last Name: ${lastName}, Age: ${age}`);
console.log()

// 13- use case - State Management
const state = { values: [true, false, true] };
const [isLoggedIn, isAdmin, isGuest] = state.values;
console.log(`Logged In: ${isLoggedIn}, Admin: ${isAdmin}, Guest: ${isGuest}`);
console.log()

// 14- use case - Testing
const testData = [42, 'Answer', null];
const [number, text, nothing] = testData;
console.log(`Number: ${number}, Text: ${text}, Nothing: ${nothing}`);
console.log()

// 15- use case - Code Readability
const colorsList = ['Cyan', 'Magenta', 'Yellow', 'Black'];
const [cyan, magenta, yellow, black] = colorsList;
console.log(`Cyan: ${cyan}, Magenta: ${magenta}, Yellow: ${yellow}, Black: ${black}`);
console.log()

// 16- use case - Performance Optimization
const largeArray = Array.from({ length: 1000 }, (_, i) => i + 1);
console.log(`largeArray Length: ${largeArray.length}`);
// console.log(`Complete largeArray: [${largeArray}]`);
const [first, second, third, fourth] = largeArray;
console.log(`First: ${first}, Second: ${second}, Third: ${third}, Fourth: ${fourth}`);
console.log()

// 17- use case - Error Handling
try {
    const faultyData = [1, 2];
    const [val1, val2, val3] = faultyData;
    console.log(`Values: ${val1}, ${val2}, ${val3}`);
} catch (error) {
    console.error('Error during destructuring:', error);
}
console.log()

// 18- use case - Dynamic Assignments
const dynamicArray = [Math.random(), Math.random(), Math.random()];
const [rand1, rand2, rand3] = dynamicArray;
console.log(`Random Values: ${rand1}, ${rand2}, ${rand3}`);
console.log()

// 19- use case - Working with Maps and Sets
const map = new Map([
    ['name', 'Bob'],
    ['age', 25]
]);
const [nameEntry, ageEntry] = map;
console.log(`Name Entry: ${nameEntry}, Age Entry: ${ageEntry}`);
console.log()

// 20- use case - Destructuring in Loops
const points = [[1, 2], [3, 4], [5, 6]];
for (const [x, y] of points) {
    console.log(`Point: (${x}, ${y})`);
}
console.log()

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