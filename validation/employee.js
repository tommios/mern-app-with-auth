const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateEmployeeInput(data) {
  let errors = {};

  // Convert empty fields to an empty string so we can use validator functions
  data.firstname = !isEmpty(data.firstname) ? data.firstname : "";
  data.middlename = !isEmpty(data.middlename) ? data.middlename : "";
  data.lastname = !isEmpty(data.lastname) ? data.lastname : "";
  data.gender = !isEmpty(data.gender) ? data.gender : "";
  data.contactinfo = !isEmpty(data.contactinfo) ? data.contactinfo : "";
  data.birthday = !isEmpty(data.birthday) ? data.birthday : "";
  data.salary = !isEmpty(data.salary) ? data.salary : "";
  data.position = !isEmpty(data.position) ? data.position : "";

  // FirstName checks
  if (Validator.isEmpty(data.firstname)) {
    errors.firstname = "FirstName field is required";
  }

  // LastName checks
  if (Validator.isEmpty(data.lastname)) {
    errors.lastname = "LastName field is required";
  }

  // Gender checks
  if (Validator.isEmpty(data.gender)) {
    errors.gender = "Gender field is required";
  }

  // Birthday checks
  if (Validator.isEmpty(data.birthday)) {
    errors.birthday = "Birthday field is required";
  } else if (!Validator.isDate(data.birthday)) {
    errors.birthday =
      "Birthday is invalid. Check if the input is a valid date YYYY/MM/DD";
  }

  // Salary checks
  if (Validator.isEmpty(data.salary)) {
    errors.salary = "Salary field is required";
  } else if (!Validator.isNumeric(data.salary, { no_symbols: true })) {
    errors.salary =
      "Salary is invalid. The field must not contain characters, only numbers";
  }

  // Position checks
  if (Validator.isEmpty(data.position)) {
    errors.position = "Position field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
