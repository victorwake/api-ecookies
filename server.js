const express = require('express');
const dataRoutes = require('./src/router/index')
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const fs = require('fs');
const dotenv = require('dotenv');
dotenv.config();

const server = express();
server.use(cors());
server.use(helmet());
server.use(express.json());
server.use(morgan('dev'));
server.use(express.json());

server.use(cors({
  origin: 'http://ecookies_js.localhost',
  credentials: true, // Permite enviar cookies
}));
server.use('/api', dataRoutes);



module.exports = server;