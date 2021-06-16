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
    'A': 'Y',
    'B': 'R',
    'C': 'U',
    'D': 'H',
    'E': 'Q',
    'F': 'S',
    'G': 'L',
    'I': 'P',
    'J': 'X',
    'K': 'N',
    'M': 'O',
    'T': 'Z',
    'V': 'W'
}

const reflect = (input) => {
    for (let i = 0; i < 26; i++) {
        if (input === Object.keys(reflectorB)[i]) {
            return Object.values(reflectorB)[i]
        }
    }
}
module.exports = reflect;

//console.log(reflect('A'))