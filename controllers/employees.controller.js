// Load input validation
const validateEmployeeInput = require("../validation/employee");

// Load Employee model
const Employee = require("../models/Employee.model");

// Create and Save a new Employee
exports.create = (req, res) => {
  // Form validation
  const { errors, isValid } = validateEmployeeInput(req.body);

  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  // Create a Employee
  const employee = new Employee(
    ({
      firstname,
      middlename,
      lastname,
      gender,
      contactinfo,
      birthday,
      salary,
      position,
    } = req.body)
  );

  // Save Employee in the database
  employee
    .save(employee)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Employee.",
      });
    });
};

// Retrieve all Employees/ find by firstname from the database:
exports.findAll = (req, res) => {
  const { firstname } = req.query;

  let condition = firstname
    ? {
        firstname: { $regex: new RegExp(firstname), $options: "i" },
      }
    : {};

  Employee.find(condition)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving employees.",
      });
    });
};

// Find a single Employee with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Employee.findById(id)
    .then((data) => {
      if (!data)
        res.status(404).send({ message: "Not found Employee with id " + id });
      else res.send(data);
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: "Error retrieving Employee with id=" + id });
    });
};

// Update a Employee by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!",
    });
  }

  const id = req.params.id;

  Employee.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Employee with id=${id}. Maybe Employee was not found!`,
        });
      } else res.send({ message: "Employee was updated successfully." });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Employee with id=" + id,
      });
    });
};

// Delete a Employee with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Employee.findByIdAndRemove(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Employee with id=${id}. Maybe Employee was not found!`,
        });
      } else {
        res.send({
          message: "Employee was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Employee with id=" + id,
      });
    });
};

// Delete all Employees from the database.
exports.deleteAll = (req, res) => {
  Employee.deleteMany({})
    .then((data) => {
      res.send({
        message: `${data.deletedCount} Employees were deleted successfully!`,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all employees.",
      });
    });
};
