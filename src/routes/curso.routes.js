import express from "express";
import {
  createCurso,
  getCursos,
  getCursoById,
  updateCurso,
  deleteCurso,
} from "../controllers/curso.controller.js";

export const cursoRouter = express.Router();

cursoRouter.post("/", createCurso);

cursoRouter.get("/", getCursos);

cursoRouter.get("/:id", getCursoById);

cursoRouter.put("/:id", updateCurso);

cursoRouter.delete("/:id", deleteCurso);
