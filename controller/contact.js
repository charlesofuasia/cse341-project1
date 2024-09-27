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

const addContact = async (req, res) => {
  const contact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday,
  };
  const response = await mongodb
    .getDatabase()
    .db()
    .collection("contacts")
    .insertOne(contact);
  if (response.acknowledged) {
    res.status(200).send("New contact added");
  } else {
    res
      .status(500)
      .json(response.error || "Error occured while adding response.");
  }
};

const updateContact = async (req, res) => {
  const contact_id = new ObjectId(req.params.id);
  const contact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday,
  };
  const response = await mongodb
    .getDatabase()
    .db()
    .collection("contacts")
    .replaceOne({ _id: contact_id }, contact);
  if (response.acknowledged) {
    res.status(200).send("Updated contact added");
  } else {
    res
      .status(500)
      .json(response.error || "Error occured while adding response.");
  }
};

const deleteContact = async (req, res) => {
  const contact_id = new ObjectId(req.params.id);
  const response = await mongodb
    .getDatabase()
    .db()
    .collection("contacts")
    .deleteOne({ _id: contact_id });
  if (response.acknowledged) {
    res.status(200).send("contact deleted successfully");
  } else {
    res.status(500).json(response.error);
  }
};

module.exports = {
  getContacts,
  getOneContact,
  addContact,
  updateContact,
  deleteContact,
};
