'use strict';

const inverseRotor = arr => {
    const newArr = arr.map(item => {
        return [item[1], item[0]]
    })
    return newArr
}
console.log(inverseRotor(startArr))

module.exports = inverseRotor;