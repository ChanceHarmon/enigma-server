'use strict';
// Not sure if I am going to use this yet, it was needed at a certain point for testing.
// It works though, so I don't want to waste it yet.

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