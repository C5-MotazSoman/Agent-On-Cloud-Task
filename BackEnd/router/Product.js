const express=require("express")
// import middleware
const authentication = require("../middleware/authentication")

// import controller
const {getAllProducts}=require("../controllers/product")

const productRoter=express.Router()

productRoter.get("/", authentication,getAllProducts)