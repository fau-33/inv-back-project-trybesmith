import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';

chai.use(chaiHttp);

import ordersMock from '../../mocks/orders.mock';
import app from '../../../src/app';

describe('GET /orders', function () { 
  beforeEach(function () { sinon.restore(); });

  it('Lista todos os pedidos(orders) do Banco de Dados corretamente com um status 200', async function () {
    const httpResponse = await chai.request(app).get('/orders');

    expect(httpResponse.status).to.equal(200);
    expect(httpResponse.body).to.deep.equal(ordersMock.allOrdersInDB);
  });
});