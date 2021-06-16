'use strict';

// const rotorI = require('../original-rotors/rotorI.js')
/*
Function Purpose:
    Take in a rotor, and turn both input and output schedule Counter clockwise.
    A => position of Z
    B => position of A

Function Input:
    Rotor: Assumes all configs have already been set for the rotor.

Function Output:
    Rotor: Original rotor rotated by '1' counter clockwise.

Run Function:
    Comment in the last line of code and the required file above, run file. 
*/

const rotorRotateCCW = rotor => {
    let tempIn = rotor.positions.inputSchedule.shift()
    rotor.positions.inputSchedule.push(tempIn)

    let tempOut = rotor.positions.outputSchedule.shift()
    rotor.positions.outputSchedule.push(tempOut)
    return rotor
}

module.exports = rotorRotateCCW;

// console.log(rotorRotateCCW(rotorI))