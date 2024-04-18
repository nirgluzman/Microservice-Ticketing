import { ValidationError } from 'express-validator';

export class RequestValidationError extends Error {
  statusCode = 400;

  constructor(public errors: ValidationError[]) {
    super();

    // Only because we are extending a built-in class (Error), https://stackoverflow.com/questions/76159041/why-do-error-subclasses-invoke-object-setprototypeofthis-in-the-construct
    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }

  serializeErrors() {
    // https://www.udemy.com/course/microservices-with-node-js-and-react/learn/lecture/37727290#overview
    return this.errors.map(err => {
      if (err.type === 'field') {
        return { message: err.msg, field: err.path };
      }
    });
  }
}
