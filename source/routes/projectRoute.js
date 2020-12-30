'use strict';
import express from "express";
import project from '../controllers/project';
import authMiddleware from '../middlewares/auth';

const router = express.Router();

router.use(authMiddleware);

router.get('/', project);

export default router;