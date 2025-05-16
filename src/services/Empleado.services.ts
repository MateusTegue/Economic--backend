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

    async obtenerEmpleadoId(_id: string){
        return this.empleadoRepository.obtenerEmpleadoId(_id);
    }

    async obtenerEmpleadoCedula(identificacion: string){
        return this.empleadoRepository.obtenerEmpleadoCedula(identificacion);
    }

    async obtenerEmpleadoPorUsuario(usuario: string){
        return this.empleadoRepository.obtenerEmpleadoPorUsuario(usuario);
    }



    async actualizarEmpleado(_id: string, data: any){
        return this.empleadoRepository.actualizarEmpleado(_id, data);
    }

    async eliminarEmpleado(_id: string){
        return await this.empleadoRepository.eliminarEmpleado(_id);
    }

}