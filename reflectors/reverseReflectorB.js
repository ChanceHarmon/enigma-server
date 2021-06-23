'use strict';

/*
All Information for Reflector configs taken from https://www.codesandciphers.org.uk/enigma/rotorspec.htm for historical accuracy
*/

/*
Function Purpose:
    Take in an input of A-Z, and return the value of the corresponding key.

Function Input:
    Input: Character A-Z

Function Output:
    Output: Character A-Z

Run Function:
    Comment in the last line of code and the required file above, run file. 
*/

const reflectorB = {
    'Y': 'A',
    'R': 'B',
    'U': 'C',
    'H': 'D',
    'Q': 'E',
    'S': 'F',
    'L': 'G',
    'P': 'I',
    'X': 'J',
    'N': 'K',
    'O': 'M',
    'Z': 'T',
    'W': 'V'
}

const reflectReverse = (input) => {
    console.log('in reverse reflector', input)
    for (let i = 0; i < 26; i++) {
        console.log(Object.values(reflectorB)[i], Object.keys(reflectorB)[i])
        if (input === Object.keys(reflectorB)[i]) {
            return Object.values(reflectorB)[i]
        }
    }
    return input;
}
module.exports = reflectReverse;

//console.log(reflect('A'))