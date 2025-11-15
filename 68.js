console.log('sets in js');

/**
 * Set is an Iterable,
 * Can use for...of loop
 * Can store data in liner order
 * only has unique elements
 * we can use string and arrays iterables
 * to make the Set
 * 
 * we can use add() method to add element to an Iterable
 * we can use has() method to check weather an element is present in the iterable or not
 * 
 * no order in Sets Iterable
 * 
 * no index based accessed 
 */

console.log(`
/**
 * Set is an Iterable,
 * Can use for...of loop
 * Can store data in liner order
 * only has unique elements
 * we can use string and arrays iterables
 * to make the Set
 * 
 * we can use add() method to add element to an Iterable
 * we can use has() method to check weather an element is present in the iterable or not
 * 
 * no order 
 * 
 * no index based acces
 */

`)
const numbers = new Set()

console.log('numbers Set is :', numbers)

// add elements in sets

numbers.add(2)

console.log('after adding elements in sets :');
console.log(numbers);
numbers.add(99)
numbers.add(90)
numbers.add(77)
numbers.add('string in numbers')
numbers.add(undefined)


console.log('----------------> :',numbers);
console.log('is number set has 77 element :',numbers.has(77));

const str = new Set()

console.log('str set is :', str);

str.add('sdfsf')
console.log('after adding string in str set :',str);

str.add('mi')
console.log(str);

str.add(32)
console.log(str);
str.add(-1)
console.log(str);

str.add('sdfdsfsdf')

console.log(str);

str.add('mi')

console.log(str);

console.log('***=========================***');

console.log('Using For...Of Loop');
console.log('we have numbers and str two iterables');
console.log('numbers iter is is :', numbers);
console.log('str iterable is :', str);

console.log('using for of loop on numbers iterable:');

for(let num of numbers) console.log(`iterable numbers nums is : ${num}`);
console.log();

console.log('now using for of loop on strs :');
console.log();

for(let char of str) console.log(`Iterable str's char is : ${char}`);
console.log();

console.log('***=========================***');
console.log('***=========================***');
console.log('***=========================***');