'use strict';

const rotorRotateCW = require("../utilities/rotorRotateCW");
const setReverseRotorRotations = require("../utilities/setReverseRotorRotations");
const finishToStart = require("./finishToStart");
const rotorI = require('../original-rotors/rotorI.js')
const rotorII = require('../original-rotors/rotorII.js')
const rotorIII = require('../original-rotors/rotorIII.js');
const decodeMechanicalSim = require("../utilities/decodeMechanicalSim");
const rotorArray = [rotorI, rotorII, rotorIII];

/*
Function Purpose:
    Take in a set of rotors and an input. Set Rotors to proper configs for reverse. Send the input backwards through the rotors and refletor. Return a string of any length decoded from crazy string to readable message.

Function Input:
    Rotors: Assumes configs like offset and position start have already been set for the rotor, but we are going to change the actual start position of the rotors.
    Input: String of any length.

Function Output:
    String: Reverse of jibbarish to language humans speak.

Run Function:
    Comment in last console line and the commented out required files
*/

const handleDecoding = (input, rotors) => {
    //set rotors up
    rotors = setReverseRotorRotations(input, rotors);
    console.log('rotors after string reverse', rotors[0].positions.inputSchedule)
    //I think I need to loop backwards from the end of the input, so this is just a thought/test loop compared to output
    let message = '';

    for (let i = input.length - 1; i >= 0; i--) {
        // console.log('decode parent loop', 'i', i, 'input[i\'s]', rotors[0].positions.inputSchedule[0], rotors[1].positions.inputSchedule[0], rotors[2].positions.inputSchedule[0])
        if (input[i] === ' ') {
            message += input[i];
        } else {
            let encodedChar = finishToStart(rotors, input[i])
            console.log('encoded char', encodedChar)
            message += encodedChar;
            // rotors = setReverseRotorRotations(input, rotors);
            rotors = rotors.reverse()
            rotors[0] = rotorRotateCW(rotors[0]);
            //Need to figure out this line, the reverse needs to hapen but the count of index is messed up if you change the order in which it happen
        }
    }
    console.log('message in decoding', message)
    message = decodeMechanicalSim(message)
    return message;

};

module.exports = handleDecoding;
console.log(handleDecoding('BSOI BWFN BZSJPSRHF', rotorArray))