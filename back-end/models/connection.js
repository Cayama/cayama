require('dotenv/config');
const mongoClient = require('mongodb').MongoClient;

const { MONGO_DB_URL, DB_NAME } = process.env;

module.exports = () =>
  mongoClient
    .connect(MONGO_DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((conn) => conn.db(DB_NAME))
    .catch((err) => {
      console.log(err);
      process.exit(1);
    });
