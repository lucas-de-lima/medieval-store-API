import express from 'express';
import orderRouter from './routes/orders.routes';
import productRouter from './routes/products.routes';
import usersRouter from './routes/user.routes';
import loginRouter from './routes/login.routes';

const app = express();

app.use(express.json());

app.use('/login', loginRouter);
app.use('/products', productRouter);
app.use('/users', usersRouter);
app.use('/orders', orderRouter);

export default app;
