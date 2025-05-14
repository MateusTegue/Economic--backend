import mongoose from "mongoose";

const TipoProductoSchema = new mongoose.Schema({
    descripcion: { type: String, required: true, unique: true},
    procentajeIva: { type: Number, required: true}
});

export default mongoose.model('TipoProducto', TipoProductoSchema)



