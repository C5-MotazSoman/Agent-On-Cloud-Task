const express=require("express")
// import login controller
const {login}=require("../controllers/login")

// create login Router
const loginRouter=express.Router()
// endpoint for login 
loginRouter.post("/",login)

module.exports=loginRouter