const express = require("express");
const app = express();
const port = 3000;
const envelopes = [];
app.get("/", (req, res) => {
  res.send(["Hello World!", envelopes]);
});
app.post("/", (req, res) => {
  const newEnv = req.query.envelope;
  envelopes.push(newEnv);
  res.send(newEnv);
  console.log(envelopes);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
