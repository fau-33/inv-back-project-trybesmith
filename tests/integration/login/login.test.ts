import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';

import app from '../../../src/app';
import loginMock from '../../mocks/login.mock';

chai.use(chaiHttp);

describe('POST /login', function () { 
  beforeEach(function () { sinon.restore(); });

  it('Deve retornar um erro ao não enviar um username', async function () {
    const httpResponse = await chai.request(app).post('/login').send(loginMock.noUsernameLoginBody);

    expect(httpResponse.status).to.equal(400);
    expect(httpResponse.body).to.be.deep.equal({ message: '"username" and "password" are required' });
  });

  it('Deve retornar um erro ao não enviar um password', async function () {
    const httpResponse = await chai.request(app).post('/login').send(loginMock.noPasswordLoginBody);

    expect(httpResponse.status).to.equal(400);
    expect(httpResponse.body).to.be.deep.equal({ message: '"username" and "password" are required' });
  });

  it('Deve retornar um erro ao enviar um username inexistente', async function () {
    const httpResponse = await chai.request(app).post('/login').send(loginMock.notExistingUserBody);

    expect(httpResponse.status).to.equal(401);
    expect(httpResponse.body).to.be.deep.equal({ message: 'Username or password invalid' });
  });

  it('Deve retornar um erro ao enviar um user válido com um password inválido', async function () {
    const httpResponse = await chai.request(app).post('/login').send(loginMock.existingUserWithWrongPasswordBody);

    expect(httpResponse.status).to.equal(401);
    expect(httpResponse.body).to.be.deep.equal({ message: 'Username or password invalid' });
  });

  it('Deve retornar um token ao enviar um username e password válidos', async function () {
    const httpResponse = await chai.request(app).post('/login').send(loginMock.validLoginBody);

    expect(httpResponse.status).to.equal(200);
    expect(httpResponse.body).to.have.key('token');
  });
});