'use strict';

/*
Function Purpose:
    Take in a character between A - Z, and convert it to an number based on key value map.
    Number is used as an index during other functions.

Function Input:
    String: A - Z

Function Output:
    Number: 0 - 25

Run Function:
    Comment in the console.log at the bottom of the file, and use your favorite way to `run` a file in node.
*/

const legend = {
    'A': 0,
    'B': 1,
    'C': 2,
    'D': 3,
    'E': 4,
    'F': 5,
    'G': 6,
    'H': 7,
    'I': 8,
    'J': 9,
    'K': 10,
    'L': 11,
    'M': 12,
    'N': 13,
    'O': 14,
    'P': 15,
    'Q': 16,
    'R': 17,
    'S': 18,
    'T': 19,
    'U': 20,
    'V': 21,
    'W': 22,
    'X': 23,
    'Y': 24,
    'Z': 25
}

const inputSwapper = (input) => {
    if (typeof input === 'number') {
        for (let i = 0; i < 26; i++) {
            if (input === Object.values(legend)[i]) {
                return Object.keys(legend)[i]
            }
        }
    } else {
        return legend[`${input}`];
    }
}

module.exports = inputSwapper;

// console.log('return', inputSwapper('F'))