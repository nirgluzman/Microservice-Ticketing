import express from 'express';
import { json } from 'body-parser';

import 'colors';

const PORT = process.env.PORT || 3000;

const app = express();

// middleware to parse incoming JSON requests and put the parsed data in req.body
app.use(json());

// start listening to incoming requests from a client
app.listen(PORT, () => console.log(`Auth is up! Listening on port ${PORT}`.green));
