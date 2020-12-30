'use strict;'

import express from 'express';
import bodyParser from 'body-parser';

const app = express();

import auth from './routes/authRoute';
import user from './routes/projectRoute';

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/auth', auth);
app.use('/project', user);

export default app;