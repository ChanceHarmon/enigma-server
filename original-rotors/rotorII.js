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
            ['A', 'A'], ['B', 'J'],
            ['C', 'P'], ['D', 'C'],
            ['E', 'Z'], ['F', 'W'],
            ['G', 'R'], ['H', 'L'],
            ['I', 'F'], ['J', 'B'],
            ['K', 'D'], ['L', 'K'],
            ['M', 'O'], ['N', 'T'],
            ['O', 'Y'], ['P', 'U'],
            ['Q', 'Q'], ['R', 'G'],
            ['S', 'E'], ['T', 'N'],
            ['U', 'H'], ['V', 'X'],
            ['W', 'M'], ['X', 'I'],
            ['Y', 'V'], ['Z', 'S']
        ]

    }
}
module.exports = rotorII;