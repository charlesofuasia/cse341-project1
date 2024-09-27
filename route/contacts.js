const router = require("express").Router();
const contactController = require("../controller/contact");
router.get("/", contactController.getContacts);

router.get("/:id", contactController.getOneContact);

router.post("/", contactController.addContact);

router.put("/:id", contactController.updateContact);

router.delete("/:id", contactController.deleteContact);

module.exports = router;
