"use strict";
/**
 * The main file.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
//import expressValidator = require('express-validator');
//import * as routes from './routes';
//import * as auth from './service-common/Auth';
//import * as swaggerDoc from './swagger/swaggerDoc';
// Create Express server.
//
const app = express();
exports.app = app;
// Express configuration.
//
app.use(bodyParser.json());
app.use(cors());
//# sourceMappingURL=service.js.map