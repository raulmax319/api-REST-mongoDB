'use strict';
import express from 'express';

import register from '../controllers/register';
import validate from '../controllers/validate';

const router = express.Router();

router.post('/register', register);

router.post('/validate', validate);

export default router;