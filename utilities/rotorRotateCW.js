'use strict';

const rotorI = require('../original-rotors/rotorI.js')

const rotorRotateCW = rotor => {
    // console.log('in CW', rotor.positions)
    let tempIn = rotor.positions.inputSchedule.pop()
    rotor.positions.inputSchedule.unshift(tempIn)

    let tempOut = rotor.positions.outputSchedule.pop()
    rotor.positions.outputSchedule.unshift(tempOut)

    return rotor
}

module.exports = rotorRotateCW;

console.log('final cw output', rotorRotateCW(rotorI))