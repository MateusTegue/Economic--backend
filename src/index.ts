import app from "./app.ts";
import { PORT } from "./config/puerto.ts";
import { connectDB } from "./database/conexiondb.ts";


async function main() {
    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log(`Servidor corriendo en el puerto http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error("Error al iniciar el servidor:");
    }
}

main();