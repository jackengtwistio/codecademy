const express = require("express");
const app = express();
const port = 3000;
const envelopes = [];
app.get("/", (req, res) => {
  res.send(["Hello World!", envelopes]);
});
app.post("/", (req, res) => {
  const { envelope, id, value } = req.query;
  // console.log(envelopes.every((e) => e.id !== id));
  if (!id || !envelopes.every((e) => e.id !== id)) {
    return res.status(400).send("bad request");
  }
  envelopes.push({ envelope, id, value });
  res.send(envelopes);
  console.log(envelopes);
});
app.param("id", (req, res, next, id) => {
  req.id = id;
  next();
});
app.get("/:id", (req, res) => {
  return res.send(envelopes[req.id]);
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
