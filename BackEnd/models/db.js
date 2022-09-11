// require mongoose after install
const mongoose = require("mongoose");
// connect to mongo DB
mongoose
  .connect(process.env.DB_URI)
  .then(() => {
    console.log("DB Ready to use");
  })
  .catch((error) => {
    console.log(error);
  });
