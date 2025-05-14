import mongoose from "mongoose";    

const EmpleadoSchema = new mongoose.Schema({
     imagen : { data : Buffer, contentType: String },
     identificacion: {type: String, required: true, unique: true},
     primer_nombre: {type: String, required: true},
     segundo_nombre: {type: String},
     primer_apellido: {type: String, required: true},
     segundo_apellido: {type: String, required: true},
     usuario: {type: String, required: true, unique: true},
     genero: {type: String, enum: ['MASCULINO', 'FEMENINO'], required: true}
});

export default mongoose.model("Empleado", EmpleadoSchema)