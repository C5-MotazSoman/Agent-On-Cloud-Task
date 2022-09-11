const mongoose = require("mongoose");
// require bcrypt to hash password
const bcrypt = require("bcrypt");

// create userSChema
const userSChema = new mongoose.Schema({
  firstName: { type: String },
  lastName: { type: String },
  age: { type: Number },
  country: { type: String },
  email: { type: String, require: true, unique: true },
  password: { type: String, require: true },
});
// befor save data need to hash password
userSChema.pre("save", async function () {
  this.email = this.email.toLowerCase();
  this.password = await bcrypt.hash(this.password, 10);
});
// export mongoos model
module.exports=mongoose.model("User",userSChema)