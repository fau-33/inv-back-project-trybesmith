import { expect } from 'chai';
import sinon from 'sinon';

import OrdersMock from '../../mocks/orders.mock';
import OrdersService from '../../../src/services/orders.service';

describe('OrdersService', function () {
  beforeEach(function () { sinon.restore(); });

  it('Verifica se os pedidos são listados com sucesso', async function () {
    const serviceResponse = await OrdersService.findAllOrders();

    expect(serviceResponse).to.have.property('status');
    expect(serviceResponse).to.have.property('data');
    expect(serviceResponse.status).to.equal('SUCCESSFUL');
    expect(serviceResponse.data).to.deep.equal(OrdersMock.allOrdersInDB);
  });
});