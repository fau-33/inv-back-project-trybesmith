import ProductModel from '../database/models/product.model';
import { Product } from '../types/Product';
import { ServiceResponse } from '../types/ServiceResponse';

const validateParams = ({
  name,
  price,
  orderId,
}: Product): string | null => {
  if (!name) return '"name" is required';
  if (!price) return '"price" is required';
  if (!orderId) return '"orderId" is required';
  return null;
};

const createProduct = async (product: Product): Promise<ServiceResponse<Product>> => {
  let responseService: ServiceResponse<Product>;

  const error = validateParams(product);

  if (error) {
    responseService = {
      status: 'INVALID_DATA', data: { message: error },
    };
    return responseService;
  }
  const response = await ProductModel.create(product);
  const { id, name, price } = response.dataValues;

  responseService = {
    status: 'CREATED',
    data: { id, name, price },
  };

  return responseService;
};

export default {
  createProduct,
};