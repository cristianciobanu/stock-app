"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Logging class
 */
const winston = require("winston");
class Logger {
    log(info) {
        winston.log('info', info);
    }
}
exports.Logger = Logger;
function log(info) {
    winston.log('info', info);
}
exports.log = log;
function error(err) {
    winston.error('error', err);
}
exports.error = error;
//# sourceMappingURL=Logger.js.map