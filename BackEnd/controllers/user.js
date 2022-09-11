// requer usermodel
const userModel = require("../models/UserSchema");

// this function to creates a new  user
const register = (req, res) => {
  const { firstName, lastName, age, country, email, password } = req.body;
  const user = new userModel({
    firstName,
    lastName,
    age,
    country,
    email,
    password,
  });
  user
    .save()
    .then((result) => {
      res.status(201).json({
        success: true,
        message: `account created successfully`,
        result,
      });
    })
    .catch((err) => {
      // handel if the email is exists
      if (err.keyPattern) {
        return res
          .status(409)
          .json({ success: false, message: `the email already exists` });
      }

      res.status(500).json({
        success: false,
        message: `server error`,
        err,
      });
      console.log(err);
    });
};
module.exports = { register };
