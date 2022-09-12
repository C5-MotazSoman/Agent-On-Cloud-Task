const express=require("express")
// import middleware
const authentication = require("../middleware/authentication")

// import controller
const {getAllProducts, addProduct,updatProductById,deleteProductById,getProductById}=require("../controllers/product")

const productRoter=express.Router()


// endpoints :
// endpoint to get all product 
productRoter.get("/",getAllProducts)
// end point to add product 
productRoter.post("/new",authentication,addProduct)
// endpoint to updat product
productRoter.put("/:_id",authentication,updatProductById)
// endpoint to delete product
productRoter.delete("/delete/:_id",authentication,deleteProductById)
// endpoint to get single product
productRoter.get("/single/:_id",getProductById)





module.exports=productRoter