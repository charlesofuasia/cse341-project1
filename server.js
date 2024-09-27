const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const mongodb = require("./database/dbconnection");
const bodyParser = require("body-parser");
const cors = require("cors");

//To allow cross origin access to api
const corOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corOptions));

app.use(bodyParser.json());
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
