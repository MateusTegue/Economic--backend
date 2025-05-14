import mongoose from 'mongoose';
import DetalleVentaSchema from './DetalleVenta.model.ts';


const VentaSchema = new mongoose.Schema({
    fecha: {type: Date , default: Date.now},
    detalles: [DetalleVentaSchema],
    cliente: {type: mongoose.Schema.Types.ObjectId, ref: 'Cliente'},
    empleado: {type: mongoose.Schema.Types.ObjectId, ref: 'Empleado', required: true}
});


export default mongoose.model('Venta', VentaSchema);




