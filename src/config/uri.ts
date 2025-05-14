import dotenv from 'dotenv';
dotenv.config();

// llamanos la conexion que tenemos en el archivo .env
export const MONGODB_URI = process.env.MONGODB_URL as string ;