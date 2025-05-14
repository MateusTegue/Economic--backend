import ClienteModel from "../models/Cliente.model.ts";
import { FilterQuery } from "mongoose";

export class ClienteRepository {
    async registrarCliente(data: any){
        const empleado = new ClienteModel(data);
        return await empleado.save();
    }

    async obtenerClientes(){
        return await ClienteModel.find();
    }

    async obtenerClienteId(id: string){
        return await ClienteModel.findById(id);
    }

    async obtenerPorFiltro(filtro: FilterQuery<typeof ClienteModel>){
        return await ClienteModel.find(filtro);
    }

    async actualizarCliente(id: string, data: any){
        return await ClienteModel.findByIdAndUpdate(id, data, {new: true});
    }

    async eliminarCliente(id: string){
        return await ClienteModel.findByIdAndDelete(id);
    }
}