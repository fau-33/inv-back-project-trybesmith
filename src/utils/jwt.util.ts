import jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET || 'secret';

type TokenPayload = {
  id: number;
  username: string;
};

export const sign = (payload: TokenPayload): string => {
  const token = jwt.sign(payload, secret);
  return token;
};

export const verify = (token: string): TokenPayload => {
  const decoded = jwt.verify(token, secret) as TokenPayload;
  return decoded;
};

export default {
  sign,
  verify,
};