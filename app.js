const express = require("express");
const products = require("./products");

const app = express();

app.get("/api/products", (req, res) => {
  res.json(products);
});

const port = 8000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:8000`);
});
