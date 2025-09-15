import mongoose from "mongoose";
const { Schema, model, Types } = mongoose;

const carnetSchema = new Schema(
  {
    carrera: {
      type: String,
      enum: ["quimica", "software", "mecatronica", "telecomunicaciones"],
      required: true,
    },
    alumno: {
      type: Types.ObjectId,
      ref: "Alumno",
      unique: true,
    },
  },
  {
    versionKey: false,
  }
);

export const carnetModel = model("Carnet", carnetSchema);
