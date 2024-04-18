import { ValidationError } from 'express-validator';

export class RequestValidationError extends Error {
  constructor(public errors: ValidationError[]) {
    super();

    // Only because we are extending a built-in class (Error), https://stackoverflow.com/questions/76159041/why-do-error-subclasses-invoke-object-setprototypeofthis-in-the-construct
    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }
}
