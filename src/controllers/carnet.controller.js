import { carnetModel } from "../models/carnet.model.js";
import { AlumnoModel } from "../models/alumno.model.js";

export const createCarnet = async (req, res) => {
  try {
    const { carrera, alumnoId } = req.body;

    const newCarnet = new carnetModel({
      carrera,
      alumno: alumnoId,
    });
    await newCarnet.save();

    await AlumnoModel.findByIdAndUpdate(
      alumnoId,
      { carnet: newCarnet._id },
      { new: true }
    );

    return res.status(201).json(newCarnet);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Error al crear el carnet" });
  }
};

export const getCarnets = async (req, res) => {
  try {
    const carnets = await carnetModel.find();
    res.status(200).json(carnets);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      ok: false,
      msg: "Error interno del servidor",
    });
  }
};

export const getCarnetById = async (req, res) => {
  try {
    const carnet = await carnetModel.findById(req.params.id);
    return res.status(200).json(carnet);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      ok: false,
      msg: "Error interno del servidor",
    });
  }
};

export const updateCarnet = async (req, res) => {
  try {
    const updateCarnet = await carnetModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    return res.status(200).json(updateCarnet);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      ok: false,
      msg: "Error interno del servidor",
    });
  }
};

export const deleteCarnet = async (req, res) => {
  try {
    const deleteCarnet = await carnetModel.findByIdAndDelete(
      req.params.id,
      req.body,
      { new: true }
    );
    return res.status(200).json({ msg: "carnet eliminado" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      ok: false,
      msg: "Error interno del servidor",
    });
  }
};

// export const agregarCarnet = async (req, res) => {
//   const { idAlumno } = req.params;
//   const { numero, carrera } = req.body;
//   try {
//     const alumno = await alumnoModel.findById(idAlumno);
//     if (!alumno) {
//       return res.status(404).json({ message: "Alumno no encontrado" });
//     }
//     const nuevoCarnet = new carnetModel({
//       numero,
//       carrera,
//       alumno: idAlumno
//     });
//     await nuevoCarnet.save();
//     alumno.carnet = nuevoCarnet._id;
//     await alumno.save();
//     const alumnoConCarnet = await alumnoModel
//       .findById(idAlumno)
//       .populate("carnet");

//     res.status(201).json(alumnoConCarnet);

//   } catch (error) {
//     console.log(error); // 🔹 Muy importante para depurar
//     res.status(500).json({ message: "Error al agregar carnet", error });
//   }
// };

// export const getAllcarnet = async (req, res) => {
//   try {
//     const carnet = await carnetModel.find();

//     res.status(200).json({
//       ok: true,
//       data: carnet,
//     });
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json({
//       ok: false,
//       msg: "Error interno del servidor",
//     });
//   }
// };

// export const getUserById = async (req, res) => {
//   const { id } = req.params;

//   try {
//     const user = await UserModel.findById(id);

//     res.status(200).json({
//       ok: true,
//       data: user,
//     });
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json({
//       ok: false,
//       msg: "Error interno del servidor",
//     });
//   }
// };

// export const updateUser = async (req, res) => {
//   const { id } = req.params;
//   const { username } = req.body;

//   try {
//     // const user = await UserModel.findById(id);

//     // const updatedUser2 = await UserModel.updateOne({ _id: id }, { username });

//     const updatedUser = await UserModel.findByIdAndUpdate(
//       id,
//       { username },
//       { new: true }
//     );

//     res.status(200).json({
//       ok: true,
//       msg: "Usuario actualizado correctamente",
//       data: updatedUser,
//     });
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json({
//       ok: false,
//       msg: "Error interno del servidor",
//     });
//   }
// };

// export const deleteUser = async (req, res) => {
//   const { id } = req.params;

//   try {
//     // const user = await UserModel.findById(id);

//     // const deletedUser2 = await UserModel.deleteOne({ _id: id });

//     const deletedUser = await UserModel.findByIdAndDelete(id);

//     res.status(200).json({
//       ok: true,
//       msg: "Usuario eliminado correctamente",
//       data: deletedUser,
//     });
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json({
//       ok: false,
//       msg: "Error interno del servidor",
//     });
//   }
// };
