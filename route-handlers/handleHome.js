'use strict';


const handleHome = (request, response) => {
    try {
        response.status(200).send('Thank you for visiting! To test please follow these steps: <br> Paste the following url to encode a message ==> http://hometofollow/encode?message=your message here <br> ie ==> http://hometofollow/encode?message=enigma');
    } catch (err) {
        response.status(500).send('Something went wrong, what did Chance do?!')
    }
}

module.exports = handleHome