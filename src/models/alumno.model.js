import mongoose from "mongoose";
const { Schema, model, Types } = mongoose;

const contactoSchema = new Schema(
  {
    telefono: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    direccion: {
      type: String,
      required: true
    }
  },
  {
    _id: false
  }
);

const alumnoSchema = new Schema(
  {
    nombre: {
      type: String,
      required: true
    },
    edad: {
      type: Number,
      required: true
    },
    contacto: contactoSchema,
    carnet: {
      type: Types.ObjectId,
      ref: "Carnet",
      unique: true,
      sparse: true,
  }
  }
);

export const alumnoModel = model("Alumno", alumnoSchema);
