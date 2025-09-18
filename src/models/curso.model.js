import mongoose from "mongoose";
const { Schema, model, Types } = mongoose;

const cursoSchema = new Schema({
  nombre: {
    type: String,
    required: true,
    unique: true,
  },
  alumnos: [
    {
      type: Types.ObjectId,
      ref: "Alumno",
    },
  ],
  profesores: [
    {
      type: Types.ObjectId,
      ref: "Profesor",
    },
  ],
});

cursoSchema.virtual("alumnosInscritos", {
  ref: "Alumno",
  localField: "_id",
  foreignField: "cursos",
});

export const cursoModel = model("Curso", cursoSchema);
