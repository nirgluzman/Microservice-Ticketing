// Error Handling middleware, https://expressjs.com/en/guide/error-handling.html
// The objective - sending a very consistent error message to the client (React application).

import { Request, Response, NextFunction } from 'express';
import { RequestValidationError } from '../errors/request-validation-error';
import { DatabaseConnectionError } from '../errors/database-connection-error';

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof RequestValidationError) {
    console.log('handling this error as a request validation error');

    // https://www.udemy.com/course/microservices-with-node-js-and-react/learn/lecture/37727290#overview
    const formattedErrors = err.errors.map(error => {
      if (error.type === 'field') {
        return { message: error.msg, field: error.path };
      }
    });
    return res.status(400).send({ errors: formattedErrors });
  }

  if (err instanceof DatabaseConnectionError) {
    console.log('handling this error as a database connection error');
    return res.status(500).send({ errors: [{ message: err.reason }] });
  }

  console.log('handling this error as a generic error');
  res.status(400).send({ errors: [{ message: 'Something went wrong' }] });
};
