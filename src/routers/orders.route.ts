import express from 'express';
import OrdersController from '../controllers/orders.controller';

const router = express.Router();

router.get('/', OrdersController.findAllOrders);

export default router;