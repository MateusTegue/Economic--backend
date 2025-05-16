import { EmpleadoService } from "../services/Empleado.services.ts";
import { Request, Response } from "express";



export class EmpleadoController {

    private empleadoService: EmpleadoService;

    constructor() {
        this.empleadoService = new EmpleadoService();
    }
    // registrar empleados 
    registrarEmpleado = async (req: Request, res: Response): Promise<any> => {
        try {

            const { identificacion, usuario } = req.body;
            
            const empleadoExistente = await this.empleadoService.obtenerEmpleadoCedula(identificacion);
            
            if (empleadoExistente) {
                return res.status(400).json({ msg: "El empleado ya está registrado" });
            }

            const empleadoPorUsuario = await this.empleadoService.obtenerEmpleadoPorUsuario(usuario);
            if (empleadoPorUsuario) {
                return res.status(400).json({ msg: "El nombre de usuario ya está en uso" });
            }
            
            const nuevoEmpleado = await this.empleadoService.registrarEmpleado(req.body);
            return res.status(201).json(nuevoEmpleado);
            
        } catch (error) {
            console.error(error);
            return res.status(500).json({ msg: "Error al registrar el Empleado!" });
        }
    }
    // obtener todos los empleados 
    obtenerEmpleados = async (_req: Request, res: Response): Promise<any> => {
        try {
            const empleados = await this.empleadoService.obtenerEmpleados();

            return res.status(200).json(empleados);

        } catch (error){
            console.error(error);
            return res.status(500).json({msg: "Error al obtener los empleados!"});
        }
    }

    // obtener empleados por id 
    obtenerEmpleadosId = async (req: Request, res: Response): Promise<any> => {
        try {
            const empleado = await this.empleadoService.obtenerEmpleadoId(req.params._id);
            if(!empleado){
                return res.status(404).json({msg:"Empleado no encontrado"})
            }
            return res.status(200).json(empleado);
        }catch (error){
            console.error(error);
            return res.status(500).json({ msg:"Error al obtener el Empleado"});
        }
    }
    // obtener empleados por identificacion
    obtenerEmpleadoCedula = async (req: Request, res: Response): Promise<any> => {
        try{
            const empleado = await this.empleadoService.obtenerEmpleadoCedula(req.params.identificacion);
            return res.status(200).json(empleado);
        } catch(error){
            console.error(error);
            return res.status(500).json({msg: "Error al obtener el Empleado!"})
        }
    }
    // actualizar empleados 
    actualizarEmpleado = async (req: Request, res: Response): Promise<any> => {
        try {
            const empleadoActualizado = await this.empleadoService.actualizarEmpleado(req.params._id, req.body);

            if(!empleadoActualizado){
                return res.status(404).json({msg: "Empleado no encontrado!"})
            }
            return res.status(200).json(empleadoActualizado);
        } catch (error){
            console.error(error)
            return res.status(500).json({msg: "Error al actualizar el empleado!"})
        }
    }
    // eliminar empleados 
    eliminarEmpleado = async (req: Request, res: Response): Promise<any> => {
    try {
        const empleadoEliminado = await this.empleadoService.eliminarEmpleado(req.params._id);
        if(!empleadoEliminado){
            return res.status(404).json({msg: "Empleado no encontrado!"});
        }
        return res.status(200).json({msg:"Empleado eliminado correctamente!"});
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error al eliminar el empleado.' });
    }
}
    

}