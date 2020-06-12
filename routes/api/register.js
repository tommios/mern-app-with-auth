const express = require("express");
const router = express.Router();
const controller = require("../../controllers/signup.controller");

// @route POST api/users/register
// @desc Register user
// @access Public
router.post("/register", controller.signup);

module.exports = router;
