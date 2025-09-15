import express from "express";
import {
  createCarnet,
  getCarnets,
  getCarnetById,
  updateCarnet,
  deleteCarnet,
} from "../controllers/carnet.controller.js";

export const carnetRouter = express.Router();

carnetRouter.post("/carnets", createCarnet);

carnetRouter.get("/carnets", getCarnets);

carnetRouter.get("/carnets/:id", getCarnetById);

carnetRouter.put("/carnets/:id", updateCarnet);

carnetRouter.delete("/carnets/:id", deleteCarnet);
