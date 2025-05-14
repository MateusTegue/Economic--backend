import { TipoProductoRepository } from "../repository/TipoProducto.repository.ts";

export class TipoProductoService {

      private tipoProductoRepository: TipoProductoRepository;

    constructor(){
        this.tipoProductoRepository = new TipoProductoRepository();
    }

    async registrarTipoProducto(data: any){
        return await this.tipoProductoRepository.registrarTipoProducto(data)
    }

    async obtenerTipoProductos(){
        return await this.tipoProductoRepository.obtenerTipoProductos();
    }

    async obtenerTipoProductoId(id: string){
        return await this.tipoProductoRepository.obtenerTipoProductoId(id);
    }

    async actualizarTipoProducto(id: string, data: any){
        return await this.tipoProductoRepository.actualizarTipoProducto(id, data);
    }

    async eliminarTipoProducto(id: string){
        return await this.tipoProductoRepository.eliminarTipoProducto(id);
    }
}