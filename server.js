const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.get("/", (req, res) => {
  res.send("hello");
});

app.get("/api/data", (req, res) => {
  let progressToggle = [
    {
      active: "progress-step is-active",
      completed: "progress-step is-completed",
    },
  ];

  res.json(progressToggle);
});

app.post("api/data", (req, res) => {
  console.log(res.body);
});

app.use(bodyParser.json());
let dogsArr = [];
app.post("/api/test", function (req, res) {
  var thePost = req.body;
  console.log(thePost);

  res.send("Dog added!");
});

app.put("/api/data", function (req, res) {
  console.log(req.body);
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);
