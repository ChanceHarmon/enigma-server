'use strict';

const rotorOne = require('../original-rotors/rotorI.js');
const inputSwapper = require('./inputSwapper.js')

// Decided to make the output contain both the index and value, might be more useful to have both in other functions

const rotorOutputPreReflector = (rotor, input) => {
    // console.log('in pre', input)
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



// const rotorOutputPreReflector = (rotor, input) => {
//     console.log('in pre', input, rotor.positions)
//     if (Array.isArray(input)) {
//         input = input[1]
//     }
//     const { positions } = rotor;

//     for (let i = 0; i < positions.inputSchedule.length; i++) {
//         if (positions.inputSchedule[i][0] === input) {
//             let mapToCharacter = positions.inputSchedule[i][1]
//             for (let j = 0; j < positions.outputSchedule.length; j++) {
//                 if (positions.outputSchedule[j][0] === mapToCharacter) {
//                     return [j, mapToCharacter]
//                 }
//             }
//         }
//     }
// }

module.exports = rotorOutputPreReflector;
// console.log(rotorOutputPreReflector(rotorOne, 'A'))
