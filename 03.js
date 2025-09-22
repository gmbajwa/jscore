'use strict'
/**
 * Veriables
 * let
 * var
 * use strict mode
 */

console.log(`Veriables:
    define and initialize
    use strict mode
    use var keyword
    use`)

    var myName = `need to update this value`
    console.log(`existing myName: `, myName);

    /**
     * we are considering existing myName holder
     * and updating its value with new value
     * but by mistake we are using new veriable
     * with identified by myname in our senece
     * but also using with new myname named veriable
     */
    var myname = `new name`
    console.log(myName)
    console.log(`myname:`, myname)


    /**
     * solution : 
     * we'll use 'use strict' mode 
     * which will not allow developer to define any
     * veriable with out var, let or const keyword
     * 
     */
    
    var myAge = 32;
    console.log(`user age is :`, myAge);
    
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
    