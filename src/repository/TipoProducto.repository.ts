import TipoProductoModel from "../models/TipoProducto.model.ts";

export class TipoProductoRepository {
    async registrarTipoProducto(data: any){
        const tipoProducto = new TipoProductoModel(data);
        return await tipoProducto.save();
    }

    async obtenerTipoProductos(){
        return await TipoProductoModel.find();
    }

    async obtenerTipoProductoId(id: string){
        return TipoProductoModel.findById(id);
    }

    // el de buacar lo implementamos en otra ocacion
    async obtenerTipoProductoDescripcion(descripcion: string) {
        return await TipoProductoModel.findOne({ descripcion})
    }
   
    async actualizarTipoProducto(id: string, data: any){
        return await TipoProductoModel.findByIdAndUpdate(id, data, {new: true});
    }

    async eliminarTipoProducto(id: string){
        return await TipoProductoModel.findByIdAndDelete(id);
    }
}