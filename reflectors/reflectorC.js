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

const reflectorC = {
    'A': 'F',
    'B': 'V',
    'C': 'P',
    'D': 'J',
    'E': 'I',
    'G': 'O',
    'H': 'Y',
    'K': 'R',
    'L': 'Z',
    'M': 'X',
    'N': 'W',
    'T': 'Q',
    'S': 'U'
}
const reflect = (input) => {
    for (let i = 0; i < 26; i++) {
        if (input === Object.keys(reflectorC)[i]) {
            return Object.values(reflectorC)[i]
        }
    }
    return input;
}
module.exports = reflect;