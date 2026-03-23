'use strict';


const handleHome = (request, response) => {
  try {
    response.status(200).send('Thank you for visiting! To test the encoder, add a message to the URL like this:<br>/encode?message=your message here<br> Example:<br> /encode?message=enigma');
  } catch (err) {
    response.status(500).send('Something went wrong, what did Chance do?!')
  }
}

module.exports = handleHome