const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000

app.use("/", require("./route"))

app.listen(PORT, () => { console.log(`Server is open at ${PORT}`) });