'use strict';

const rotorRotateCCW = require("./rotorRotateCCW");
// const rotorI = require('../original-rotors/rotorI.js')
// const rotorII = require('../original-rotors/rotorII.js')
// const rotorIII = require('../original-rotors/rotorIII.js')
// const rotorArray = [rotorI, rotorII, rotorIII]

/*
Function Purpose:
    Take in a set of rotors and an input. Based on input length, sans white space, rotate all rotors to where they would be in the sequence of rotations of encoding the input.

Function Input:
    Rotors: Assumes all configs have already been set for the rotor.
    Input: String of any length

Function Output:
    Rotors: The rotors set to proper rotation cycle.

Run Function:
    Comment in last console line and the commented out required files
*/

//Helper function for length to make true rotations of rotors
const findLengthMinusWhiteSpace = str => {
    let actual = 0;
    console.log(str)
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            actual += 1
        }
    }
    return actual;
};

const setReverseRotorRotations = (input, rotors) => {
    let actual = findLengthMinusWhiteSpace(input);
    console.log('actual in set rotors for decode', actual)
    for (let i = 0; i < actual; i++) {
        rotors[0] = rotorRotateCCW(rotors[0])
    }
    console.log(rotors[0].positions.inputSchedule, rotors[0].positions.outputSchedule)
    return rotors;
};
module.exports = setReverseRotorRotations;
// console.log(setReverseRotorRotations('tw o', rotorArray))