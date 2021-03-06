require('dotenv').config();
const PORT = 3000;
const express = require('express');
const morgan = require('morgan');
const { client } = require('./db');
const server = express();
client.connect();
server.use(morgan('dev'));
server.use(express.json())

const apiRouter = require('./api');
server.use('/api', apiRouter)

server.listen(PORT, () => {
  console.log('The server is up on port', PORT)
});