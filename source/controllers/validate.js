'use strict';
import bcrypt from 'bcryptjs';
import User from '../models/user';
import gerarToken from '../config/token';

export default async function validate(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select('+password');

    if(!user) return res.status(400).send({ error: 'Email nao registrado' });
    if(!await bcrypt.compare(password, user.password)) return res.status(400).send({ error: 'Senha invalida' });

    user.password = undefined;

    res.send({
        user,
        token: gerarToken({ id: user.id })
    });
}