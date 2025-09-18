import { AlumnoModel } from "../models/alumno.model.js";

export const createAlumno = async (req, res) => {
  try {
    const newAlumno = new AlumnoModel(req.body);
    await newAlumno.save();
    res.status(201).json(newAlumno);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      ok: false,
      msg: "Error interno del servidor",
    });
  }
};

export const getAlumnos = async (req, res) => {
  try {
    const alumnos = await AlumnoModel.find({ activo: true }).populate("carnet");
    res.status(200).json(alumnos);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      ok: false,
      msg: "Error interno del servidor",
    });
  }
};

export const getAlumnoById = async (req, res) => {
  try {
    const alumno = await AlumnoModel.findById(req.params.id);
    return res.status(200).json(alumno);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      ok: false,
      msg: "Error interno del servidor",
    });
  }
};

export const updateAlumno = async (req, res) => {
  try {
    const updateAlumno = await AlumnoModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    return res.status(200).json(updateAlumno);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      ok: false,
      msg: "Error interno del servidor",
    });
  }
};
export const deleteAlumno = async (req, res) => {
  try {
    const deleteAlumno = await AlumnoModel.findByIdAndUpdate(
      req.params.id,
      { activo: false },
      { new: true }
    );

    if (!deleteAlumno) {
      return res.status(404).json({ msg: "Alumno no encontrado" });
    }

    return res
      .status(200)
      .json({ msg: "Alumno eliminado lógicamente", alumno: deleteAlumno });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      ok: false,
      msg: "Error interno del servidor",
    });
  }
};

// import { alumnoModel } from "../models/alumno.model.js";

// export const createAlumno = async (req, res) => {
//   const { nombre, edad, contacto,   } = req.body;

//   try {
//     const newRole = await alumnoModel.create({
//       nombre,
//       edad,
//       contacto,
//     });

//     res.status(201).json({
//       ok: true,
//       msg: "alumno creado correctamente",
//       data: newRole,
//     });
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json({
//       ok: false,
//       msg: "Error interno del servidor",
//     });
//   }
// };

// export const getAllAlumno = async (req, res) => {
//   try {
//     const roles = await alumnoModel.find();

//     res.status(200).json({
//       ok: true,
//       data: roles,
//     });
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json({
//       ok: false,
//       msg: "Error interno del servidor",
//     });
//   }
// };

// // export const getUserById = async (req, res) => {
// //   const { id } = req.params;

// //   try {
// //     const user = await UserModel.findById(id);

// //     res.status(200).json({
// //       ok: true,
// //       data: user,
// //     });
// //   } catch (error) {
// //     console.log(error);
// //     return res.status(500).json({
// //       ok: false,
// //       msg: "Error interno del servidor",
// //     });
// //   }
// // };

// // export const updateUser = async (req, res) => {
// //   const { id } = req.params;
// //   const { username } = req.body;

// //   try {
// //     // const user = await UserModel.findById(id);

// //     // const updatedUser2 = await UserModel.updateOne({ _id: id }, { username });

// //     const updatedUser = await UserModel.findByIdAndUpdate(
// //       id,
// //       { username },
// //       { new: true }
// //     );

// //     res.status(200).json({
// //       ok: true,
// //       msg: "Usuario actualizado correctamente",
// //       data: updatedUser,
// //     });
// //   } catch (error) {
// //     console.log(error);
// //     return res.status(500).json({
// //       ok: false,
// //       msg: "Error interno del servidor",
// //     });
// //   }
// // };

// // export const deleteUser = async (req, res) => {
// //   const { id } = req.params;

// //   try {
// //     // const user = await UserModel.findById(id);

// //     // const deletedUser2 = await UserModel.deleteOne({ _id: id });

// //     const deletedUser = await UserModel.findByIdAndDelete(id);

// //     res.status(200).json({
// //       ok: true,
// //       msg: "Usuario eliminado correctamente",
// //       data: deletedUser,
// //     });
// //   } catch (error) {
// //     console.log(error);
// //     return res.status(500).json({
// //       ok: false,
// //       msg: "Error interno del servidor",
// //     });
// //   }
// // };
