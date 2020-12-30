import jwt from 'jsonwebtoken';
import 'dotenv/config';

export default function gerarToken(param = {}) {
    return jwt.sign(param, process.env.AUTH_SECRET, { expiresIn: 3600 });
}