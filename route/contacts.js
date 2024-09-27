const router = require("express").Router();
const contactController = require("../controller/contact");

router.get(
  //  #swagger.tags = ["Contacts"]
  // #swagger.descriptions = "This end point retrieves all the contacts."
  "/",
  contactController.getContacts
);

router.get(
  // #swagger.tags = ["Contacts"]
  // #swagger.description = "Use the _id of a document to retrieve a specific contact with matching _id"
  "/:id",
  contactController.getOneContact
);

router.post(
  // #swagger.tags = ["Contacts"]
  // #swagger.description = "Add a new contact using json format"
  "/",
  contactController.addContact
);

router.put(
  // #swagger.tags = ["Contacts"]
  // #swagger.description = "Update the details of a contact using the contact's _id"
  "/:id",
  contactController.updateContact
);

router.delete(
  // #swagger.tags = ["Contacts"]
  // #swagger.description = "Delete contact from database using the contact's _id"
  "/:id",
  contactController.deleteContact
);

module.exports = router;
