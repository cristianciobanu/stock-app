"use strict";
/**
 * functions that configure swagger
 */
Object.defineProperty(exports, "__esModule", { value: true });
const swaggerUiExpress = require("swagger-ui-express");
const yamljs = require("yamljs");
exports.setup = (app) => {
    const swaggerDocument = yamljs.load('./dist/src/swagger/swagger.yaml');
    swaggerDocument.host = process.env.HOST;
    swaggerDocument.securityDefinitions.review_it_auth.tokenUrl = `${process.env.AUTH_CLIENT_ENDPOINT}oauth/token`;
    //swaggerDocument.basePath = '/v2';
    app.use('/api-docs', swaggerUiExpress.serve, swaggerUiExpress.setup(swaggerDocument));
};
//# sourceMappingURL=swaggerDoc.js.map