'use strict';

// Some assumptions need to be made here, I need an array of rotors that are already preset to the config options. I have to fake some of this for proof of work, but it will get trimmed at some point.

// const rotorI = require('../original-rotors/rotorI.js')
// const rotorII = require('../original-rotors/rotorII.js')
// const rotorIII = require('../original-rotors/rotorIII.js')
// const rotorArray = [rotorI, rotorII, rotorIII]
const rotorOutputPreReflector = require('../utilities/rotorOutputPreReflector.js')
const inputSwapper = require('../utilities/inputSwapper.js')


const inputPreReflector = (arr, input) => {
    //Convert Char to Index
    let wheelOutput = inputSwapper(input);
    // console.log('made it to inputPreReflector', input, wheelOutput)
    // send output of first rotor to next rotor
    for (let i = 0; i < arr.length; i++) {
        // console.log(arr[i])
        wheelOutput = rotorOutputPreReflector(arr[i], wheelOutput)
    }
    //Convert final index output to character
    let characterBeforeReflector = arr[arr.length - 1].positions.outputSchedule[wheelOutput][0]
    //Return character for reflector
    console.log('encoded char before reflector', characterBeforeReflector)
    return characterBeforeReflector;
};

module.exports = inputPreReflector;
// console.log(inputPreReflector(rotorArray, 'A'))