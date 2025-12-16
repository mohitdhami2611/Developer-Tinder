const express = require("express");
const app = express();

app.get("/line", (req, res) => {
  res.send("hello how are you");
});

// Default route for all other paths
app.use((req, res) => {
  res.send("hello the port is active and well maintained by me and also helping in maintaining for my streak");
});

app.listen(3000, () => {
  console.log("the server on port 3000 is started and all good to run for it and so on  and on");
});