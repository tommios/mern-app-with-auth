const express = require("express");
const router = express.Router();
const controller = require("../../controllers/signin.controller");

// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.post("/login", controller.signin);

module.exports = router;
