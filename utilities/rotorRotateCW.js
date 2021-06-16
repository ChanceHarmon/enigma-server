'use strict';

// const rotorI = require('../original-rotors/rotorI.js')

/*
Function Purpose:
    Take in a rotor, and turn both input and output schedule Clockwise.
    Z => position of A
    A => position of B

Function Input:
    Rotor: Assumes all configs have already been set for the rotor.

Function Output:
    Rotor: Original rotor rotated by '1' clockwise.

Run Function:
    Comment in the last line of code and the required file above, run file. 
*/

const rotorRotateCW = rotor => {

    let tempIn = rotor.positions.inputSchedule.pop()
    rotor.positions.inputSchedule.unshift(tempIn)

    let tempOut = rotor.positions.outputSchedule.pop()
    rotor.positions.outputSchedule.unshift(tempOut)

    return rotor
}

module.exports = rotorRotateCW;

// console.log('final cw output', rotorRotateCW(rotorI))