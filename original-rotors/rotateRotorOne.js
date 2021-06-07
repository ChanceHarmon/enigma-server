'use strict';

const rotorOne = require('./rotor-1.js');

const firstRotorRotate = (rotor, sequence, input) => {
    //Sequence Validation
    if (typeof sequence !== 'number' || sequence < 0 || sequence > 25) return 'Please Enter a Valid Sequence Number , 0-25'

    //Input Validation
    if (typeof input !== 'string') return 'Please Enter a letter A-Z'
    if (!/[A-Za-z]/.test(input)) return 'Please Enter a letter A-Z'
    input = input.toUpperCase();

    const { start_position, offset, positions } = rotor;

    let counter = 0

    for (let i = sequence; counter < 26; counter++) {
        // console.log('Before the count change', i, counter, positions[i])
        if (i === 25) {
            if (positions[i][0] === input) return positions[i][1]
            else i = 0;
            // console.log('Inside of positon change', i, counter, positions[i])
        } else {
            if (positions[i][0] === input) return positions[i][1]
            else i++;
            // console.log('After the count change', i, counter, positions[i])
        }
    }

    // if (sequence === 25) {
    //     // call some function to turn next rotor
    //     // And call function to move indexes
    //     // And call Function to reset start postion to beginning

    // } else {
    //     //Turn indexes
    //     // Update rotate count
    //     // return the new positions array? or the corresponding character?


    // }


}

module.exports = firstRotorRotate;
console.log(firstRotorRotate(rotorOne, 5, 'A'))