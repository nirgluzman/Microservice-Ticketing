import { ValidationError } from 'express-validator';
import { CustomError } from './custom-error';

// define an interface to force the type of the class.
// interface CustomError {
//   statusCode: number;
//   serializeErrors(): { message: string; field?: string }[];
// }

export class RequestValidationError extends CustomError {
  statusCode = 400;

  constructor(public errors: ValidationError[]) {
    super('Invalid request parameters');

    // Only because we are extending a built-in class (Error), https://stackoverflow.com/questions/76159041/why-do-error-subclasses-invoke-object-setprototypeofthis-in-the-construct
    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }

  serializeErrors() {
    // https://www.udemy.com/course/microservices-with-node-js-and-react/learn/lecture/37727290#overview
    // https://www.udemy.com/course/microservices-with-node-js-and-react/learn/lecture/37727992#overview
    return this.errors.map(err => {
      if (err.type === 'field') {
        return { message: err.msg, field: err.path };
      }
      return { message: err.msg };
    });
  }
}
