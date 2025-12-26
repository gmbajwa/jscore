'use strict'

console.log('73. js is working')

console.log()
console.log('Call Method in case of Function declaration')
function test() {
    console.log('this is function declaration')
}

test()

// function call using call method without binding
test.call()

console.log()
console.log('Call Method in case of Function Expression')
const about = function(){
    console.log('this is function expression')
}

about()
// about function call with 
about.call()
console.log()
console.log('Call Method in case of Arrow Functions')
const demo = (a, b) => console.log('arrow demo function,', a, b)
demo(1, 2)
demo.call(1, 3, 4)

demo.apply('demo using apply', [1, 2])

const newdemo = demo.bind('this equal to this', [1,3,4], 34)

newdemo()

/**
 * call bind in case of Methods 
 */


    function aboutFunc(param1, param2){
        console.log(`id is ${this.id}, name is ${this.name} and gender is ${this.gender} `)
        console.log()
        console.log(`param1 ${param1} and param2 is ${param2}`)
    }

const user = {
    id: 1,
    name: 'user one',
    gender: 'male'
}

const user2 = {
    id: 2,
    name: 'user two',
    gender: 'female'
}

const user3 = {
    id: 3,
    name: 'user three',
    gender: 'male'
}

console.log()

aboutFunc.call(user, 1, 3)

console.log()
aboutFunc.call(user) //bined this with user or this = user

console.log('')
aboutFunc.apply(user2, [33, 44])

const retunedBinded = aboutFunc.bind(user3, [21, 44], 'dd')

retunedBinded()








