'use strict';

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
        // console.log('in text swapper', input, Object.values(legend))
        for (let i = 0; i < 26; i++) {
            if (input === Object.values(legend)[i]) {
                // console.log('hello', Object.keys(legend)[i])
                return Object.keys(legend)[i]
            }
        }
    } else {
        // console.log('input swapper', legend[`${input}`])
        return legend[`${input}`];
    }
}

module.exports = inputSwapper;

// console.log('return', inputSwapper('F'))