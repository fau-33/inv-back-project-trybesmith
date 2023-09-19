import { expect } from 'chai';
import sinon from 'sinon';

import UserModel from '../../../src/database/models/user.model';
import LoginService from '../../../src/services/login.service';
import loginMock from '../../mocks/login.mock';
loginMock

describe('LoginService', function () {
  beforeEach(function () { sinon.restore(); });

  it('Deve retornar um erro ao não enviar um username', async function () {
    const serviceResponse = await LoginService.verifyLogin(loginMock.noUsernameLoginBody);

    expect(serviceResponse.status).to.equal('INVALID_DATA');
    expect(serviceResponse.data).not.to.have.key('token');
    expect(serviceResponse.data).to.deep.equal({ message: '"username" and "password" are required' });
  });

  it('Deve retornar um erro ao não enviar um password', async function () {
    const serviceResponse = await LoginService.verifyLogin(loginMock.noPasswordLoginBody);

    expect(serviceResponse.status).to.equal('INVALID_DATA');
    expect(serviceResponse.data).not.to.have.key('token');
    expect(serviceResponse.data).to.deep.equal({ message: '"username" and "password" are required' });
  });

  it('Deve retornar um erro ao enviar um username inexistente', async function () {
    sinon.stub(UserModel, 'findOne')
      .resolves(null);

    const serviceResponse = await LoginService.verifyLogin(loginMock.notExistingUserBody);

    expect(serviceResponse.status).to.equal('UNAUTHORIZED');
    expect(serviceResponse.data).not.to.have.key('token');
    expect(serviceResponse.data).to.deep.equal({ message: 'Username or password invalid' });
  });

  it('Deve retornar um erro ao enviar um user existente com um password inválido', async function () {
    const serviceResponse = await LoginService.verifyLogin(loginMock.existingUserWithWrongPasswordBody);

    expect(serviceResponse.status).to.equal('UNAUTHORIZED');
    expect(serviceResponse.data).not.to.have.key('token');
    expect(serviceResponse.data).to.deep.equal({ message: 'Username or password invalid' });
  });

  it('Deve retornar um token ao enviar um username e password válidos', async function () {
    const serviceResponse = await LoginService.verifyLogin(loginMock.validLoginBody);

    expect(serviceResponse.status).to.equal('SUCCESSFUL');
    expect(serviceResponse.data).to.have.key('token');
  });
});