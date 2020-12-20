const cors = require('cors');
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const httpFactory = require('../../httpFactory');
const socketFactory = require('../../socket/socketFactory');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const httpServer = http.createServer(app);

const { io } = socketFactory(httpServer);

httpFactory(app, io);

module.exports = httpServer;
