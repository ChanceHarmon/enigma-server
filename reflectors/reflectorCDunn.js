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

const reflectorCDunn = {
    'A': 'R',
    'B': 'D',
    'C': 'O',
    'E': 'J',
    'F': 'N',
    'G': 'T',
    'H': 'K',
    'I': 'V',
    'L': 'M',
    'P': 'W',
    'Q': 'Z',
    'S': 'X',
    'U': 'Y'
}
const reflect = (input) => {
    for (let i = 0; i < 26; i++) {
        if (input === Object.keys(reflectorCDunn)[i]) {
            return Object.values(reflectorCDunn)[i]
        }
    }
    return input;
}
module.exports = reflect;