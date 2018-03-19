/**
 * The main file.
 */

import * as dotenv from 'dotenv';

// Load environment variables from .env file, where API keys and passwords are configured.
//
dotenv.config({ path: '.env' });

import * as logger from './Logger';
import * as service from './service';

// get the running port
//
const port = process.env.PORT || 3000;

// Start Express server.
//
service.app.listen(port, () => {
    logger.log(`  App  is running at localhost: ${port}`);
    logger.log('  Press CTRL-C to stop\n');
});
