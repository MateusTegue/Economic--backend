import EmpleadoModel from "../models/Empleado.model.ts";
import { FilterQuery } from "mongoose";

export class EmpleadoRepository {
    async registrarEmpleado(data: any){
        const empleado = new EmpleadoModel(data);
        return await empleado.save();
    }

    async obtenerEmpleados(){
        return await EmpleadoModel.find();
    }

    async obtenerEmpleadoId(_id: string){
        return await EmpleadoModel.findById(_id);
    }

    async obtenerEmpleadoCedula(identificacion: string){
        return await EmpleadoModel.findOne({ identificacion });
    }

    async obtenerEmpleadoPorUsuario(usuario: string) {
        return await EmpleadoModel.findOne({ usuario });
    }

    async obtenerPorFiltro(filtro: FilterQuery<typeof EmpleadoModel>){
        return await EmpleadoModel.find(filtro);
    }

    async actualizarEmpleado(_id: string, data: any){
        return await EmpleadoModel.findByIdAndUpdate(_id, data, {new: true});
    }

    async eliminarEmpleado(_id: string){
        return await EmpleadoModel.findByIdAndDelete(_id);
    }
}