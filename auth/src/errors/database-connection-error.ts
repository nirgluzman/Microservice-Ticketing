export class DatabaseConnectionError extends Error {
  statusCode = 500;
  reason = 'Error connecting to database';

  constructor() {
    super();

    // Only because we are extending a built-in class (Error), https://stackoverflow.com/questions/76159041/why-do-error-subclasses-invoke-object-setprototypeofthis-in-the-construct
    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }

  serializeErrors() {
    return [{ message: this.reason }];
  }
}
