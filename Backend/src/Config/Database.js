const mongoose = require("mongoose");

const connectDb = async () => {
  await mongoose.connect(
    "mongodb+srv://mohitdhami2611_db_user:offkb15BHc3WzItd@cluster0.h2suy5y.mongodb.net/devTinder"
  );
};


module.exports = connectDb;
