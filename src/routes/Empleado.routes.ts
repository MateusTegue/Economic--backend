import { EmpleadoController } from "../controllers/Empleado.controller";
import express from "express";

const router = express.Router();
const empleadoController = new EmpleadoController();

router.post("/api/empleado", empleadoController.registrarEmpleado);

router.get("/api/empleados", empleadoController.obtenerEmpleados);

router.get("/api/empleado/cedula/:identificacion", empleadoController.obtenerEmpleadoCedula);

router.get("/api/empleado/:id", empleadoController.obtenerEmpleadosId);

router.put("/api/empleado/:id", empleadoController.actualizarEmpleado);

router.delete("/api/empleado/:id", empleadoController.eliminarEmpleado);

export default router;


