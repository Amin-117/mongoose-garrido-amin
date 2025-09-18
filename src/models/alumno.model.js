import mongoose from "mongoose";
const { Schema, model, Types } = mongoose;

const alumnoSchema = new Schema(
  {
    nombre: {
      type: String,
      required: true,
    },
    contacto: [
      {
        _id: false,
        email: {
          type: String,
          required: true,
        },
      },
    ],
    carnet: {
      type: Types.ObjectId,
      ref: "Carnet",
      required: false,
      unique: true,
    },
    cursos: [
      {
        type: Types.ObjectId,
        ref: "Curso",
        required: false,
      },
    ],
  },
  {
    versionKey: false,
  }
);

export const AlumnoModel = model("Alumno", alumnoSchema);
