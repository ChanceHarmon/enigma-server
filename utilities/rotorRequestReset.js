'use strict';


//For now, this is going to be based on the 3 rotors in a fixed set to make it easier, will need to be made dynamic at some point

const rotorRotateCW = require('./rotorRotateCW.js');

const rotorRequestReset = (arr) => {
    while (arr[0].positions.inputSchedule[0][0] !== 'A') {
        rotorRotateCW(arr[0])
    }
    while (arr[1].positions.inputSchedule[0][0] !== 'A') {
        rotorRotateCW(arr[0])
    }
    while (arr[1].positions.inputSchedule[0][0] !== 'A') {
        rotorRotateCW(arr[0])
    }
    // console.log('arr after rest', arr[0].positions)
    return arr;

}

module.exports = rotorRequestReset;