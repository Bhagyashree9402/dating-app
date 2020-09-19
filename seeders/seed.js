let mongoose = require("mongoose");
let db = require("../models/profileModel");
require("dotenv").config();
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/profile";
let profileSeed = require("./profileSeed.js")


mongoose.connect(
  MONGODB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  },
  (err) => {
    if (err) throw err;
    console.log("MongoDB connection established.");
  }
);



db.Profile.deleteMany({})
  .then(() => db.Profile.collection.insertMany(profileSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
