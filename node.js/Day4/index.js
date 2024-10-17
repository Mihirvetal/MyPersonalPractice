// Middleware in Express.js refers to functions that have access to the request (req), response (res), and the next function in the application's request-response cycle. These functions can modify the req and res objects, end the request-response cycle, or pass control to the next middleware function in the stack using the next() function.

const express = require("express");
const app = express();

// yeh jo {use} he voh har baar call or response dega or yeh dusri request or response ko accept nahi hone dega Q ki yeh middleware callback he
app.use((req, res, next) => {
//   console.log("object", req.url);
  next();
  // return res.send("Done")
  // next use hota he ki agar hume is {use} ka response nahi chaiye or iske baad ke response chaiye toh hum next() MW ka use karte he or yeh ek callback hota he
}); // {use} to create the MW or like a global MW

app.get("/", (req, res) => {
  return res.send(
    '<body style="background-color:Black; color:white"><p style="font-size:120px">Mihir</p></body> '
  );
});
app.use((req, res, next) => {
//   console.log("object", req.url);
  next();
});
app.get("/", (req, res) => {
  return res.send(
    '<body style="background-color:green; color:white"><p style="font-size:120px">Mihir</p></body> '
  );
});

app.listen(5000, () => {
  console.log("http://localhost:5000");
});
