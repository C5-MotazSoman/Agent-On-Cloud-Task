// require express after install it to build server
const express= require("express")
// reguire cors for more scurity in API`s 
const cors=require("cors")
//  require dotenv to can read .env file 
require("dotenv").config()
require("./models/db")
const app =express()
// app use cors
app.use(cors())
//  app use json
app.use(express.json())

// import the Routers
const userRouter=require("./router/user")






// Routers middleware
app.use("/user",userRouter)








const port = process.env.PORT
app.listen(port,()=>{
    console.log(`server run on port ${port}`);
})