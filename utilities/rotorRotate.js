'use strict';

const rotorOne = require('../original-rotors/rotorI.js');

const rotorRotate = (rotor, sequence, input) => {
    //Sequence Validation
    if (typeof sequence !== 'number' || sequence < 0 || sequence > 25) return 'Please Enter a Valid Sequence Number , 0-25'

    //Input Validation
    if (typeof input !== 'string') return 'Please Enter a letter A-Z'
    if (!/[A-Za-z]/.test(input)) return 'Please Enter a letter A-Z'
    input = input.toUpperCase();

    const { positions } = rotor;

    let counter = 0

    for (let i = sequence; counter < 26; counter++) {
        console.log(i, positions)
        if (i === 25) {
            if (positions.inputSchedule[i][0] === input) return positions.outputSchedule[i][0]
            else i = 0;
        } else {
            if (positions.inputSchedule[i][0] === input) return positions.outputSchedule[i][0]
            else i++;
        }
    }
}

module.exports = rotorRotate;
console.log(rotorRotate(rotorOne, 0, 'A'))

/*
TODO:
Move input validiation to somewhere else, might not need it at all depending on how the frontend handles inputs, but it works, so no reason to totally ditch it yet.
Eventually remove the import of the rotor, it was only needed to prove life.


*/