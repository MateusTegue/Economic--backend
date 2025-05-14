import { ProductoRepository } from "../repository/Producto.repository.ts";

export class ProductoService {

  private productoRepository: ProductoRepository;

  constructor() {
    this.productoRepository = new ProductoRepository();
  }

  async obtenerProductos() {
    return await this.productoRepository.obtenerProductos();
  }

  async obtenerProductoId(id: string) {
    return await this.productoRepository.obtenerProductoId(id);
  }

  async obtenerProductoCodigo(codigo: string) {
    return await this.productoRepository.obtenerProductoCodigo(codigo);
  }

  async registrarProducto(data: any) {
    return await this.productoRepository.registrarProducto(data);
  }

  async actualizarProducto(id: string, data: any) {
    return await this.productoRepository.actualizarProducto(id, data);
  }

  async eliminarProducto(id: string) {
    return await this.productoRepository.eliminarProducto(id);
  }

}
