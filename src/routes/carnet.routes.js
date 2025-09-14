import express from "express";
import { agregarCarnet, getAllcarnet } from "../controllers/carnet.controller.js";

export const carnetRouter = express.Router();

// 📌 Crear un alumno
// POST /alumnos
carnetRouter.post("/:idAlumno", agregarCarnet);

// 📌 Obtener todos los alumnos
// GET /alumnos
carnetRouter.get("/", getAllcarnet);
