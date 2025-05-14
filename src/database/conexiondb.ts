import mongoose from "mongoose"; 
import { MONGODB_URI } from "../config/uri.ts";


export const connectDB = async () => {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log("Conectado a la base de datos correctamente!")
    } catch (error) {
        console.log("Error al conectar a la base de datos!");
        process.exit(1);
    }
};


