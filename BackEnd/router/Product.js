const express=require("express")
// import middleware
const authentication = require("../middleware/authentication")

// import controller
const {getAllProducts, addProduct}=require("../controllers/product")

const productRoter=express.Router()


// endpoints 
productRoter.get("/", authentication,getAllProducts)
productRoter.post("/new",authentication,addProduct)






module.exports=productRoter