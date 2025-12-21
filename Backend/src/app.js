const express = require("express");
const app = express();
const connectDb = require("./Config/Database")

connectDb()
  .then(() => {
    console.log("database connected succesfully");
    app.listen(7777,() => {
        console.log("server is successfully listening on port number 7777")
    })
  })
  .catch((err) => {
    console.error("dtabase cannot be connected!!");
  });