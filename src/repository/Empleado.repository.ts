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

    async obtenerEmpleadoId(id: string){
        return await EmpleadoModel.findById(id);
    }

    async obtenerPorFiltro(filtro: FilterQuery<typeof EmpleadoModel>){
        return await EmpleadoModel.find(filtro);
    }

    async actualizarEmpleado(id: string, data: any){
        return await EmpleadoModel.findByIdAndUpdate(id, data, {new: true});
    }

    async eliminarEmpleado(id: string){
        return await EmpleadoModel.findByIdAndDelete(id);
    }
}