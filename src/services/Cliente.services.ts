import { ClienteRepository } from "../repository/Cliente.repository.ts";

// implementacion de los cervices, los cuales consumen el repository
export class ClienteService {

      private clienteRepository: ClienteRepository;

    constructor(){
        this.clienteRepository = new ClienteRepository
    }

    async registrarCliente(data: any){
        return await this.clienteRepository.registrarCliente(data);
    }

    async obtenerClientes(){
        return await this.clienteRepository.obtenerClientes();
    }

    async obtenerClienteId(id: string){
        return this.clienteRepository.obtenerClienteId(id);
    }

    async obtenerClienteCedula(identificacion: string){
        return this.clienteRepository.obtenerClienteCedula(identificacion);
    }

    async actualizarCliente(id: string, data: any){
        return this.clienteRepository.actualizarCliente(id, data);
    }

    async eliminarCliente(id: string){
        return await this.clienteRepository.eliminarCliente(id);
    }

}