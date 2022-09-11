const jwt = require("jsonwebtoken");
// function to check if logged in

const authentication = (req, res, next) => {
  try {
    // check the token first is entered or not
    if (!req.headers.authorization) {
      return res.status(403).json({
        message: `forbidden`,
      });
    }
    // check the token if vaild or not
    const token = req.headers.authorization.split(" ").pop();
    jwt.verify(token, process.env.SECRET, (err, result) => {
      if (err) {
        res.status(403).json({
          success: false,
          message: `the token is invalid or expired`,
        });
      } else {
        req.token = result;
        next();
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: `server error`,
      error: error.message,
    });
  }
};
module.exports = authentication;
