const express = require("express");
const dotenv = require("dotenv");
const app = express();
dotenv.config();
app.use(express.json());

const connection = require("./db/connection.js");

const homeRoutes = require("./routes/home");
const toneRoutes = require("./routes/tones");
app.use("/api/v1/home", homeRoutes);
app.use("/api/v1/tones", toneRoutes);
app.use((error, req, res, next) => {
  console.log(error);
  const status = false;
  const statusCode = error.statusCode || 500;
  const message = error.message;
  const data = error.data;
  res.status(statusCode).json({ status: status, message: message, data: data });
});

connection
  .sync()
  .then((result) => {
    app.listen(process.env.PORT, (e) => {
      console.log("server is listening on " + process.env.PORT + " port");
    });
  })
  .catch((err) => {
    console.log(err);
  });
