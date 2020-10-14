require('dotenv/config');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const { errorMiddleware } = require('./middlewares/index');
const { usersRoutes, storesRoutes } = require('./routes/index');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname + '/uploads')));

app.use('/user', usersRoutes);
app.use('/store', storesRoutes);

app.all('*', (_req, res) => res.status(404).json({ message: 'page not found'}));

app.use(errorMiddleware);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
