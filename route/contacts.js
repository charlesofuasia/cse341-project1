const router = require("express").Router();
const contactController = require("../controller/contact");

router.get("/", contactController.getContacts);

router.get("/:id", contactController.getOneContact);

module.exports = router;
