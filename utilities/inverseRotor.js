'use strict';
//This function is used to swap indexs of a rotor(key values)
//Useful for creating the output array from an input rotor array
const inverseRotor = arr => {
    const newArr = arr.map(item => {
        return [item[1], item[0]]
    })
    return newArr
}
console.log(inverseRotor(startArr))

module.exports = inverseRotor;