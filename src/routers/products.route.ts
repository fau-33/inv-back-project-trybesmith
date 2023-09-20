import express from 'express';
import ProductsController from '../controllers/products.controller';
import priceValidation from '../middlewares/productPrice.validations';
import nameValidation from '../middlewares/productName.validations';
import checkOrderId from '../middlewares/productOrderId.validations';

const router = express.Router();

router.get('/', ProductsController.findAllProducts);

router.post('/', nameValidation, priceValidation, checkOrderId, ProductsController.createProduct);

export default router;