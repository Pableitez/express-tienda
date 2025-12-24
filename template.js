function layout(title, content) {
  return `
  <!doctype html>
  <html lang="es">
  <head>
    <meta charset="utf-8">
    <title>${title}</title>
    <style>
      body { font-family: Arial, sans-serif; margin: 24px; }
      a { margin-right: 12px; }
      ul { line-height: 1.8; }
    </style>
  </head>
  <body>
    <h1>${title}</h1>
    ${content}
    <hr>
    <nav>
      <a href="/">Inicio</a>
      <a href="/electronica">Electrónica</a>
      <a href="/ropa">Ropa</a>
      <a href="/hogar">Hogar</a>
      <a href="/productos">Todos</a>
      <a href="/productos/baratos">Baratos</a>
      <a href="/productos/caros">Caros</a>
    </nav>
  </body>
  </html>
  `;
}

function productsList(products) {
  return `
    <p>Total: <strong>${products.length}</strong></p>
    <ul>
      ${products
        .map(
          (p) =>
            `<li><strong>${p.name}</strong> - ${p.price}€ (Stock: ${p.stock})</li>`
        )
        .join("")}
    </ul>
  `;
}

module.exports = { layout, productsList };
