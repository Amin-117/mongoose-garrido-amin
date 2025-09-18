import mongoose from "mongoose";
const { Schema, model, Types } = mongoose;

const profesorSchema = new Schema({
  nombre: {
    type: String,
    required: true,
  },
  apellido: {
    type: String,
    required: true,
  },
  cursos: {
    type: [Types.ObjectId],
    ref: "Curso",
  },
});

export const profesorModel = model("Profesor", profesorSchema);
