// Error Handling middleware, https://expressjs.com/en/guide/error-handling.html
// The objective - sending a very consistent error message to the client (React application).

import { Request, Response, NextFunction } from 'express';
import { RequestValidationError } from '../errors/request-validation-error';
import { DatabaseConnectionError } from '../errors/database-connection-error';

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof RequestValidationError) {
    console.log('handling this error as a request validation error');

    return res.status(err.statusCode).send({ errors: err.serializeErrors() });
  }

  if (err instanceof DatabaseConnectionError) {
    console.log('handling this error as a database connection error');
    return res.status(err.statusCode).send({ errors: err.serializeErrors() });
  }

  console.log('handling this error as a generic error');
  res.status(400).send({ errors: [{ message: 'Something went wrong' }] });
};
