import { cursoModel } from "../models/curso.model.js";

export const createCurso = async (req, res) => {
  try {
    const newCurso = new cursoModel(req.body);
    await newCurso.save();
    res.status(201).json(newCurso);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      ok: false,
      msg: "Error interno del servidor",
    });
  }
};

export const getCursos = async (req, res) => {
  try {
    const cursos = await cursoModel
      .find()
      .populate("alumnos")
      .populate("profesor"); // si lo definiste en el schema
    res.status(200).json(cursos);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      ok: false,
      msg: "Error interno del servidor",
    });
  }
};

export const getCursoById = async (req, res) => {
  try {
    const curso = await cursoModel
      .findById(req.params.id)
      .populate("alumnos")
      .populate("profesor");
    return res.status(200).json(curso);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      ok: false,
      msg: "Error interno del servidor",
    });
  }
};

export const updateCurso = async (req, res) => {
  try {
    const updateCurso = await cursoModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    return res.status(200).json(updateCurso);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      ok: false,
      msg: "Error interno del servidor",
    });
  }
};

export const deleteCurso = async (req, res) => {
  try {
    const deleteCurso = await cursoModel.findByIdAndDelete(req.params.id);
    return res.status(200).json({ msg: "curso eliminado" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      ok: false,
      msg: "Error interno del servidor",
    });
  }
};
