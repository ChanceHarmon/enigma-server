'use strict';
/*
All Information for Rotor configs taken from https://www.codesandciphers.org.uk/enigma/rotorspec.htm for historical accuracy
*/

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
            ['A', 'U'], ['B', 'W'],
            ['C', 'Y'], ['D', 'G'],
            ['E', 'A'], ['F', 'D'],
            ['G', 'F'], ['H', 'P'],
            ['I', 'V'], ['J', 'Z'],
            ['K', 'B'], ['L', 'E'],
            ['M', 'C'], ['N', 'K'],
            ['O', 'M'], ['P', 'T'],
            ['Q', 'H'], ['R', 'X'],
            ['S', 'S'], ['T', 'L'],
            ['U', 'R'], ['V', 'I'],
            ['W', 'N'], ['X', 'Q'],
            ['Y', 'O'], ['Z', 'J']
        ]

    }
}
module.exports = rotorI;