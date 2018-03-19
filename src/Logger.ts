/**
 * Logging class
 */
import * as winston from 'winston';

export class Logger {
     public log(info: any) {
         winston.log('info', info);
     }
 }

export function log(info: any) {
    winston.log('info', info);
}
export function error(err: any) {
    winston.error('error', err);
}
