'use strict';

const rotorOne = require('../original-rotors/rotorI.js');
const inputSwapper = require('./inputSwapper.js')

const rotorOutputPostReflector = (rotor, input) => {
    const { positions } = rotor;
    if (typeof input !== 'number') {
        input = inputSwapper(input)
    }
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
