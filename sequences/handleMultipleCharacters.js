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
    let rotorSet = rotors;

    for (let i = 0; i < removePunksKeepSpacing.length; i++) {
        if (removePunksKeepSpacing[i] === ' ') {

            message += removePunksKeepSpacing[i];

        } else {

            rotorSet[0] = rotorRotateCCW(rotorSet[0])

            let encodedChar = startToFinish(rotorSet, removePunksKeepSpacing[i])

            //I may move this reverse call to the startToFinish function, but for now it will stay here. Never forget this bug!!! The rotorSet is mutated at this point. You have to re-reverse it to get the next cycle to work as intended.
            rotorSet = rotorSet.reverse()
            message += encodedChar;
        }
    }
    console.log('message before return', message)
    return message;

}
// NC  BE M
module.exports = handleMultipleCharacters;
console.log('handle multi', handleMultipleCharacters('AB', rotorArray))

