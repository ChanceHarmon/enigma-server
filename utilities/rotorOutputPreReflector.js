'use strict';

const rotorOne = require('../original-rotors/rotorI.js');
const inputSwapper = require('./inputSwapper.js')

/*
Function Purpose:
    Take in a rotor and input, and return an index.

Function Input:
    Rotor: Assumes all configs have already been set for the rotor.
    Input: Index to locate on the rotor inputSchedule. 

Function Output:
    Index: Index of outputSchedule on rotor.

Run Function:
    Comment in the last line of code, run file. 
*/

const rotorOutputPreReflector = (rotor, input) => {
    const { positions } = rotor;
    if (typeof input !== 'number') {
        input = inputSwapper(input)
    }
    console.log('in pre reflector', input, positions)
    let firstPath = positions.inputSchedule[input][1];
    let outputIndex;
    for (let i = 0; i < positions.outputSchedule.length; i++) {
        if (positions.outputSchedule[i][0] === firstPath) {
            outputIndex = i;
            break
        }
    }
    return outputIndex;
}

module.exports = rotorOutputPreReflector;
// console.log(rotorOutputPreReflector(rotorOne, 'A'))
