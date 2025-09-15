import { cursoModel } from "../models/curso.model.js";

export const agregarCurso = async (req, res) => {
  const { idAlumno } = req.params;
  const { nombre } = req.body;

  try {
    // 1. Buscar alumno
    const alumno = await alumnoModel.findById(idAlumno);
    if (!alumno) {
      return res.status(404).json({ message: "Alumno no encontrado" });
    }

    // 2. Crear curso y asociar al alumno
    const nuevoCurso = new cursoModel({
      nombre,
      alumnos: [idAlumno]
    });
    await nuevoCurso.save();

    // 3. Asociar curso al alumno
    alumno.cursos.push(nuevoCurso._id);
    await alumno.save();

    // 4. Retornar alumno con curso (populate correcto)
    const alumnoConCurso = await alumnoModel
      .findById(idAlumno)
      .populate("cursos");

    res.status(201).json(alumnoConCurso);

  } catch (error) {
    console.log(error); // 🔹 Muy importante para depurar
    res.status(500).json({ message: "Error al agregar curso", error });
  }
};



export const getCursos = async (req, res) => {
    try {
        const cursos = await cursoModel.find();
        return res.status(200).json(cursos);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Error interno del servidor" });
    }
}

// export const getCursosById = async (req, res) => {
//     try {
        
//     } catch (error) {
//         console.error(error);
//         return res.status(500).json({ message: "Error interno del servidor" });
//     }
// }

// export const getCursos = async (req, res) => {
//     try {
        
//     } catch (error) {
//         console.error(error);
//         return res.status(500).json({ message: "Error interno del servidor" });
//     }
// }