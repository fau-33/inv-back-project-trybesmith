import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';

import ProductModel from '../../../src/database/models/product.model';
import productsMock from '../../mocks/products.mock';
import app from '../../../src/app';

chai.use(chaiHttp);

describe('POST /products', function () { 
  beforeEach(function () { sinon.restore(); });

  it('Retorna o status 201 quando um product é criado com sucesso', async function () {
    const productInstance = ProductModel.build(productsMock.existingProduct);

    sinon.stub(ProductModel, 'create')
      .resolves(productInstance);

    const httpResponse = await chai.request(app).post('/products').send(productsMock.validProductInBody);

    expect(httpResponse.status).to.equal(201);
    expect(httpResponse.body).to.be.deep.equal(productInstance.dataValues);
  });

  it('Retorna uma mensagem de erro com status 400 se o "name" não for passado no corpo da requisição', async function () {
    const httpResponse = await chai.request(app).post('/products').send(productsMock.noNameProductInBody);

    expect(httpResponse.status).to.equal(400);
    expect(httpResponse.body).to.be.deep.equal({ message: '"name" is required' });
  });

  it('Retorna uma mensagem de erro com status 400 se o "price" não for passado no corpo da requisição', async function () {
    const httpResponse = await chai.request(app).post('/products').send(productsMock.noPriceProductInBody);

    expect(httpResponse.status).to.equal(400);
    expect(httpResponse.body).to.be.deep.equal({ message: '"price" is required' });
  });

  it('Retorna uma mensagem de erro com status 400 se o "orderId" não for passado no corpo da requisição', async function () {
    const httpResponse = await chai.request(app).post('/products').send(productsMock.noOrderIdProductInBody);

    expect(httpResponse.status).to.equal(400);
    expect(httpResponse.body).to.be.deep.equal({ message: '"orderId" is required' });
  });
});