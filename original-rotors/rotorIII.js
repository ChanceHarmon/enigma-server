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
            ['A', 'T'], ['B', 'A'],
            ['C', 'G'], ['D', 'B'],
            ['E', 'P'], ['F', 'C'],
            ['G', 'S'], ['H', 'D'],
            ['I', 'Q'], ['J', 'E'],
            ['K', 'U'], ['L', 'F'],
            ['M', 'V'], ['N', 'N'],
            ['O', 'Z'], ['P', 'H'],
            ['Q', 'Y'], ['R', 'I'],
            ['S', 'X'], ['T', 'J'],
            ['U', 'W'], ['V', 'L'],
            ['W', 'R'], ['X', 'K'],
            ['Y', 'O'], ['Z', 'M']
        ]
    }

}
module.exports = rotorIII;