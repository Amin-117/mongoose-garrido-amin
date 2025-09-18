import mongoose from "mongoose";
const { Schema, model, Types } = mongoose;

const cursoSchema = new Schema({
  nombre: {
    type: String,
    required: true,
    unique: true,
  },
  alumnos: {
    type: [Types.ObjectId],
    ref: "Alumno",
  },
});

export const cursoModel = model("Curso", cursoSchema);
