'use strict';

// Not quite sure how to use these the best, but want to get the orginal wirings down in code

const rotorThree = {
    start_position: 'A',
    offset: {
        start_letter: null,
        amount: null
    },
    positions: {
        'A': 'B',
        'B': 'D',
        'C': 'F',
        'D': 'H',
        'E': 'J',
        'F': 'L',
        'G': 'C',
        'H': 'P',
        'I': 'R',
        'J': 'T',
        'K': 'X',
        'L': 'V',
        'M': 'Z',
        'N': 'N',
        'O': 'Y',
        'P': 'E',
        'Q': 'I',
        'R': 'W',
        'S': 'G',
        'T': 'A',
        'U': 'K',
        'V': 'M',
        'W': 'U',
        'X': 'S',
        'Y': 'Q',
        'Z': 'O'
    }
}
module.exports = rotorThree;