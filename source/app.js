'use strict;'

import express from 'express';
import bodyParser from 'body-parser';
import 'dotenv/config.js';

const app = express();

import router from './controllers/auth';

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/auth', router);

export default app;