const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Salom Termux server 🚀");
});

app.listen(3000, () => {
  console.log("Serverimiz 3000 portda ishlayapti");
});
