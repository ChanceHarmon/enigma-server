'use strict';

const rotorOutputPostReflector = require("../utilities/rotorOutputPostReflector");

const decodePostReflector = (rotors, input) => {

    rotors = rotors.reverse();

    const findStartIndex = (str) => {
        // console.log(str, rotors[0])
        for (let i = 0; i < rotors[0].positions.outputSchedule.length; i++) {
            if (str === rotors[0].positions.outputSchedule[i][0]) {
                return i
            }
        }
    }

    let startIndex = findStartIndex(input);
    console.log(startIndex)

    for (let i = 0; i < rotors.length; i++) {
        startIndex = rotorOutputPostReflector(rotors[i], startIndex)
    }

    // let decodedCharacter = startIndex === 0 ? rotors[rotors.length - 1].positions.inputSchedule[inputSchedule.length - 1][0] : rotors[rotors.length - 1].positions.inputSchedule[startIndex - 1][0]
    let decodedCharacter = rotors[rotors.length - 1].positions.outputSchedule[startIndex - 1][0]

    return decodedCharacter;

}

module.exports = decodePostReflector