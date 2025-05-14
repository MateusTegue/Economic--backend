import VentaModel from "../models/Venta.model.ts";
import { FilterQuery } from "mongoose";

export class VentaRepository {
    async registrarVenta(data: any){
        const venta = new VentaModel(data);
        return await venta.save();
    }

    async obtenerVentas(){
        return await VentaModel.find()
          .populate("cliente")
          .populate("empleado")
          .populate("detalles.producto");
    }

    async obtenerVentaId(id: string){
        return await VentaModel.findById(id)
          .populate("cliente")
          .populate("empleado")
          .populate("detalles.producto");
    }

    async buscarVenta(filtro: FilterQuery<typeof VentaModel>) {
        return await VentaModel.find(filtro)
          .populate("cliente")
          .populate("empleado")
          .populate("detalles.producto");
    }

    async actualizarVenta(id: string, data: any) {
        return await VentaModel.findByIdAndUpdate(id, data, { new: true });
    }

    async eliminarVenta(id: string) {
        return await VentaModel.findByIdAndDelete(id);
    }

}