'use strict;'

import express from 'express';
import bodyParser from 'body-parser';
import 'dotenv/config.js';

const app = express();

import auth from './routes/auth';
import project from './routes/project';

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/auth', auth);
app.use('/project', (req, res) => res.send({ ok: true }));

export default app;