import dotenv from 'dotenv';

dotenv.config();

import * as http from 'node:http2';
// import database from './database/index.js';
import app from './server.js';

// void database().then().catch();
//
http.createServer(app).listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT || 3000}`);
});
