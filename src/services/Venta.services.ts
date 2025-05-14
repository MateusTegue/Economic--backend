import { VentaRepository } from "../repository/Venta.repository.ts";

export class VentaService {

  private ventaRepository: VentaRepository;

  constructor() {
    this.ventaRepository = new VentaRepository();
  }

  async registrarVenta(data: any) {
    return await this.ventaRepository.registrarVenta(data);
  }

  async obtenerVentas() {
    return await this.ventaRepository.obtenerVentas();
  }

  async obtenerVentaId(id: string) {
    return await this.ventaRepository.obtenerVentaId(id);
  }

  async buscarVenta(filtro: any) {
    return await this.ventaRepository.buscarVenta(filtro);
  }

  async actualizarVenta(id: string, data: any) {
    return await this.ventaRepository.actualizarVenta(id, data);
  }

  async eliminarVenta(id: string) {
    return await this.ventaRepository.eliminarVenta(id);
  }

}
