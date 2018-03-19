/**
 * functions that configure swagger
 */

import { Express } from 'express';
import swaggerJsdoc = require('swagger-jsdoc');
import swaggerUiExpress = require('swagger-ui-express');
import yamljs = require('yamljs');

export const setup = (app: Express) => {
  const swaggerDocument = yamljs.load('./dist/src/swagger/swagger.yaml');
  swaggerDocument.host = process.env.HOST;
  swaggerDocument.securityDefinitions.review_it_auth.tokenUrl = `${process.env.AUTH_CLIENT_ENDPOINT}oauth/token`;
  //swaggerDocument.basePath = '/v2';
  app.use('/api-docs', swaggerUiExpress.serve, swaggerUiExpress.setup(swaggerDocument));
};
