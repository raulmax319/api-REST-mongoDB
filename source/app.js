'use strict;'

import express from 'express';
import joi from 'joi';
import bodyParser from 'body-parser';
import 'dotenv/config.js';
import routes from './modules/routes/index';

const app = express();

app.use(express.json());

app.use(routes);


export default app;