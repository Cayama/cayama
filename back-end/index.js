require('dotenv/config');
const cors = require('cors');
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const httpFactory = require('./httpFactory');
const socketFactory = require('./socket/socketFactory');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const httpServer = http.createServer(app);

const { io } = socketFactory(httpServer);

httpFactory(app, io);

const PORT = process.env.PORT || 3001;
httpServer.listen(PORT, () => console.log(`Listening on ${PORT}`));
