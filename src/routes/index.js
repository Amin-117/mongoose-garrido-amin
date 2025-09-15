import { Router } from "express";
import { alumnoRouter } from "./alumno.routes.js";
import { carnetRouter } from "./carnet.routes.js";

export const routes = Router();

routes.use(carnetRouter);
routes.use(alumnoRouter);
