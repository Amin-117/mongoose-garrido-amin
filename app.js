import "dotenv/config";
import express from "express";
import { connectDB } from "./src/config/database.js";
import { routes } from "./src/routes/index.js";

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.use("/api", routes);

connectDB();

app.listen(PORT, async () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
