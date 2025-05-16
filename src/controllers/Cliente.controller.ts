import { ClienteService } from "../services/Cliente.services.ts";
import { Request, Response } from "express";

export class ClienteController {
    private clienteService: ClienteService;

    constructor(){
        this.clienteService = new ClienteService();
    }
    
    // registrar clientes
    registrarCliente = async (req: Request, res: Response): Promise<any> => {
      try {
          const { identificacion } = req.body;

          const clienteExiste = await this.clienteService.obtenerClienteCedula(identificacion);

          if(clienteExiste){
            return res.status(400).json({msg: "El Cliente ya se encuentra registrado!"});
          }
        const nuevoCliente = await this.clienteService.registrarCliente(req.body);
        return res.status(201).json(nuevoCliente);

      } catch (error){
        console.error(error);
        return res.status(500).json({msg: "Error al registrar el Cliente!"})
      }

    }

    // obtener clientes 
    obtenerClientes = async (_req: Request, res: Response): Promise<any> => {
        try {
            const clientes = await this.clienteService.obtenerClientes();

            return res.status(200).json(clientes);

        } catch (error){
            console.error(error);
            return res.status(500).json({msg: "Error al obtener los Clientes!"})
        }

    }

    // obtener cliene por id
    obtenerClienteId = async (req: Request, res: Response): Promise<any> => {
        try {
            const cliente = await this.clienteService.obtenerClienteId(req.params.id);

            return res.status(200).json(cliente);

        } catch (error){
            console.error(error);
            return res.status(500).json({msg: "Error al obtener el Cliente!"})
        }
    }

    // obtener cliente por identificacion
    obtenerClienteCedula = async (req: Request, res: Response): Promise<any> => {
        try {
            const cliente = await this.clienteService.obtenerClienteCedula(req.params.identificacion);
            return res.status(200).json(cliente);
        }catch (error){
            console.error(error);
            return res.status(500).json({msg: "Error al obtener el Cliente!"})
        }
    }

    // actualizar cliente
    actualizarCliente = async (req: Request, res: Response): Promise<any> => {
       try {
            const clienteActualizado = await this.clienteService.actualizarCliente(req.params.id, req.body);

            if(!clienteActualizado){
                return res.status(404).json({msg: "Cliente no encontrado!"})
            }
            return res.status(200).json(clienteActualizado);

       } catch (error){
        console.error(error)
        return res.status(500).json({msg: "Error al actualizar el Cliente"});
       }

    }

    // eliminar cliente
    eliminarCliente = async (req: Request, res: Response): Promise<any> => {
        try{
            const clienteEliminado = await this.clienteService.eliminarCliente(req.params.id);
            if(!clienteEliminado){
                return res.status(404).json({msg: "Cliente no encontrado"})
            }
            return res.status(200).json({msg: "Cliente eliminado correctamente!"})
        } catch (error){
            console.error(error);
            return res.status(500).json({msg:"Error al eliminar el Cliente!"})
        }
    }
}




