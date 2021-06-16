'use strict';
//Useful for creating the output rotor array from an input rotor array

/*
Function Purpose:
    Take in an array, and return a new array with the indexes of the inner arrays swapped.

Function Input:
    Array: Contains arrays with two values for each index of the input array. 

Function Output:
    Array: Contains arrays with two values reversed from original indexes of input array.

Run Function:
    N / A:
        Unless you want to test the file in your own style 
*/
const inverseRotor = arr => {
    const newArr = arr.map(item => {
        return [item[1], item[0]]
    })
    return newArr
}
module.exports = inverseRotor;