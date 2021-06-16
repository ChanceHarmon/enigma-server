'use strict';

// Need to revist this, it works in testing, but the input and values of positive or negative may change completely. No new notes currently

const rotorI = require('../original-rotors/rotorI.js')

//Helper functions to vertically rotate indexes
const positiveOffsetInput = (arr) => {
    // moves index 1 of each array clockwise while keeping index 0 in place

    let temp = arr[arr.length - 1][1]
    for (let i = arr.length - 1; i > 0; i--) {
        arr[i][1] = arr[i - 1][1]
    }
    arr[0][1] = temp
    return arr
}

const negativeOffsetInput = (arr) => {
    // moves index 1 of each array counterclockwise while keeping index 0 in place

    let temp = arr[0][1]
    for (let i = 0; i < arr.length - 1; i++) {
        arr[i][1] = arr[i + 1][1]
    }
    arr[arr.length - 1][1] = temp
    return arr
}


const offsetRotor = (rotor) => {
    /*
    Take in a rotor

    take an input that determines the offset amount
        in the rotor, just have to look for it

    perform negative or positive rotation of indexs of the outputSchedule

    return  the rotor with the offset

    */
    if (rotor.offset > 0) {
        let tempOffset = rotor.offset;
        while (tempOffset > 0) {
            rotor.positions.inputSchedule = positiveOffsetInput(rotor.positions.inputSchedule)
            rotor.positions.outputSchedule = negativeOffsetInput(rotor.positions.outputSchedule)
            tempOffset -= 1;
        }
        return rotor;
    }
    else if (rotor.offset < 0) {
        let tempOffset = rotor.offset;
        while (tempOffset < 0) {
            rotor.positions.inputSchedule = negativeOffsetInput(rotor.positions.inputSchedule)
            rotor.positions.outputSchedule = positiveOffsetInput(rotor.positions.outputSchedule)
            tempOffset += 1;
        }
        return rotor;
    }
    return rotor;
};

module.exports = offsetRotor;
// console.log(offsetRotor(rotorI))
// let testRotor = rotorI
// testRotor.offset = 4
// let tempRotor = offsetRotor(testRotor)
// console.log(tempRotor.positions.inputSchedule, tempRotor.positions.outputSchedule)