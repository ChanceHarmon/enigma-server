'use strict';

const rotorOne = require('../original-rotors/rotorI.js');
const inputSwapper = require('./inputSwapper.js')

const rotorOutputPreReflector = (rotor, input) => {
    const { positions } = rotor;
    if (typeof input !== 'number') {
        input = inputSwapper(input)
    }

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
