const env = require("dotenv").config();

const MongoClient = require("mongodb").MongoClient;

let database;

const initDB = (callback) => {
  if (database) {
    console.log("Databse already connected");
    return callback(null, database);
  }
  MongoClient.connect(process.env.MONGODB_URI)
    .then((client) => {
      database = client;
      callback(null, database);
    })
    .catch((e) => {
      callback(e);
    });
};

const getDatabase = () => {
  if (!database) {
    throw Error("Database not initialized");
  }
  return database;
};

module.exports = {
  initDB,
  getDatabase,
};
