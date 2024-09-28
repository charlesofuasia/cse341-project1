const router = require("express").Router();
const contactController = require("../controller/contact");

// #swagger.description = "This endpoint retrieves all the contacts"
router.get(
  // #swagger.tags = ["Contacts"]
  "/",
  contactController.getContacts
);

// #swagger.description = "This endpoint retrieves a specific contact using the contacts _id"
router.get(
  // #swagger.tags = ["Contacts"]
  "/:id",
  contactController.getOneContact
);

// #swagger.description = "This endpoint adds a new contact to contacts"
router.post(
  // #swagger.tags = ["Contacts"]
  "/",
  contactController.addContact
);

// #swagger.description = "Use this endpoint to modify the details of a contact using contact's _id"
router.put(
  // #swagger.tags = ["Contacts"]
  "/:id",
  contactController.updateContact
);

// #swagger.description = "Use this endpoint to delete contact from contacts using the contact's _id"
router.delete(
  // #swagger.tags = ["Contacts"]
  "/:id",
  contactController.deleteContact
);

module.exports = router;
