require('dotenv').config({ silent: true });
const express = require('express');
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');

const PORT = process.argv[2] || process.env.PORT || 3000
const app = express();

const isDev = !('NODE_ENV' in process.env) && require('dotenv').config() && true;
app.use(logger(isDev ? 'dev' : 'common'));

app.set(logger('dev'));
app.use(bodyParser.json());

app.listen(PORT, () => console.log('Welcome to port: ', PORT));
