const axios = require("axios");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const quotes = require("./quotes.js");
const app = express();

app.use(cors());
app.use(bodyParser.json());

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

app.listen(3002, function () {
  console.log("CORS-enabled web server listening on port 3002");
});
