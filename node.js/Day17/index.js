const app = require("express")();
const winston = require("winston")


const logger = winston.createLogger({
    level:"info",
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({filename: "mi"})
    ]
})





app.get("/", (req, res) => {
    logger.info("called hello world")
  console.log("info: visited root route");
  res.send("Hello World");
});

app.get("/user", (req, res) => {
    logger.error("error he bhai")
  res.send([1, 2, 3, 4, 5]);
});

app.get("/user/:id", (req, res) => {
  return res.send(req.params.id);
});

app.get("/dummy", (req, res) => {
  throw new AuthenticationError("You are not authenticated");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
