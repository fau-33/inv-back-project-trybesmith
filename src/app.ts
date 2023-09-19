import express from 'express';
import ProductsRouter from './routers/products.route';
import OrdersRouter from './routers/orders.route';

const app = express();

app.use(express.json());

app.use('/products', ProductsRouter);

app.use('/orders', OrdersRouter);

export default app;
