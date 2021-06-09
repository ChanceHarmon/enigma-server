'use strict';

// Not quite sure how to use these the best, but want to get the orginal wirings down in code

const rotorIII = {
    start_position: 0,
    offset: 0,
    positions: {
        inputSchedule: [
            ['A', 'B'], ['B', 'D'],
            ['C', 'F'], ['D', 'H'],
            ['E', 'J'], ['F', 'L'],
            ['G', 'C'], ['H', 'P'],
            ['I', 'R'], ['J', 'T'],
            ['K', 'X'], ['L', 'V'],
            ['M', 'Z'], ['N', 'N'],
            ['O', 'Y'], ['P', 'E'],
            ['Q', 'I'], ['R', 'W'],
            ['S', 'G'], ['T', 'A'],
            ['U', 'K'], ['V', 'M'],
            ['W', 'U'], ['X', 'S'],
            ['Y', 'Q'], ['Z', 'O']
        ],
        outputSchedule: [
            ['B', 'A'], ['D', 'B'],
            ['F', 'C'], ['H', 'D'],
            ['J', 'E'], ['L', 'F'],
            ['C', 'G'], ['P', 'H'],
            ['R', 'I'], ['T', 'J'],
            ['X', 'K'], ['V', 'L'],
            ['Z', 'M'], ['N', 'N'],
            ['Y', 'O'], ['E', 'P'],
            ['I', 'Q'], ['W', 'R'],
            ['G', 'S'], ['A', 'T'],
            ['K', 'U'], ['M', 'V'],
            ['U', 'W'], ['S', 'X'],
            ['Q', 'Y'], ['O', 'Z']
        ]
    }

}
module.exports = rotorIII;