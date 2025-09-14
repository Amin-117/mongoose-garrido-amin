import mongoose from "mongoose";
const { Schema, model, Types } = mongoose;

const carnetSchema = new Schema(
  {
    numero: { 
      type: Number, 
      required: true, 
      unique: true 
    },
    carrera: { 
      type: String, 
      required: true 
    },
  alumno: {
    type: Types.ObjectId,
    ref: "Alumno", // referencia al modelo Alumno
    unique: true   // 🔑 garantiza que un alumno solo tenga 1 carnet
  },
});

export const carnetModel = model("Carnet", carnetSchema);