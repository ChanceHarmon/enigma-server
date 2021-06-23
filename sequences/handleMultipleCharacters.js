'use strict';

/*
Function Purpose:
    Take in a string and rotors. Return an encoded/decoded string depending on intent.
    Intent meaning if you are trying to encode a message through the machine, or if you are trying to send the encoded message through to get the decoded version of the string. All based upon rotor configs that the function is testing.

Function Input:
    Rotors: Assumes all configs have already been set for the rotor.
    Input: String of any length

Function Output:
    String: Depending on intent, an encoded or decoded string based on input string.

Run Function:
    Currently N/A
*/

const rotorI = require('../original-rotors/rotorI.js')
const rotorII = require('../original-rotors/rotorII.js')
const rotorIII = require('../original-rotors/rotorIII.js')
const rotorArray = [rotorI, rotorII, rotorIII];
const rotorRotateCCW = require('../utilities/rotorRotateCCW.js')

const startToFinish = require('./startToFinish.js')

const handleMultipleCharacters = (str, rotors) => {

    //Clean up input string. We want to retain spaces but remove punctuation  characters that are not on the input board. Making it all upper case doesn't hurt
    const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
    let removePunksKeepSpacing = str.replace(regex, '');
    removePunksKeepSpacing = removePunksKeepSpacing.toUpperCase()

    let message = '';

    for (let i = 0; i < removePunksKeepSpacing.length; i++) {
        if (removePunksKeepSpacing[i] === ' ') {
            console.log('space', removePunksKeepSpacing[i])
            message += removePunksKeepSpacing[i];
        } else {
            console.log('char', removePunksKeepSpacing[i])
            rotors[0] = rotorRotateCCW(rotors[0])
            let encodedChar = startToFinish(rotors, removePunksKeepSpacing[i])
            console.log(encodedChar)
            message += encodedChar;
        }
    }
    console.log('message before return', message)
    return message;

}
// NC  BE M
module.exports = handleMultipleCharacters;
console.log('handle multi', handleMultipleCharacters('YOSH', rotorArray))
// console.log('handle multi', handleMultipleCharacters('gregor', rotorArray))
// console.log('handle multi', handleMultipleCharacters('Hound', rotorArray))
// console.log('handle multi', handleMultipleCharacters('Hello World', rotorArray))

