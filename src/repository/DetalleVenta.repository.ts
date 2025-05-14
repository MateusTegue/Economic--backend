import DetalleVentaModel from "../models/DetalleVenta.model.ts";
import { FilterQuery } from "mongoose";

export class DetalleVentaReposytory {
    async registraDetalleventa(data: any){
        const detalle = new DetalleVentaModel(data)
        return await detalle.save();
    }

    async obtenerDetalleVentas(){
        return await DetalleVentaModel.find();
    }

    async obtenerDetalleVentaId(id: string){
        return DetalleVentaModel.findById(id);
    }

    async buscarDetalleVenta(filtro: FilterQuery<typeof DetalleVentaModel>){
        return DetalleVentaModel.find(filtro);
    }

    async actualizarDetalleVenta(id: string, data: any){
        return DetalleVentaModel.findByIdAndUpdate(id, data, {new: true});
    }

    async eliminarDetalleVenta(id: string){
        return await DetalleVentaModel.findByIdAndDelete(id);
    }
}