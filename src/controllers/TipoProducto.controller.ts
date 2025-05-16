import { TipoProductoService } from "../services/TipoProducto.services.ts";
import { Request, Response } from "express";

export class TipoProductoCantroller {
    private tipoProductoService: TipoProductoService;
    
    constructor(){
        this.tipoProductoService = new TipoProductoService();
    }

    // registrar tipo de producto (categoria)
    registrarTipoProductos = async (req: Request, res: Response): Promise<any> => {
        try {
            const { descripcion } = req.body

            const tipoProductoExiste = await this.tipoProductoService.obtenerTipoProductoDescripcion(descripcion)

            if(tipoProductoExiste){
                return res.status(400).json({msg: "El tipo de producto ya se encuentra registrado"});
            }
            
            const nuevoTipoProducto = await this.tipoProductoService.registrarTipoProducto(req.body);
            return res.status(201).json(nuevoTipoProducto);
        } catch (error){
            console.error(error);
            return res.status(500).json({msg: "Error al registrar la Categoria!"})
        }
    }


    // obtener todas las categiras 
    obtenerTipoProductos = async (_req: Request, res: Response): Promise<any> => {
        try {
            const tipoProductos = await this.tipoProductoService.obtenerTipoProductos();
            return res.status(200).json(tipoProductos);
        } catch (error){
            console.error(error);
            return res.status(500).json({msg: "Error al obtener las Categorias!"});
        }
    }

    obtenerTipoProductoId = async (req: Request, res: Response): Promise<any> => {
        try {
            const categoria = await this.tipoProductoService.obtenerTipoProductoId(req.params.id);
            
            if(!categoria){
                return res.status(404).json({msg: "Tipo de Producto no encontrado!"})
            }

            return res.status(200).json(categoria);
        } catch (error){
            console.error(error);
            return res.status(500).json({msg: "Error al obtener Categoria!"})
        }
    }

    actualizarTipoProducto = async (req: Request, res: Response): Promise<any> => {
        try {
            const tipoProductoActualizado = await this.tipoProductoService.actualizarTipoProducto(req.params.id, req.body);

            if(!tipoProductoActualizado){
                return res.status(404).json({msg: "Tipo de producto no encontrado!"})
            }
            return res.status(200).json(tipoProductoActualizado);
        } catch (error){
            console.error(error);
            return res.status(500).json({msg: "Error al actualizar el tipo de producto!"});
        }
    }

    eliminarTipoProducto = async (req: Request, res: Response): Promise<any> => {
        try {
            const tipoProductoEliminado = await this.tipoProductoService.eliminarTipoProducto(req.params.id);

            if(!tipoProductoEliminado){
                return res.status(500).json({msg: "Tipo de producto no encontrado!"})
            }

            return res.status(200).json({msg: "Tipo de Producto eliminado correctamente"});
        } catch (error){
            console.error(error);

            return res.status(500).json({msg: "Error al eliminar el tipo de Producto"})
        }
    }
}
