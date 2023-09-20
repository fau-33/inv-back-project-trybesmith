import { NextFunction, Request, Response } from 'express';

const checkOrderId = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { orderId } = req.body;

  if (!orderId) return res.status(400).json({ message: '"orderId" is required' });

  return next();
};

export default checkOrderId;