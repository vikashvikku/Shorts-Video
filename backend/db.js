const mongoose = require("mongoose");

const mongoUserPass = require("./nodemon.json");

const connection_url = mongoUserPass.env.mongourl;

module.exports.connect = () => {
  mongoose
    .connect(connection_url, {
      useCreateIndex: true,
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })
    .then(() => console.log("connect successfully to the database"))
    .catch((err) => console.log("Error connecting to db \n", err));
};
