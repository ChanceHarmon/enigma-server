'use strict';

// Some assumptions need to be made here, I need an array of rotors that are already preset to the config options. I have to fake some of this for proof of work, but it will get trimmed at some point.

const rotorI = require('../original-rotors/rotorI.js')
const rotorII = require('../original-rotors/rotorII.js')
const rotorIII = require('../original-rotors/rotorIII.js')
const rotorRotateCCW = require('../utilities/rotorRotateCCW.js')
const rotorOutputPreReflector = require('../utilities/rotorOutputPreReflector.js')
const inputSwapper = require('../utilities/inputSwapper.js')

const rotorArray = [rotorI, rotorII, rotorIII]

const inputPreReflector = (arr, input) => {
    // arr is a set of rotors

    // rotate first rotor CCW
    arr[0] = rotorRotateCCW(arr[0])
    // console.log('in seq', arr[0].positions)

    let wheelOutput = inputSwapper(input);
    // send output of first rotor to next rotor
    for (let i = 0; i < arr.length; i++) {
        console.log('input', wheelOutput)
        wheelOutput = rotorOutputPreReflector(arr[i], wheelOutput)
    }
    console.log('output', wheelOutput, arr[arr.length - 1].positions.outputSchedule[wheelOutput][0])
    let characterBeforeReflector = arr[arr.length - 1].positions.outputSchedule[wheelOutput][0]
    return characterBeforeReflector;

    // for now just log the out put of 3 rotors before reflector
};

module.exports = inputPreReflector;
console.log(inputPreReflector(rotorArray, 'A'))