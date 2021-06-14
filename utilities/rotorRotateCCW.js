'use strict';

// const rotorI = require('../original-rotors/rotorI.js')

const rotorRotateCCW = rotor => {
    let tempIn = rotor.positions.inputSchedule.shift()
    rotor.positions.inputSchedule.push(tempIn)

    let tempOut = rotor.positions.outputSchedule.shift()
    rotor.positions.outputSchedule.push(tempOut)
    return rotor
}

module.exports = rotorRotateCCW;

// console.log(rotorRotateCCW(rotorI))