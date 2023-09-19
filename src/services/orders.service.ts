import ProductModel from '../database/models/product.model';
import OrderModel from '../database/models/order.model';
import { ServiceResponse } from '../types/ServiceResponse';

const findAllOrders = async (): Promise<ServiceResponse<Array<object>>> => {
  const result = await OrderModel.findAll({
    include: [{
      model: ProductModel,
      as: 'productIds',
      attributes: ['id'],
    }],
  });

  const formattedResult = result.map(({ dataValues }) => ({
    id: dataValues.id,
    userId: dataValues.userId,
    productIds: dataValues.productIds?.map((p) => p.id) || [],
  }));

  return {
    status: 'SUCCESSFUL',
    data: formattedResult,
  };
};

export default {
  findAllOrders,
};