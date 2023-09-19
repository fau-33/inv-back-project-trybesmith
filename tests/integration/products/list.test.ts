import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';

chai.use(chaiHttp);

import ProductModel from '../../../src/database/models/product.model';
import productsMock from '../../mocks/products.mock';
import app from '../../../src/app';

describe('GET /products', function () { 
  beforeEach(function () { sinon.restore(); });

  it('Lista todos os produtos do Banco de Dados corretamente com um status 200', async function () {
    const productInstance = await ProductModel.findAll();

    sinon.stub(ProductModel, 'findAll')
      .resolves(productInstance);

    const httpResponse = await chai.request(app).get('/products');

    expect(httpResponse.status).to.equal(200);
    expect(httpResponse.body).to.deep.equal(productsMock.allProductsInDB);
  });
});