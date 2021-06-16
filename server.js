'use strict';

/*
Currently server is just a skeleton.
It does respond to basic requests.
It does connect to a postgres DB if you have one locally you can setup in your enviroment variables.

*/

require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const pg = require('pg');
const superagent = require('superagent');

const PORT = process.env.PORT;
const DATABASE_URL = process.env.DATABASE_URL;

const client = new pg.Client(DATABASE_URL);
client.on('error', err => console.error(err));

const rotorOne = require('./original-rotors/rotorI.js');
const rotorTwo = require('./original-rotors/rotorII.js');
const rotorThree = require('./original-rotors/rotorIII.js');

app.use(cors());


app.get('/', (request, response) => response.send({ rotorOne, rotorTwo, rotorThree }));

client.connect()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Crackin Up ${PORT}`)
        });
    });

