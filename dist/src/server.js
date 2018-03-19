"use strict";
/**
 * The main file.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
// Load environment variables from .env file, where API keys and passwords are configured.
//
dotenv.config({ path: '.env' });
const logger = require("./Logger");
const service = require("./service");
// get the running port
//
const port = process.env.PORT || 3000;
// Start Express server.
//
service.app.listen(port, () => {
    logger.log(`  App  is running at localhost: ${port}`);
    logger.log('  Press CTRL-C to stop\n');
});
//# sourceMappingURL=server.js.map