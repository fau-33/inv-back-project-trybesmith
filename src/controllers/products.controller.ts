import { Request, Response } from 'express';
import ProductsService from '../services/products.service';
import mapStatusHTTP from '../utils/mapStatusHTTP';

const createProduct = async (req: Request, res: Response): Promise<Response> => {
  const serviceResponse = await ProductsService.createProduct(req.body);
  return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
};

const findAllProducts = async (_req: Request, res: Response): Promise<Response> => {
  const serviceResponse = await ProductsService.findAllProducts();

  return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
};

export default {
  createProduct,
  findAllProducts,
};