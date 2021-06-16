'use strict';
// Not sure if I am going to use this yet, it was needed at a certain point for testing.
// It works though, so I don't want to waste it yet.
// Most likely will eliminate the need for this on the front end inputs.

const validateInput = (sequence, input) => {

    //Sequence Validation
    if (typeof sequence !== 'number' || sequence < 0 || sequence > 25) return 'Please Enter a Valid Sequence Number , 0-25'

    //Input Validation
    if (typeof input !== 'string') return 'Please Enter a letter A-Z'
    if (!/[A-Za-z]/.test(input)) return 'Please Enter a letter A-Z'
    input = input.toUpperCase();
    return
}

module.exports = validateInput;