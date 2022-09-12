const express=require("express")
// import middleware
const authentication = require("../middleware/authentication")

// import controller
const {getAllProducts, addProduct,updatProductById,deleteProductById}=require("../controllers/product")

const productRoter=express.Router()


// endpoints :
// endpoint to get all product 
productRoter.get("/", authentication,getAllProducts)
// end point to add product 
productRoter.post("/new",authentication,addProduct)
// endpoint to updat product
productRoter.put("/:_id",authentication,updatProductById)
// endpoint to delete product
productRoter.delete("/delete/:_id",authentication,deleteProductById)





module.exports=productRoter