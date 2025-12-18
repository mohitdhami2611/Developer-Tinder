const express = require("express");
const app = express();

  app.use("/user", (req,res) => {
    res.send("response1")
  },
  (req,res) => {
    res.send("response2")
  }
)


app.listen(3000, () => {
  console.log("the server on port 3000 is started and all good to run for it and so on  and on");
});