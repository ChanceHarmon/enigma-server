'use strict';

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