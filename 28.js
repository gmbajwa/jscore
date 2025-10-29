'use strict'
/**
 * Clone Arrays or make a copy of Arrays
 * and which method is efficient and concise
 * to clone an array in JavaScript?
 * 1- arr.slice(0)
 * 2- [...arr]
 * 3- Array.from(arr)
 */
console.log(`/**
 * Clone Arrays or make a copy of Arrays
 */`)
console.log(`
    
    
    `)
    
/**
 * Start Coding From Here
 */
let arr = [1, 2, 3, 4, 5];

let arrClone = arr.slice(0); // Method 1

let arrClone2 = [...arr]; // Method 2

let arrClone3 = Array.from(arr); // Method 3

console.log(arrClone);  // [1, 2, 3, 4, 5]
console.log(arrClone2); // [1, 2, 3, 4, 5]
console.log(arrClone3); // [1, 2, 3, 4, 5]  

let arrClone4 = [];
for (let i = 0; i < arr.length; i++) { // Method 4
    arrClone4[i] = arr[i];
}
console.log(arrClone4); // [1, 2, 3, 4, 5]
let arrClone5 = [];
arr.forEach(function(item, index) { // Method 5
    arrClone5[index] = item;
});
console.log(arrClone5); // [1, 2, 3, 4, 5]
let arrClone6 = arr.map(function(item) { // Method 6
    return item;
});
console.log(arrClone6); // [1, 2, 3, 4, 5]
let arrClone7 = [];
for (let item of arr) { // Method 7
    arrClone7.push(item);
}
console.log(arrClone7); // [1, 2, 3, 4, 5]
let arrClone8 = [];
arr.reduce(function(_, item) { // Method 8
    arrClone8.push(item);
}, 0);
console.log(arrClone8); // [1, 2, 3, 4, 5]
let arrClone9 = [];
arr.forEach(item => arrClone9.push(item)); // Method 9
console.log(arrClone9); // [1, 2, 3, 4, 5]
let arrClone10 = arr.filter(() => true); // Method 10
console.log(arrClone10); // [1, 2, 3, 4, 5]
let arrClone11 = [];
for (let i = 0; i < arr.length; i++) { // Method 11
    arrClone11.push(arr[i]);
}
console.log(arrClone11); // [1, 2, 3, 4, 5] 
let arrClone12 = Array.apply(null, arr); // Method 12
console.log(arrClone12); // [1, 2, 3, 4, 5]
let arrClone13 = arr.concat(); // Method 13
console.log(arrClone13); // [1, 2, 3, 4, 5]
let arrClone14 = [];
for (let i in arr) { // Method 14
    arrClone14[i] = arr[i];
}
console.log(arrClone14); // [1, 2, 3, 4, 5]
let arrClone15 = [];
arr.map(item => arrClone15.push(item)); // Method 15
console.log(arrClone15); // [1, 2, 3, 4, 5]
let arrClone16 = [];
arr.reduce((_, item) => { // Method 16
    arrClone16.push(item);
}, 0);
console.log(arrClone16); // [1, 2, 3, 4, 5]
let arrClone17 = Array.from(arr.values()); // Method 17
console.log(arrClone17); // [1, 2, 3, 4, 5]
let arrClone18 = [];
for (let [index, item] of arr.entries()) { // Method 18
    arrClone18[index] = item;
}
console.log(arrClone18); // [1, 2, 3, 4, 5]
let arrClone19 = [];
arr.forEach((item, index) => { // Method 19
    arrClone19[index] = item;
});
console.log(arrClone19); // [1, 2, 3, 4, 5]
let arrClone20 = [];
for (let i = 0; i < arr.length; i += 1) { // Method 20
    arrClone20.push(arr[i]);
}
console.log(arrClone20); // [1, 2, 3, 4, 5]
let arrClone21 = [];
arr.reduceRight(function(_, item) { // Method 21
    arrClone21.push(item);
}, 0);
console.log(arrClone21.reverse()); // [1, 2, 3, 4, 5]
let arrClone22 = [];
arr.map(function(item) { // Method 22
    arrClone22.push(item);
});
console.log(arrClone22); // [1, 2, 3, 4, 5]
let arrClone23 = [];
for (let i = 0, len = arr.length; i < len; i++) { // Method 23
    arrClone23[i] = arr[i];
}
console.log(arrClone23); // [1, 2, 3, 4, 5]
let arrClone24 = [];
arr.forEach(function(item) { // Method 24
    arrClone24.push(item);
});
console.log(arrClone24); // [1, 2, 3, 4, 5]
let arrClone25 = [];
for (const item of arr) { // Method 25
    arrClone25.push(item);
}
console.log(arrClone25); // [1, 2, 3, 4, 5]
let arrClone26 = [];
arr.filter(function(item) { // Method 26
    arrClone26.push(item);
    return true;
});
console.log(arrClone26); // [1, 2, 3, 4, 5]
let arrClone27 = [];
arr.reduceRight((_, item) => { // Method 27
    arrClone27.push(item);
}, 0);
console.log(arrClone27.reverse()); // [1, 2, 3, 4, 5] 
let arrClone28 = [];
arr.concat().forEach(function(item) { // Method 28
    arrClone28.push(item);
});
console.log(arrClone28); // [1, 2, 3, 4, 5]
/**
 * Please list all above methods numbers in order of efficiency and conciseness
 * from most efficient and concise to least efficient and concise
 * and explain why you ranked them that way.
 */



console.log(`
1. Method 2: Spread Operator - [...arr]
2. Method 3: Array.from(arr)
3. Method 1: arr.slice(0)
4. Method 4: for loop
5. Method 5: forEach
6. Method 6: map
7. Method 7: for...of
8. Method 8: reduce
9. Method 9: forEach (arrow function)
10. Method 10: filter
11. Method 11: for loop (push)
12. Method 12: Array.apply
13. Method 13: concat
14. Method 14: for...in
15. Method 15: map (push)
16. Method 16: reduce (push)
17. Method 17: Array.from
18. Method 18: for...of (entries)
19. Method 19: forEach (entries)
20. Method 20: for loop (increment)
21. Method 21: reduceRight
22. Method 22: map (push)
23. Method 23: for loop (length)
24. Method 24: forEach (push)
25. Method 25: for...of (push)
26. Method 26: filter (push)
27. Method 27: reduceRight (push)
28. Method 28: concat (forEach)
The top three methods (2, 3, and 1) are the most efficient and concise because they utilize built-in JavaScript features that are optimized for performance and readability. The spread operator and Array.from provide a clear and straightforward way to clone arrays without the need for explicit loops.

    
    
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