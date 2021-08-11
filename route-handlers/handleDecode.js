'use strict';

const handleDecoding = require('../sequences/handleDecoding.js');
const rotorRequestReset = require('../utilities/rotorRequestReset.js')
const rotorI = require('../original-rotors/rotorI.js')
const rotorII = require('../original-rotors/rotorII.js')
const rotorIII = require('../original-rotors/rotorIII.js');

let rotorArray = [rotorI, rotorII, rotorIII];

const handleDecode = (request, response) => {
    try {
        const input = request.query.message.toUpperCase();
        rotorArray = rotorRequestReset(rotorArray)
        // console.log('in decode route', input)
        const decodedMessage = handleDecoding(input, rotorArray);
        response.status(200).send(`Your decoded message ==> ${decodedMessage} <br> Visit the homepage to get started with another encoded message <br> https://chances-enigma-server.herokuapp.com/`)
    } catch (err) {
        response.status(500).send('Something went wrong, what did Chance do?!')
    }
}

module.exports = handleDecode;