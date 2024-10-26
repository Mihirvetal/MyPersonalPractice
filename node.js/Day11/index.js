const express = require("express");
const petRouter = require("./routes/pets.route");
const swaggerJsdoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')
const petRouter = require('../routes/');

const app = express();

const options = {
    definition: {
      openapi: "3.0.3",
      info: {
        title: "Pet store",
        description: "A simple API to manage pets",
        version: "1.0.0",
      },
      servers: [
        {
          url: "http://localhost:5000",
        },
      ],
    },
    apis: ["./routes/*.js"],
  };


app.use(express.json());
app.use("/pets", petRouter);

app.listen(5000, () => {
  console.log("Server is running on http://localhost:3000");
});
