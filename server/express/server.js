"use strict";
const axios = require("axios");
const express = require("express");
const serverless = require("serverless-http");
const cors = require("cors");
const bodyParser = require("body-parser");
const quotes = require("./quotes.js");
const app = express();

const router = express.Router();
router.get("/", (req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write("<h1>Hello from Express.js!</h1>");
  res.end();
});
router.get("/another", (req, res) => res.json({ route: req.originalUrl }));
router.post("/", (req, res) => res.json({ postBody: req.body }));

app.use(cors());
app.use(bodyParser.json());
app.use("/.netlify/functions/server", router); // path must route to lambda

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/quotes", function (req, res) {
  res.json(quotes.findAll());
});

app.post("/wiki", (req, res) => {
  const author = req.body.author;
  axios
    .get(
      `http://en.wikipedia.org/w/api.php?action=query&titles=${author}&prop=pageimages|info&inprop=url&format=json&pithumbsize=100`
    )
    .then((result) => res.status(200).json(result.data))
    .catch((e) => res.status(400).json(e));
});

// app.listen(3002, function () {
//   console.log("CORS-enabled web server listening on port 3002");
// });

module.exports = app;
module.exports.handler = serverless(app);
