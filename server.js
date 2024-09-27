const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const mongodb = require("./database/dbconnection");
const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  next();
});
app.use("/", require("./route"));

mongodb.initDB((error) => {
  if (error) {
    console.log(error);
  } else {
    app.listen(PORT, () => {
      console.log(`Database is connected and server is open at ${PORT}`);
    });
  }
});
