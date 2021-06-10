'use strict';

// const rotorI = require('../original-rotors/rotorI.js')
const rotorRotateCCW = require('./rotorRotateCCW.js')

//Only works for positive number up to 25. A => 0  Z => 25
//If I get to the option of negative nums I will write a clockwise function for it 

const rotorStartPosition = rotor => {
    if (rotor.start_position !== 0) {
        for (let i = 0; i < rotor.start_position; i++) {
            rotor = rotorRotateCCW(rotor)
        }
        return rotor.positions
    }
    return rotor.positions
};

module.exports = rotorStartPosition;
// let testRotor = rotorI;
// testRotor.start_position = 2

// console.log(rotorStartPosition(testRotor))