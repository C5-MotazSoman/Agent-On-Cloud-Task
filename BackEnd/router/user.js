// require express
const express = require("express");
// require user controller
const { register } = require("../controllers/user");
// define Router
const userRouter = express.Router();

// add endpoint on the router
userRouter.post("/", register);

module.exports=userRouter
