'use strict';
// need swapper, configs eventually for different rotors, pre func, post func, return func => prob the swap func

const rotorI = require('../original-rotors/rotorI.js')
const rotorII = require('../original-rotors/rotorII.js')
const rotorIII = require('../original-rotors/rotorIII.js')
const inputPreReflector = require('./inputPreReflector.js')
const outputPostReflector = require('./outputPostReflector.js')
const reflector = require('../reflectors/reflectorB.js')
const rotorRotateCCW = require('../utilities/rotorRotateCCW.js')

const rotorArray = [rotorI, rotorII, rotorIII]

const startToFinish = (rotors, input) => {

    console.log('original input', input)
    rotors[0] = rotorRotateCCW(rotors[0])

    let downTheRabbitHole = inputPreReflector(rotors, input);
    let outputChar = reflector(downTheRabbitHole);
    let outTheRabbitHole = outputPostReflector(rotors, outputChar);

    return outTheRabbitHole;
}

module.exports = startToFinish;
console.log('start to finish', startToFinish(rotorArray, 'A'))