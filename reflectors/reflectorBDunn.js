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

const reflectorBDunn = {
    'A': 'E',
    'B': 'N',
    'C': 'K',
    'D': 'Q',
    'F': 'U',
    'G': 'Y',
    'H': 'W',
    'I': 'J',
    'L': 'O',
    'M': 'P',
    'R': 'X',
    'S': 'Z',
    'T': 'V'
}
const reflect = (input) => {
    for (let i = 0; i < 26; i++) {
        if (input === Object.keys(reflectorBDunn)[i]) {
            return Object.values(reflectorBDunn)[i]
        }
    }
}
module.exports = reflect;