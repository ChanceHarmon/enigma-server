'use strict';

// Not quite sure how to use these the best, but want to get the orginal wirings down in code

const rotorOne = {
    start_position: 0,
    offset: {
        start_letter: null,
        amount: null
    },
    positions: [
        ['A', 'E'], ['B', 'K'],
        ['C', 'M'], ['D', 'F'],
        ['E', 'L'], ['F', 'G'],
        ['G', 'D'], ['H', 'Q'],
        ['I', 'V'], ['J', 'Z'],
        ['K', 'N'], ['L', 'T'],
        ['M', 'O'], ['N', 'W'],
        ['O', 'Y'], ['P', 'H'],
        ['Q', 'X'], ['R', 'U'],
        ['S', 'S'], ['T', 'P'],
        ['U', 'A'], ['V', 'I'],
        ['W', 'B'], ['X', 'R'],
        ['Y', 'C'], ['Z', 'J']
    ]
}
module.exports = rotorOne;