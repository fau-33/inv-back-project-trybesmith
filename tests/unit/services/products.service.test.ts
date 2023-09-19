import { expect } from 'chai';
import sinon from 'sinon';

import ProductModel from '../../../src/database/models/product.model';
import productsService from '../../../src/services/products.service';
import productsMock from '../../mocks/products.mock';

describe('ProductsService', function () {
  beforeEach(function () { sinon.restore(); });

  it('Verifica se um produto é criado com sucesso no Banco de Dados', async function () {
    const productInstance = ProductModel.build(productsMock.existingProduct);

    sinon.stub(ProductModel, 'create')
      .resolves(productInstance);

    const serviceResponse = await productsService.createProduct(productsMock.validProductInBody);

    expect(serviceResponse).to.have.property('status');
    expect(serviceResponse).to.have.property('data');
    expect(serviceResponse.status).to.equal('CREATED');
    expect(serviceResponse.data).to.deep.equal(productInstance.dataValues);
  });

  it('Lista todos os produtos corretamente', async function () {
    const productInstance = await ProductModel.findAll();
    const extractedProducts = productInstance.map((p) => p.get());

    sinon.stub(ProductModel, 'findAll')
      .resolves(productInstance);

    const serviceResponse = await productsService.findAllProducts();

    expect(serviceResponse).to.have.property('status');
    expect(serviceResponse).to.have.property('data');
    expect(serviceResponse.status).to.equal('SUCCESSFUL');
    expect(extractedProducts).to.deep.equal(productsMock.allProductsInDB);
  });

  it('Verifica se é retornada uma mensagem de erro ao tentar criar um produto com dados inválidos', async function () {
    const serviceResponse = await productsService.createProduct(productsMock.noNameProductInBody);

    expect(serviceResponse).to.have.property('status');
    expect(serviceResponse).to.have.property('data');
    expect(serviceResponse.status).to.equal('INVALID_DATA');
    expect(serviceResponse.data).to.deep.equal({ message: '"name" is required' });
  });
});