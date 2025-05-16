import { TipoProductoCantroller } from "../controllers/TipoProducto.controller";
import express from "express";

const router = express.Router();
const tipoProductoController = new TipoProductoCantroller();

router.post("/api/tipoProducto", tipoProductoController.registrarTipoProductos);

router.get("/api/tipoProductos", tipoProductoController.obtenerTipoProductos);

router.get("/api/tipoProducto/:id", tipoProductoController.obtenerTipoProductoId);

router.put("/api/tipoProducto/:id", tipoProductoController.actualizarTipoProducto);

router.delete("/api/tipoProducto/:id", tipoProductoController.eliminarTipoProducto);



















export default router;