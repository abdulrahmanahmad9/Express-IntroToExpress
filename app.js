const express = require("express");
const products = require("./products");

const app = express();
app.use(express.json());

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const id = req.params.id;

  const product = products.find((product) => {
    return product.id == id;
  });
  if (product) return res.json(product);
  else {
    return res.json("there is no product");
  }
});

app.post("/api/products", (req, res) => {
  products.push(req.body);
  return res.json(products);
});

app.delete("/api/products/:id", (req, res) => {
  const id = req.params.id;

  const product = products.findIndex((product) => product.id == id);

  if (product !== -1) {
    products.splice(product, 1);
    return res.json(product);
  } else {
    return res.json("there is no product");
  }
});

const port = 8000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:8000`);
});
