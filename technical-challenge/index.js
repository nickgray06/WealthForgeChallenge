var fs = require("fs-extra");
var cors = require('cors')

var express = require("express");

var app = express();

app.use(cors())


app.get("/orders", async (req, res) => {
  const data = await fs.readJson("data.json");
  res.json(data)
  console.log(data);
});

function listening() {
  console.log("listening....");
}

var server = app.listen(5000, listening)