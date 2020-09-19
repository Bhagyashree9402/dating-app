const express = require("express");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 5050;
const path = require("path");
require("dotenv").config();
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/profile";
// const Cors = require("cors");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(Cors());

// logs any request
// var myLogger = function (req, res, next) {
//   console.log(req.path);
//   next();
// };
// app.use(myLogger);

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

app.use("/users", require("./routes/userRouter"));
app.use("/profile", require("./routes/profileRouter"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
app.listen(PORT, () => {
  console.log(`listening at http://localhost:${PORT}`);
});
