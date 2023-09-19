import { Request, Response } from 'express';
import LoginService from '../services/login.service';
import mapStatusHTTP from '../utils/mapStatusHTTP';

const login = async (req: Request, res: Response): Promise<Response> => {
  const ServiceResponse = await LoginService.verifyLogin(req.body);
  return res.status(mapStatusHTTP(ServiceResponse.status)).json(ServiceResponse.data);
};

export default {
  login,
};