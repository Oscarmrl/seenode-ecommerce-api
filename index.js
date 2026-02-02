import express from "express";

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/products", (req, res) => {
  res.json([
    {
      id: "1",
      name: "Mause",
      price: 2000,
      descripcion: "Mause Gamer",
      imagenUrl: "https://example.com/mause.jpg",
    },
  ]);
});

app.listen(PORT, () => {
  console.log(`Server corriendo en el puerto ${PORT}`);
});
