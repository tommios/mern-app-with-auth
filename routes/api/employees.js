const express = require("express");
const passport = require("passport");
const router = express.Router();

const controller = require("../../controllers/employees.controller");

// @route POST api/employees/
// @desc Create and Save a new Employee
// @access Public
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  controller.create
);

// @route GET api/employees/
// @desc Retrieve all Employees
// @access Public
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  controller.findAll
);

// @route GET api/employees/:id
// @desc Retrieve a single Employee with id
// @access Public
router.get(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  controller.findOne
);

// @route PATCH api/employees/:id
// @desc Update a Employee with id
// @access Public
router.patch(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  controller.update
);

// @route DELETE api/employees/:id
// @desc Delete a Employee with id
// @access Public
router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  controller.delete
);

// @route DELETE api/employees/
// @desc Delete all Employees
// @access Public
router.delete(
  "/",
  passport.authenticate("jwt", { session: false }),
  controller.deleteAll
);

module.exports = router;
