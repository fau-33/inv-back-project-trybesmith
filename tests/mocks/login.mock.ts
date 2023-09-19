const validUsername = 'Hagar';
const validPassword = 'terrível';
const noUsernameLoginBody = { username: '', password: validPassword };
const noPasswordLoginBody = { username: validUsername, password: '' };
const notExistingUserBody = { username: 'notfound', password: validPassword };
const existingUserWithWrongPasswordBody = { username: validUsername, password: 'wrong_password' };
const hashPassword = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJIYWdhciIsImlhdCI6MTY5MjM5MTQ0MX0.st37LuPsrjMGNWPxoVOKfh3mXCoHrFe5a9BG-IAb1LI';

const validLoginBody = {
  username: validUsername,
  password: validPassword,
};

export default {
  noUsernameLoginBody,
  noPasswordLoginBody,
  notExistingUserBody,
  existingUserWithWrongPasswordBody,
  hashPassword,
  validLoginBody,
};