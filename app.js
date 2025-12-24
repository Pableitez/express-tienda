const express = require("express");
const productsData = require("./data");
const { layout, productsList } = require("./template");

const app = express();
const PORT = 3000;

// Helper
const byCategory = (category) =>
  productsData.filter((p) => p.category === category);

// Home
app.get("/", (req, res) => {
  res.send(
    layout(
      "Bienvenido a la tienda",
      `<p>Bienvenido/a a nuestra tienda online.</p>`
    )
  );
});

// Categorías
app.get("/electronica", (req, res) =>
  res.send(layout("Productos de Electrónica", productsList(byCategory("electrónica"))))
);

app.get("/ropa", (req, res) =>
  res.send(layout("Productos de Ropa", productsList(byCategory("ropa"))))
);

app.get("/hogar", (req, res) =>
  res.send(layout("Productos de Hogar", productsList(byCategory("hogar"))))
);

// Productos
app.get("/productos", (req, res) =>
  res.send(layout("Todos los productos", productsList(productsData)))
);

app.get("/productos/baratos", (req, res) =>
  res.send(
    layout(
      "Productos baratos",
      productsList(productsData.filter((p) => p.price < 100))
    )
  )
);

app.get("/productos/caros", (req, res) =>
  res.send(
    layout(
      "Productos caros",
      productsList(productsData.filter((p) => p.price >= 100))
    )
  )
);

// Server
app.listen(PORT, () => {
  console.log(`Servidor activo en http://localhost:${PORT}`);
});
// 404 - Ruta no encontrada (si no coincide con ninguna de las anteriores)
app.use((req, res) => {
  res.status(404).send(
    layout(
      "404 - Página no encontrada",
      `
      <p>La ruta <strong>${req.originalUrl}</strong> no existe.</p>
      <p><a href="/">Volver al inicio</a></p>
      `
    )
  );
});
