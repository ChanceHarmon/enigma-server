'use strict';

// Not quite sure how to use these the best, but want to get the orginal wirings down in code

const rotorII = {
    start_position: 0,
    offset: 0,
    positions: {
        inputSchedule: [
            ['A', 'A'], ['B', 'J'],
            ['C', 'D'], ['D', 'K'],
            ['E', 'S'], ['F', 'I'],
            ['G', 'R'], ['H', 'U'],
            ['I', 'X'], ['J', 'B'],
            ['K', 'L'], ['L', 'H'],
            ['M', 'W'], ['N', 'T'],
            ['O', 'M'], ['P', 'C'],
            ['Q', 'Q'], ['R', 'G'],
            ['S', 'Z'], ['T', 'N'],
            ['U', 'P'], ['V', 'Y'],
            ['W', 'F'], ['X', 'V'],
            ['Y', 'O'], ['Z', 'E']
        ],
        outputSchedule: [
            ['A', 'A'], ['J', 'B'],
            ['D', 'C'], ['K', 'D'],
            ['S', 'E'], ['I', 'F'],
            ['R', 'G'], ['U', 'H'],
            ['X', 'I'], ['B', 'J'],
            ['L', 'K'], ['H', 'L'],
            ['W', 'M'], ['T', 'N'],
            ['M', 'O'], ['C', 'P'],
            ['Q', 'Q'], ['G', 'R'],
            ['Z', 'S'], ['N', 'T'],
            ['P', 'U'], ['Y', 'V'],
            ['F', 'W'], ['V', 'X'],
            ['O', 'Y'], ['E', 'Z']
        ]

    }
}
module.exports = rotorII;