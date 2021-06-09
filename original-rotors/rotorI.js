'use strict';

const rotorI = {
    start_position: 0,
    offset: 0,
    positions: {
        inputSchedule: [
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
        ],
        outputSchedule: [
            ['E', 'A'], ['K', 'B'],
            ['M', 'C'], ['F', 'D'],
            ['L', 'E'], ['G', 'F'],
            ['D', 'G'], ['Q', 'H'],
            ['V', 'I'], ['Z', 'J'],
            ['N', 'K'], ['T', 'L'],
            ['O', 'M'], ['W', 'N'],
            ['Y', 'O'], ['H', 'P'],
            ['X', 'Q'], ['U', 'R'],
            ['S', 'S'], ['P', 'T'],
            ['A', 'U'], ['I', 'V'],
            ['B', 'W'], ['R', 'X'],
            ['C', 'Y'], ['J', 'Z']
        ]

    }
}
module.exports = rotorI;