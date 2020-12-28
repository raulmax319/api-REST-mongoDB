'use strict';
import 'dotenv/config.js';
import mongoose, { mongo } from 'mongoose';

const URI = process.env.DB_URI;

mongoose.connect(URI, {
    dbName: process.env.DB_NAME,
    user: process.env.DB_USER,
    pass: process.env.DB_PASS,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});
mongoose.Promise = global.Promise;

mongoose.connection.on('connected', () => console.log('Connection with the database was successful'));
mongoose.connection.on('error', err => console.error('Oops...', err));

export default mongoose;