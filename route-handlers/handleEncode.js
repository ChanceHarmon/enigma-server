'use strict';
const handleMultipleCharacters = require('../sequences/handleMultipleCharacters.js');
const rotorRequestReset = require('../utilities/rotorRequestReset.js');

const rotorI = require('../original-rotors/rotorI.js')
const rotorII = require('../original-rotors/rotorII.js')
const rotorIII = require('../original-rotors/rotorIII.js')
let rotorArray = [rotorI, rotorII, rotorIII];

const handleEncode = (request, response) => {
    try {
        rotorArray = rotorRequestReset(rotorArray)
        const input = request.query.message;
        console.log('arr in encode req', rotorArray[0].positions)
        const encodedMessage = handleMultipleCharacters(input, rotorArray);
        response.status(200).send(`Your encode message ==> ${encodedMessage} <br> Copy the below url into your browser to see the decoded version <br>http://homebasetofollow/decode?message=${encodedMessage}`)
    } catch (err) {
        response.status(500).send('Something went wrong, what did Chance do?!')
    }
}

module.exports = handleEncode;