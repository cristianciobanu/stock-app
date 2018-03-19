/**
 * The main file.
 */

import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as express from 'express';
//import expressValidator = require('express-validator');
//import * as routes from './routes';
//import * as auth from './service-common/Auth';
//import * as swaggerDoc from './swagger/swaggerDoc';

// Create Express server.
//
const app = express();

// Express configuration.
//
app.use(bodyParser.json());
app.use(cors());

// Register auth validator
//
//app.use(auth.validateHeader(['/api-docs']));
// Register swagger doc.
//
//swaggerDoc.setup(app);

// Register the controllers
//
//routes.setup(app);

export {app};
