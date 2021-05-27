require('./config/mongo.config');
const express = require("express");
const morgan = require('morgan');

require('dotenv').config();
require('colors');

const PORT = process.env.PORT;

const app = express();
app.use(morgan('dev'));
app.use(express.json());

require('./routes/restaurant.route')(app)

app.listen(PORT, () => { `server listenning on ${PORT}`.green.bold });