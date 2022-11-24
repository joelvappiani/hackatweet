const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://djovap:djovap@cluster0.watf3oo.mongodb.net/hackatweet";

mongoose
  .connect(connectionString, { connectTimeoutMS: 2000 })
  .then(() => console.log("Database connected"))
  .catch((error) => console.error(error));
