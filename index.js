'use strict;'

import 'dotenv/config.js';
import app from './source/app';

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));