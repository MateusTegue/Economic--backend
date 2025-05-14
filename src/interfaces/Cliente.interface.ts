export interface ICliente {
  _id?: string;
  indentificacion: string;
  primer_nombre: string;
  segundo_nombre?: string;
  primer_apellido: string;
  segundo_apellido: string;
  telefono: string;
  correo: string;
  puntos?: number;
  genero: "MASCULINO" | "FEMENINO";
}
