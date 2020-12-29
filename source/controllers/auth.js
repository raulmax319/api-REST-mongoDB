'use strict';
import express from 'express';
import User from '../modules/user';

const router = express.Router();

router.post('/register', async (req, res) => {
    const { email } = req.body;

    try {
        if(await User.findOne({ email }))
            return res.status(400).send({ error: `Email ja esta registrado`});

        const user = await User.create(req.body);
        user.password = undefined;

        return res.send({ user });
    } catch (err) {
        return res.status(400).send({ error: `Falha ao registrar` });
    }
});

export default router;