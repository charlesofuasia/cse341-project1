const router = require("express").Router();
const contactController = require("../controller/contact");

// #swagger.descriptions = "This end point retrieves all the contacts."
router.get(
  //  #swagger.tags = ["Contacts"]
  "/",
  contactController.getContacts
);
// #swagger.description = "Use the _id of a document to retrieve a contact"
router.get(
  // #swagger.tags = ["Contacts"]
  "/:id",
  contactController.getOneContact
);

// #swagger.description = "Add a new contact using json format"
router.post(
  // #swagger.tags = ["Contacts"]
  "/",
  contactController.addContact
);

// #swagger.description = "Update the details of a contact using the contact's _id"
router.put(
  // #swagger.tags = ["Contacts"]
  "/:id",
  contactController.updateContact
);

// #swagger.description = "Delete contact from database using the contact's _id"
router.delete(
  // #swagger.tags = ["Contacts"]
  "/:id",
  contactController.deleteContact
);

module.exports = router;
