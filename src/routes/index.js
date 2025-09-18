import { Router } from "express";
import { alumnoRouter } from "./alumno.routes.js";
import { carnetRouter } from "./carnet.routes.js";
import { cursoRouter } from "./curso.routes.js";
import { profesorRouter } from "./profesor.routes.js";

export const routes = Router();

routes.use(carnetRouter);
routes.use(alumnoRouter);
routes.use(profesorRouter);
routes.use(cursoRouter);
