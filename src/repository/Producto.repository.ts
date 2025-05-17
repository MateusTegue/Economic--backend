import ProductoModel from "../models/Producto.model.ts";

// implentacion de la logica que estara accediendo a la base de datos 
export class ProductoRepository {
    async obtenerProductos(){
        return ProductoModel.find().populate('tipo_producto');
    }

    async obtenerProductoId(id: string){
        return ProductoModel.findById(id).populate('tipo_producto');
    }

    async obtenerProductoCodigo(codigo: string){
        return ProductoModel.findById(codigo).populate('tipo_producto');
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