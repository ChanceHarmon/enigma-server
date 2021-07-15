'use strict';

const rotorOne = require('../original-rotors/rotorI.js');
const inputSwapper = require('./inputSwapper.js')

/*
Function Purpose:
    Take in a rotor and input, and return an index.

Function Input:
    Rotor: Assumes all configs have already been set for the rotor.
    Input: Index to locate on the rotor outputSchedule. 

Function Output:
    Index: Index of inputSchedule on rotor.

Run Function:
    Comment in the last line of code, run file. 
*/

const rotorOutputPostReflector = (rotor, input) => {
    const { positions } = rotor;
    if (typeof input !== 'number') {
        input = inputSwapper(input)
    }
    // console.log('post reflector', input, positions.outputSchedule)
    let firstPath = positions.outputSchedule[input][1];
    let outputIndex;
    for (let i = 0; i < positions.inputSchedule.length; i++) {
        if (positions.inputSchedule[i][0] === firstPath) {
            outputIndex = i;
            break
        }
    }
    return outputIndex;
};

module.exports = rotorOutputPostReflector;
// console.log(rotorOutputPostReflector(rotorOne, 'A'))
