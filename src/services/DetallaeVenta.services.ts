import { DetalleVentaReposytory } from "../repository/DetalleVenta.repository.ts";

// implementacion de los cervices, los cuales consumen el repository
export class DetalleVentaService {

  private detalleVentaRepository: DetalleVentaReposytory;

  constructor() {
    this.detalleVentaRepository = new DetalleVentaReposytory();
  }

  async registraDetalleventa(data: any) {
    return await this.detalleVentaRepository.registraDetalleventa(data);
  }

  async obtenerDetalleVentas() {
    return await this.detalleVentaRepository.obtenerDetalleVentas();
  }

  async obtenerDetalleVentaId(id: string) {
    return await this.detalleVentaRepository.obtenerDetalleVentaId(id);
  }

  async buscarDetalleVenta(filtro: any) {
    return await this.detalleVentaRepository.buscarDetalleVenta(filtro);
  }

  async actualizarDetalleVenta(id: string, data: any) {
    return await this.detalleVentaRepository.actualizarDetalleVenta(id, data);
  }

  async eliminarDetalleVenta(id: string) {
    return await this.detalleVentaRepository.eliminarDetalleVenta(id);
  }

}
