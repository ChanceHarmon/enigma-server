'use strict';

require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const pg = require('pg');
const superagent = require('superagent');

const PORT = process.env.PORT;
const DATABASE_URL = process.env.DATABASE_URL;

const client = new pg.Client(DATABASE_URL);
client.on('error', err => console.error(err))



app.use(cors());


app.get('/', (request, response) => response.send('Hello World!'));

client.connect()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Crackin Up ${PORT}`)
        })
    })