import express, { Request, Response } from 'express';

// https://express-validator.github.io/docs/
import { body, validationResult } from 'express-validator';

import { RequestValidationError } from '../errors/request-validation-error';
import { DatabaseConnectionError } from '../errors/database-connection-error';

const router = express.Router();

router.post(
  '/api/users/signup',
  [
    body('email').isEmail().withMessage('Email must be valid'),
    body('password')
      .trim()
      .isLength({ min: 4, max: 20 })
      .withMessage('Password must be between 4 and 20 characters')
  ],
  async (req: Request, res: Response) => {
    // find the validation errors in this request and wraps them in an object.
    const errors = validationResult(req);

    // checking if Validator found errors
    if (!errors.isEmpty()) {
      // In JavaScript (not TypeScript)
      // const error = new Error('Invalid request parameters');
      // error.reasons = errors.array();
      // throw error;

      throw new RequestValidationError(errors.array());
    }

    const { email, password } = req.body;

    console.log('Creating a user...');
    throw new DatabaseConnectionError();
  }
);

export { router as signupRouter };
