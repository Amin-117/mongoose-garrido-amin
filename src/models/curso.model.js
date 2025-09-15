import mongoose from "mongoose";
const { Schema, model, Types } = mongoose;

const cursoSchema = new Schema(
  {
    numero: { 
      type: Number,
      required: true,
      unique: true
    },
    alumnos: {
        type: [Types.ObjectId],
        ref: "Alumno" // referencia al modelo Alumno
    }
  }
);

export const cursoModel = model("Curso", cursoSchema);