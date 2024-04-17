// Error Handling middleware, https://expressjs.com/en/guide/error-handling.html
// The objective - sending a very consistent error message to the client (React application).

import { Request, Response, NextFunction } from 'express';
import { RequestValidationError } from '../errors/request-validation-error';
import { DatabaseConnectionError } from '../errors/database-connection-error';

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof RequestValidationError) {
    console.log('handling this error as a request validation error');
  }

  if (err instanceof DatabaseConnectionError) {
    console.log('handling this error as a database connection error');
  }

  console.log(err);

  res.status(400).send({ message: err.message });
};
