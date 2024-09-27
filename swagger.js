const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "Contacts API",
    description: "API to access various contacts in the database",
  },
  host: "localhost:3000",
};

const outputFile = "./swagger.json";
const routes = ["./route/index.js"];

swaggerAutogen(outputFile, routes, doc);
