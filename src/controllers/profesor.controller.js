import { profesorModel } from "../models/profesor.model.js";

export const createProfesor = async (req, res) => {
  try {
    const newProfesor = new profesorModel(req.body);
    await newProfesor.save();
    res.status(201).json(newProfesor);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      ok: false,
      msg: "Error interno del servidor",
    });
  }
};

export const getProfesores = async (req, res) => {
  try {
    const profesores = await profesorModel.find().populate("cursos");
    res.status(200).json(profesores);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      ok: false,
      msg: "Error interno del servidor",
    });
  }
};

export const getProfesorById = async (req, res) => {
  try {
    const profesor = await profesorModel
      .findById(req.params.id)
      .populate("cursos");
    return res.status(200).json(profesor);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      ok: false,
      msg: "Error interno del servidor",
    });
  }
};

export const updateProfesor = async (req, res) => {
  try {
    const updateProfesor = await profesorModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    return res.status(200).json(updateProfesor);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      ok: false,
      msg: "Error interno del servidor",
    });
  }
};

export const deleteProfesor = async (req, res) => {
  try {
    const deleteProfesor = await profesorModel.findByIdAndDelete(req.params.id);
    return res.status(200).json({ msg: "profesor eliminado" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      ok: false,
      msg: "Error interno del servidor",
    });
  }
};
