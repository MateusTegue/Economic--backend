import mongoose from 'mongoose';

const ProductoSchema = new mongoose.Schema({
    codigo: { type: String, required: true, unique: true },
    nombre: { type: String, required: true },
    costoSinIva: { type: Number, required: true },
    tipo_producto: { type: mongoose.Schema.Types.ObjectId, ref: 'TipoProducto', required: true }
});

export default mongoose.model('Producto', ProductoSchema);







