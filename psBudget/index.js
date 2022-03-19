const express = require("express");
const app = express();
const port = 3000;
const envelopes = {};

app.post("/transfer/:from/:to/:amount", function (req, res) {
  let { from, to, amount } = req.params;
  amount = Number(amount);
  if (envelopes[from] && envelopes[to]) {
    envelopes[from].value = Number(envelopes[from].value) - amount;
    envelopes[to].value = Number(envelopes[to].value) + amount;
    return res.send(envelopes);
  }
  res
    .status(404)
    .send([
      !envelopes[from] && `can not find${from}`,
      !envelopes[to] && `can not find${to}`,
    ]);
});

app.param("id", (req, res, next, id) => {
  req.id = id;
  next();
});
app.get("/:id", (req, res) => {
  return res.send(envelopes[req.id]);
});
app.put("/:id", (req, res) => {
  const { id, value, name } = req.query;
  envelopes[id] = { value, name };
  res.send(`envelop ${id} updated to ${{ ...envelopes[id] }}`);
});
app.delete("/:id", (req, res) => {
  if (envelopes[req.id]) {
    delete envelopes[req.id];
    res.send(envelopes);
  } else {
    res.status(404).send(`can not find ${req.id}`);
  }
});
app.get("/", (req, res) => {
  res.send(["Hello World!", envelopes]);
});
app.post("/", (req, res) => {
  const { name, id, value } = req.query;
  // console.log(envelopes.every((e) => e.id !== id));
  if (!id || Object.keys(envelopes).includes(id)) {
    return res.status(400).send("bad request");
  }
  envelopes[id] = { name, value };
  res.send(envelopes);
  console.log(envelopes);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
