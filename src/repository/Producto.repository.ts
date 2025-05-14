import ProductoModel from "../models/Producto.model.ts";

export class ProductoRepository {
    async obtenerProductos(){
        return ProductoModel.find().populate('tipo_producto');
    }

    async obtenerProductoId(id: string){
        return ProductoModel.findById(id).populate('tipo_producto');
    }

    async registrarProducto(data: any){
        const producto = new ProductoModel(data);
        return producto.save();
    }

    async actualizarProducto(id: string, data: any){
        return ProductoModel.findByIdAndUpdate(id, data, {new: true});
    }

    async eliminarProducto(id: string){
        return ProductoModel.findByIdAndDelete(id);
    }
}