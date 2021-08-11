'use strict';

// const rotorI = require('../original-rotors/rotorI.js')
// const rotorII = require('../original-rotors/rotorII.js')
// const rotorIII = require('../original-rotors/rotorIII.js')
const inputPreReflector = require('./inputPreReflector.js')
const outputPostReflector = require('./outputPostReflector.js')
const reflector = require('../reflectors/reflectorB.js')
// const rotorRotateCCW = require('../utilities/rotorRotateCCW.js')

// const rotorArray = [rotorI, rotorII, rotorIII]

const startToFinish = (rotors, input) => {
    //Logging for visual input compared to output in terminal
    // console.log('original input', input)
    //Historically the original enigma machine rotated the first rotor in the sequence before the 'key' actually made contact. So 'A' becomes 'B' before it is ever sent through the rotors.
    // rotors[0] = rotorRotateCCW(rotors[0])

    // Input moves through the rotors toward the reflector
    let downTheRabbitHole = inputPreReflector(rotors, input);
    // console.log('down the rabbithole', downTheRabbitHole)
    //Input is converted per reflector specifications
    let outputChar = reflector(downTheRabbitHole);
    //Input is now sent back up the rotors towards final output
    let outTheRabbitHole = outputPostReflector(rotors, outputChar);
    //return final encoded character
    return outTheRabbitHole;
}

module.exports = startToFinish;
// console.log('start to finish', startToFinish(rotorArray, 'AB'))


