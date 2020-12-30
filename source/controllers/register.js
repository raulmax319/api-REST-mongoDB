'use strict';
import User from '../models/User';
import gerarToken from '../config/token';

export default async function register(req, res) {
    const { email } = req.body;

    try {
        if (await User.findOne({ email }))
            return res.status(400).send({ error: `Email ja esta registrado` });

        const user = await User.create(req.body);
        user.password = undefined;

        return res.send({
            user,
            token: gerarToken({ id: user.id })
        });
    } catch (err) {
        return res.status(400).send({ error: `Falha ao registrar` });
    }
}