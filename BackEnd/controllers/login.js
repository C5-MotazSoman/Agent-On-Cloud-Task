const userModel = require("../models/UserSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const login = (req, res) => {
  const password = req.body.password;
  const email = req.body.email.toLowerCase();
  userModel
    .findOne({ email })
    .then(async (result) => {
      console.log(result);
      // check if the email is exsits
      if (!result) {
        return res.status(404).json({
          success: false,
          message: `the email doesn't exist`,
        });
      }
      try {
        // compare the password
        const vaild = await bcrypt.compare(password, result.password);
        // if not vaild the password incorrect
        if (!vaild) {
          return res.status(403).json({
            success: false,
            message: `the password you have entered is incorrect`,
          });
        }
        // creat token
        const payload = {
          userId: result._id,
          user: result.firstName,
        };
        const options = { expiresIn: "60m" };
        const token = await jwt.sign(payload,process.env.SECRET, options);
        res.status(200).json({
          success: true,
          message: `login successfully`,
          token: token,
        });
      } catch (error) {
        throw new Error(error.message)
      }
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: `Server Error`,
        err: err.message,
      });
    });
};
module.exports = { login };
