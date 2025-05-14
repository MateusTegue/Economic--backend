import mongoose from "mongoose";    

const ClienteSchema = new mongoose.Schema({
     indentificacion: {type: String, required: true, unique: true},
     primer_nombre: {type: String, required: true},
     segundo_nombre: {type: String},
     primer_apellido: {type: String, required: true},
     segundo_apellido: {type: String, required: true},
     telefono: {type: String, required: true},
     correo: {type: String, required: true, unique: true},
     puntos: {type: Number, default: 0},
     genero: {type: String, enum: ['MASCULINO', 'FEMENINO'], required: true}
});

export default mongoose.model("Cliente", ClienteSchema)


