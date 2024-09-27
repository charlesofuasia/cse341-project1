const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "Contacts API",
    description: "API to access various contacts in the database",
  },
  host: "https://cse341-project1-x7ms.onrender.com",
  schemes: ["http", "https"],
};

const outputFile = "./swagger.json";
const routes = ["./route/index.js"];

swaggerAutogen(outputFile, routes, doc);
