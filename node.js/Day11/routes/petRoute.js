
const { Router } = require("express");




  
  const specs = swaggerJsdoc(options);
  
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(specs));










petRouter.get("/", (req, res) => {
  res.send("GET /pets");
});

petRouter.get("/:id", (req, res) => {
  res.send("GET /pets/:id");
});

petRouter.post("/", (req, res) => {
  res.send("POST /pets");
});

module.exports = petRouter;