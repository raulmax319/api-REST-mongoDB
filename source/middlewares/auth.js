'user strict';
import jwt from 'jsonwebtoken';
import 'dotenv/config';

export default function(req, res, next) {
    const authHeader = req.headers.authorization;

    if(!authHeader) return res.status(401).send({ error: 'Token nao providenciado' });

    const parts = authHeader.split(' ');

    if(!parts.length === 2) return res.status(401).send({ error: 'Token nao definido' });

    const [ scheme, token ] = parts;

    if(!/^Bearer$/i.test(scheme)) return res.status(401).send({ error: 'Token mal formatado' });

    jwt.verify(token, process.env.AUTH_SECRET, (err, decoded) => {
        if(err) return res.status(401).send({ error: 'Token invalido' });

        req.userId = decoded.id;
        return next();
    });
}