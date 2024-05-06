// Error Handling middleware, https://expressjs.com/en/guide/error-handling.html
// The objective - sending a very consistent error message to the client (React application).

import { Request, Response, NextFunction } from 'express';
import { CustomError } from '../errors/custom-error';

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).send({ errors: err.serializeErrors() });
  }

  console.log('handling this error as a generic error');
  res.status(400).send({ errors: [{ message: 'Something went wrong' }] });
};
