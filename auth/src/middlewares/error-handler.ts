// Error Handling middleware, https://expressjs.com/en/guide/error-handling.html
// The objective - sending a very consistent error message to the client (React application).

import { Request, Response, NextFunction } from 'express';

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(`Error message: ${err}`);
  res.status(400).send({ message: 'Something went wrong!' });
};
