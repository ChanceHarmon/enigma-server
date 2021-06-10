'use strict';

// const rotorI = require('../original-rotors/rotorI.js')

const rotorRotateCCW = rotor => {
    console.log('in CCW', rotor.positions)
    let tempIn = rotor.positions.inputSchedule.shift()
    rotor.positions.inputSchedule.push(tempIn)

    let tempOut = rotor.positions.outputSchedule.shift()
    rotor.positions.outputSchedule.push(tempOut)
    console.log('in ccw after turn', rotor.positions)
    return rotor
}

module.exports = rotorRotateCCW;

// console.log(rotorRotateCCW(rotorI))