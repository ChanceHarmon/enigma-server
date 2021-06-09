'use strict';

const rotorI = require('../original-rotors/rotorI.js')

const offsetRotor = (rotor) => {
    /*
    Take in a rotor

    take an input that determines the offset amount
        in the rotor, just have to look for it

    perform negative or positive rotation of indexs of the outputSchedule

    return  the rotor with the offset

    */
    if (rotor.offset > 0) {
        let rotorFirstShift = rotorI.outputSchedule.shift();
        rotorI.push(rotorFirstShift);
        return rotor;
    }
    else if (rotor.offset < 0) {
        let rotorFirstShift = rotorI.outputSchedule.pop();
        rotorI.unshift(rotorFirstShift);
        return rotor;
    }
    return rotor;


};

module.exports = offsetRotor;