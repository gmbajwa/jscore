'use strict'
/**
 * Callbacks
 * Specially use in main function whic provide data
 * featched from database and pass this data to a
 * function receieved as a Parameter
 * and then call this function after passing data
 */

const demoFunction = param => {
    const config = {setting:1, url:'https://example.com'}
    param(config)
}

const testFunction = data => {
    console.log('from test function')
    console.log(data)
}

demoFunction(testFunction)


/**
 * Summary -
 * test function is callback function here
 * as this will accept data
 * and being called by Received Function
 */