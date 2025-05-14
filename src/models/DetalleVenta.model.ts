import mongoose from "mongoose";

const DetalleVentaSchema = new mongoose.Schema({
    producto: {type: mongoose.Schema.Types.ObjectId, ref: 'TipoProducto', required: true },
    cantidad: {type: Number , required: true},
    costoSinIva: {type: Number, required: true},
    valorIva: {type: Number, required: true}
});

export default mongoose.model('DetalleVenta', DetalleVentaSchema)