import { Router } from "express";
import { alumnoRouter } from "./alumno.routes.js";

export const routes = Router();

routes.use("/alumnos", alumnoRouter);
// Aquí puedes agregar más rutas si es necesario