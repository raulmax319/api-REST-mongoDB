'use strict;'
import express from 'express';

const app = express();


app.get('/', (req, res) => {
    //...
    res.send("Funcionando");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));