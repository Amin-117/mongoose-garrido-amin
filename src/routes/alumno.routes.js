import express from "express";
import { createAlumno, getAllAlumno } from "../controllers/alumno.controller.js";

export const alumnoRouter = express.Router();

// 📌 Crear un alumno
// POST /alumnos
alumnoRouter.post("/", createAlumno);

// 📌 Obtener todos los alumnos
// GET /alumnos
alumnoRouter.get("/", getAllAlumno);
