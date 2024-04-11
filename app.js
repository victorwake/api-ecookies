const express = require('express');
const cookieParser = require('cookie-parser');
const dataRoutes = require('./src/router/index')
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const fs = require('fs');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

app.use(cors({
  origin: 'http://ecookies_js.localhost',
  credentials: true, // Permite enviar cookies
}));
app.use('/api', dataRoutes);



module.exports = app;