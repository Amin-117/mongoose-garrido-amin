import express from "express";
import {
  createProfesor,
  getProfesores,
  getProfesorById,
  updateProfesor,
  deleteProfesor,
  addCursoToProfesor,
} from "../controllers/profesor.controller.js";

export const profesorRouter = express.Router();

profesorRouter.post("/", createProfesor);

profesorRouter.get("/", getProfesores);

profesorRouter.get("/:id", getProfesorById);

profesorRouter.put("/:id", updateProfesor);

profesorRouter.delete("/:id", deleteProfesor);

profesorRouter.put("/:id/curso", addCursoToProfesor);
