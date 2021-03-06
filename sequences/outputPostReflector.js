'use strict';

// const rotorI = require('../original-rotors/rotorI.js')
// const rotorII = require('../original-rotors/rotorII.js')
// const rotorIII = require('../original-rotors/rotorIII.js')
const rotorOutputPostReflector = require('../utilities/rotorOutputPostReflector.js')
const inputSwapper = require('../utilities/inputSwapper.js')

// const rotorArray = [rotorI, rotorII, rotorIII]

const outputPostReflector = (arr, input) => {
    //Reverse rotor locations to simulate going back up the rotors
    arr = arr.reverse()
    let wheelOutput = inputSwapper(input);
    // send output of first rotor to next rotor
    // console.log('output post reflector', wheelOutput, input)
    for (let i = 0; i < arr.length; i++) {
        wheelOutput = rotorOutputPostReflector(arr[i], wheelOutput)
    }
    let characterBeforeReflector = arr[arr.length - 1].positions.outputSchedule[wheelOutput][0]
    return characterBeforeReflector;
}

module.exports = outputPostReflector
// console.log(outputPostReflector(rotorArray, 'A'))
