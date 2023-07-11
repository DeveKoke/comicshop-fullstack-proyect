require("dotenv").config();

const mongoose = require("mongoose");

if (process.env.MG_HOST && process.env.MG_PORT && process.env.MG_DATABASE) {
  mongoose
    .connect(
      `mongodb://${process.env.MG_HOST}:${process.env.MG_PORT}/${process.env.MG_DATABASE}`
    )
    .then(() => console.log("Now connected to MongoDB local server!"))
    .catch((err) => console.error("Something went wrong", err));
} else {
  if (process.env.MG_PASSWORD) {
    mongoose
      .connect(
            // `mongodb+srv://jorgedevelop:${process.env.MG_PASSWORD}@atlascluster.mh8lqdh.mongodb.net/?retryWrites=true&w=majority`)
            `mongodb+srv://devekoke:${process.env.MG_PASSWORD}@atlascluster.mh8lqdh.mongodb.net/`)
      .then(() => console.log("Now connected to MongoDB Cloud Server!"))
      .catch((err) => console.error("Something went wrong", err));
  } else {
    console.log("Database does not exist!");
  }
}

module.exports = mongoose;