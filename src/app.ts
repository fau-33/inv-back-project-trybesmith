import express from 'express';

import ProductsRouter from './routers/products.route';
import OrdersRouter from './routers/orders.route';
import LoginRouter from './routers/login.route';

const app = express();

app.use(express.json());

app.use('/products', ProductsRouter);

app.use('/orders', OrdersRouter);

app.use('/login', LoginRouter);

export default app;