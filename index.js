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
      imagenUrl:
        "https://images.unsplash.com/photo-1628832307345-7404b47f1751?q=80&w=1483&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ]);
});

app.listen(PORT, () => {
  console.log(`Server corriendo en el puerto ${PORT}`);
});
