const http = require('http');
const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const httpFactory = require('../httpFactory');
const socketFactory = require('../socket/socketFactory');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const httpServer = http.createServer(app);

const { io } = socketFactory(app);

httpFactory(app, io);

module.exports = httpServer;
