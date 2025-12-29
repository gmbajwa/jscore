'use strict'
/**
 * Object Method can be written by as Calss Methods
 */

const user = {
    id: 1,
    name: 'user one',
    gender: 'male',
    // about: function(){
    //     console.log(`anonimyous functionid is ${this.id}, name is ${this.name} and gender is ${this.gender}`)
    // },

    about(){
        console.log(` Class Method: id is ${this.id}, ${this.name} and gender is ${this.gender}`)
    }
}

user.about()