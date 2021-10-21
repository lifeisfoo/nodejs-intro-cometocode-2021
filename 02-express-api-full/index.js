const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

let events = [{ name: "Cometocode 2021" }];

app.use(bodyParser.json());

app.get("/", (req, res) => {
  // LIVE: change me
  res.send("Hello express!");
});

app.get("/hello/:name", (req, res) => {
  res.json({ msg: `Hello ${req.params.name}` });
});

app.get("/events", (req, res) => {
  res.json(events);
});

app.post("/events", (req, res) => {
  events.push(req.body); // NOT FOR PRODUCTION
  res.json(events);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

exports.app = app;

// curl -XPOST --data '{"name":"Cometocode 2022"}' -H "Content-Type:application/json" 192.168.1.2:3000/events
