import express from 'express';
import ProductsController from '../controllers/products.controller';

const router = express.Router();

router.get('/', ProductsController.findAllProducts);

router.post('/', ProductsController.createProduct);

export default router;