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

  it('Retorna uma mensagem de erro com status 422 se o "name" não for do tipo "string"', async function () {
    const httpResponse = await chai.request(app).post('/products').send(productsMock.wrongTypeName);

    expect(httpResponse.status).to.equal(422);
    expect(httpResponse.body).to.be.deep.equal({ message: '"name" must be a string' });
  });

  it('Retorna uma mensagem de erro com status 422 se o tamanho do "name" for menor que 3', async function () {
    const httpResponse = await chai.request(app).post('/products').send(productsMock.nameWithInvalidLength);

    expect(httpResponse.status).to.equal(422);
    expect(httpResponse.body).to.be.deep.equal({ message: '"name" length must be at least 3 characters long' });
  });

  it('Retorna uma mensagem de erro com status 400 se o "price" não for passado no corpo da requisição', async function () {
    const httpResponse = await chai.request(app).post('/products').send(productsMock.noPriceProductInBody);

    expect(httpResponse.status).to.equal(400);
    expect(httpResponse.body).to.be.deep.equal({ message: '"price" is required' });
  });

  it('Retorna uma mensagem de erro com status 422 se o "price" não for do tipo "string"', async function () {
    const httpResponse = await chai.request(app).post('/products').send(productsMock.wrongTypePrice);

    expect(httpResponse.status).to.equal(422);
    expect(httpResponse.body).to.be.deep.equal({ message: '"price" must be a string' });
  });

  it('Retorna uma mensagem de erro com status 422 se o "price" tiver menos de 3 caracteres', async function () {
    const httpResponse = await chai.request(app).post('/products').send(productsMock.priceWithInvalidLength);

    expect(httpResponse.status).to.equal(422);
    expect(httpResponse.body).to.be.deep.equal({ message: '"price" length must be at least 3 characters long' });
  });
});