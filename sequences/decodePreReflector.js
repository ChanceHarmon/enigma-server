'use strict';

const rotorOutputPreReflector = require("../utilities/rotorOutputPreReflector");

const decodePreReflector = (rotors, input) => {

    const findStartIndex = (str) => {
        // console.log(str, rotors[0])
        for (let i = 0; i < rotors[0].positions.inputSchedule.length; i++) {
            if (str === rotors[0].positions.inputSchedule[i][0]) {
                return i
            }
        }
    }

    let startIndex = findStartIndex(input);

    for (let i = 0; i < rotors.length; i++) {
        console.log('start index for decode', startIndex)
        startIndex = rotorOutputPreReflector(rotors[i], startIndex)
    }


    let characterBeforeReflector = rotors[rotors.length - 1].positions.outputSchedule[startIndex][0]

    console.log('characterBeforeReflector in decode', characterBeforeReflector)

    return characterBeforeReflector;



}

module.exports = decodePreReflector;