import express from 'express';
import productRouter from './routes/productsRoutes';
import usersRouter from './routes/userRoutes';

const app = express();

app.use(express.json());

app.use('/products', productRouter);
app.use('/users', usersRouter);

export default app;
