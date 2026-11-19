// Fictional demo for Pulse GRC connector QA. Deliberately flawed so code
// scanning has findings to report. Never deployed.
const express = require("express");
const { exec } = require("child_process");
const app = express();

app.get("/hello", (req, res) => {
  res.send("<p>Hello " + req.query.name + "</p>");
});

app.get("/ping", (req, res) => {
  exec("ping -c 1 " + req.query.host, (err, out) => res.send(out));
});

app.listen(3000);
