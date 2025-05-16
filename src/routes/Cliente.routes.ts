import { ClienteController } from "../controllers/Cliente.controller";
import express from "express";


const router = express.Router();
const clienteController = new ClienteController();

router.post("/api/cliente", clienteController.registrarCliente);

router.get("/api/clientes", clienteController.obtenerClientes);

router.get("/api/cliente/:id", clienteController.obtenerClienteId);

router.get("/api/cliente/cedula/:identificacion", clienteController.obtenerClienteCedula);

router.put("/api/cliente/:id", clienteController.actualizarCliente);

router.delete("/api/cliente/:id", clienteController.eliminarCliente);


export default router;



