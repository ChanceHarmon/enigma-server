'use strict';

const rotorOne = require('../original-rotors/rotorI.js');
const inputSwapper = require('./inputSwapper.js')

// Decided to make the output contain both the index and value, might be more useful to have both in other functions

const rotorOutputPostReflector = (rotor, input) => {

    const { positions } = rotor;

    for (let i = 0; i < positions.outputSchedule.length; i++) {
        if (positions.outputSchedule[i][0] === input) {
            let mapToCharacter = positions.outputSchedule[i][1]
            for (let j = 0; j < positions.inputSchedule.length; j++) {
                if (positions.inputSchedule[j][0] === mapToCharacter) {
                    return [j, mapToCharacter]
                }
            }
        }
    }
}

module.exports = rotorOutputPostReflector;
console.log(rotorOutputPostReflector(rotorOne, 'B'))
