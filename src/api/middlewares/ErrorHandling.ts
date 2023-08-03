import { Request, Response } from 'express';
import { ApiError } from '../helpers/api-erros';

export default (err: Error & Partial<ApiError>, req: Request, res: Response) => {
  const statusCode = err.statusCode ?? 500;
  const message = err.statusCode ? err.message : 'Internal Server Error';

  return res.status(statusCode).json({ message });
};

export class BadRequestError extends ApiError {
  constructor(message: string) {
    super(message, 400);
  }
}
