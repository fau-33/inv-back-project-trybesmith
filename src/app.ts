import express from 'express';
import ProductsRouter from './routers/products.route';

const app = express();

app.use(express.json());

app.use('/products', ProductsRouter);

export default app;
