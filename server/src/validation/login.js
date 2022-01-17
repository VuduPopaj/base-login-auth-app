import validator from "validator";
import _ from "lodash";

const validateLoginInput = (data) => {
  let errors = {};

  data.email = data.email ? data.email : "";
  data.password = data.password ? data.password : "";

  if (validator.isEmpty(data.email)) {
    errors.email = "This field is required!";
  } else if (!validator.isEmail(data.email)) {
    errors.email = "Please fill valid email address!";
  }

  if (validator.isEmpty(data.password)) {
    errors.password = "This field is required!";
  }

  return {
    errors,
    isValid: _.isEmpty(errors),
  };
};

export default validateLoginInput;
