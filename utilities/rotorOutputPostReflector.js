'use strict';

const rotorOne = require('../original-rotors/rotorI.js');
const inputSwapper = require('./inputSwapper.js')

// Decided to make the output contain both the index and value, might be more useful to have both in other functions

const rotorOutputPostReflector = (rotor, input) => {

    // console.log('in post', input)
    const { positions } = rotor;
    if (typeof input !== 'number') {
        // console.log('test')
        input = inputSwapper(input)
    }
    // console.log('still in post', input, positions.outputSchedule)
    let firstPath = positions.outputSchedule[input][1];
    let outputIndex;
    for (let i = 0; i < positions.inputSchedule.length; i++) {
        if (positions.inputSchedule[i][0] === firstPath) {
            outputIndex = i;
            break
        }
    }
    return outputIndex;
}

module.exports = rotorOutputPostReflector;
// console.log(rotorOutputPostReflector(rotorOne, 'A'))
