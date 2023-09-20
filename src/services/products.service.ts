import ProductModel from '../database/models/product.model';
import { Product } from '../types/Product';
import { ServiceResponse } from '../types/ServiceResponse';

const createProduct = async (product: Product): Promise<ServiceResponse<Product>> => {
  type ResponseServiceType = ServiceResponse<Product>;
  const response = await ProductModel.create(product);

  const responseService: ResponseServiceType = {
    status: 'CREATED',
    data: response.dataValues,
  };

  return responseService;
};

const findAllProducts = async (): Promise<ServiceResponse<Array<object>>> => {
  const products = await ProductModel.findAll();

  return {
    status: 'SUCCESSFUL',
    data: products,
  };
};

export default {
  createProduct,
  findAllProducts,
};