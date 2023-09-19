import { Request, Response } from 'express';
import OrdersService from '../services/orders.service';
import mapStatusHTTP from '../utils/mapStatusHTTP';

const findAllOrders = async (_req: Request, res: Response): Promise<Response> => {
  const result = await OrdersService.findAllOrders();

  return res.status(mapStatusHTTP(result.status)).json(result.data);
};

export default {
  findAllOrders,
};