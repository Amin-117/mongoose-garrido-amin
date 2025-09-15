import express from "express";
import {
  createAlumno,
  getAlumnos,
  getAlumnoById,
  updateAlumno,
  deleteAlumno,
} from "../controllers/alumno.controller.js";

export const alumnoRouter = express.Router();

alumnoRouter.post("/alumnos", createAlumno);

alumnoRouter.get("/alumnos", getAlumnos);

alumnoRouter.get("/alumnos/:id", getAlumnoById);

alumnoRouter.put("/alumnos/:id", updateAlumno);

alumnoRouter.delete("/alumnos/:id", deleteAlumno);
