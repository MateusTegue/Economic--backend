import { EmpleadoRepository } from "../repository/Empleado.repository.ts";


export class EmpleadoService {

      private empleadoRepository: EmpleadoRepository;

    constructor(){
        this.empleadoRepository = new EmpleadoRepository
    }

    async registrarEmpleado(data: any){
        return await this.empleadoRepository.registrarEmpleado(data);
    }

    async obtenerEmpleados(){
        return await this.empleadoRepository.obtenerEmpleados();
    }

    async obtenerEmpleadoId(id: string){
        return this.empleadoRepository.obtenerEmpleadoId(id);
    }

    async actualizarEmpleado(id: string, data: any){
        return this.empleadoRepository.actualizarEmpleado(id, data);
    }

    async eliminarEmpleado(id: string){
        return await this.empleadoRepository.eliminarEmpleado(id);
    }

}