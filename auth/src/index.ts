import express from 'express';
import 'express-async-errors'; // catch errors at runtime without using try/catch blocks in your async functions.
import { json } from 'body-parser';

import { currentUserRouter } from './routes/current-user';
import { signinRouter } from './routes/signin';
import { signoutRouter } from './routes/signout';
import { signupRouter } from './routes/signup';

import { errorHandler } from './middlewares/error-handler';
import { NotFoundError } from './errors/not-found-error';

const PORT = process.env.PORT || 3000;

const app = express();

// middleware to parse incoming JSON requests and put the parsed data in req.body
app.use(json());

app.use(currentUserRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(signupRouter);

// Throw an error if a request is made to an unknown route.
app.all('*', async (req, res) => {
  throw new NotFoundError();
});

app.use(errorHandler);

// start listening to incoming requests from a client
app.listen(PORT, () => console.log(`Auth is up! Listening on port ${PORT}`));
