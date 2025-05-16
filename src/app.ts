import express from 'express';
import morgan from 'morgan';
import "reflect-metadata";
import EmoleadoRouter from './routes/Empleado.routes.ts'
import ClienteRouter from './routes/Cliente.routes.ts'
import TipoProductoRoruter from './routes/TipoProducto.routes.ts'

const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.use(EmoleadoRouter);
app.use(ClienteRouter);
app.use(TipoProductoRoruter);

export default app;