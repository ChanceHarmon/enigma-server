'use strict';

const rotorOne = require('../original-rotors/rotor-1.js');

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
        if (i === 25) {
            if (positions[i][0] === input) return positions[i][1]
            else i = 0;
        } else {
            if (positions[i][0] === input) return positions[i][1]
            else i++;
        }
    }
}

module.exports = rotorRotate;
console.log(rotorRotate(rotorOne, 5, 'A'))