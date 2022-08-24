const express = require("express");
const router = express.Router();
const {
  contactform,

  contactList,
} = require("../controllers/auth");

router.get("/get", contactList);

router.post("/home", contactform);

module.exports = router;
