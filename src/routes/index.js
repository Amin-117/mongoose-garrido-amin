import { Router } from "express";
import { alumnoRouter } from "./alumno.routes.js";
import { carnetRouter } from "./carnet.routes.js";

export const routes = Router();


routes.use("/carnet", carnetRouter)
routes.use("/alumnos", alumnoRouter);
// Aquí puedes agregar más rutas si es necesario
