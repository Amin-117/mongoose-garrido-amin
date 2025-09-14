import mongoose from "mongoose";
const { Schema, model } = mongoose;

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
  }, 
  { 
    timestamps: true 
  }
);

export default model("Carnet", carnetSchema);
