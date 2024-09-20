const mongodb = require("../database/dbconnection");
const ObjectId = require("mongodb").ObjectId;

const getContacts = async (req, res) => {
  try {
    const result = await mongodb
      .getDatabase()
      .db()
      .collection("contacts")
      .find();
    result.toArray().then((contacts) => {
      res.setHeader("Content-Type", "application/json");
      res.status(201).json(contacts);
    });
  } catch (error) {
    console.error(error);
  }
};

const getOneContact = async (req, res) => {
  try {
    const userId = new ObjectId(req.params.id);
    const result = await mongodb
      .getDatabase()
      .db()
      .collection("contacts")
      .find({ _id: userId });
    result.toArray().then((contacts) => {
      res.setHeader("Content-Type", "application/json");
      res.status(201).json(contacts[0]);
    });
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  getContacts,
  getOneContact,
};
