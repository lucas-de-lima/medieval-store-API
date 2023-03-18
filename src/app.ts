import express from 'express';
import orderRouter from './routes/orders.routes';
import productRouter from './routes/products.routes';
import usersRouter from './routes/user.routes';

const app = express();

app.use(express.json());

app.use('/products', productRouter);
app.use('/users', usersRouter);
app.use('/orders', orderRouter);

export default app;
