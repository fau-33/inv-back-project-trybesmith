import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { Request, Response } from 'express';

chai.use(sinonChai);

import productsMock from '../../mocks/products.mock';
import ProductsService from '../../../src/services/products.service';
import ProductsController from '../../../src/controllers/products.controller';

describe('ProductsController', function () {
  const req = {} as Request;
  const res = {} as Response;

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    sinon.restore();
  });

  it('Verifica se um produto é criado com sucesso no Banco de Dados', async function () {
    req.body = productsMock.validProductInBody;
    const serviceResponse = productsMock.existingProduct;

    sinon.stub(ProductsService, 'createProduct')
      .resolves({
        status: 'SUCCESSFUL',
        data: serviceResponse,
      });

    await ProductsController.createProduct(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(serviceResponse);
  });
});